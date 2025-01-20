import React, { useRef, useEffect, memo, useCallback } from "react";
import Konva from "konva";
import { limitValue } from "../../helpers/limitValue";
import { getBranchParams } from "../../helpers/getBranchParams";
import {
  IFallingSnowflake,
  IShapePositionRef,
  ISnowflakeOptions,
} from "../interfaces";
import { Shape as ShapeType } from "konva/lib/Shape";
import { Context } from "konva/lib/Context";
import { Shape } from "react-konva";

const getHAhaha =
  (context: Context, shape: ShapeType) =>
  ({
    snowflakeSize,
    branchesCount,
    snowflakeType,
  }: Required<ISnowflakeOptions>) => {
    const centerX = snowflakeSize / 2;
    const centerY = snowflakeSize / 2;
    const branchLength = snowflakeSize / 2;

    context.beginPath();

    const drawSnowflake = () => {
      for (let i = 0; i < branchesCount; i++) {
        const angle = (i * Math.PI) / (branchesCount / 2);

        const startX = centerX + Math.cos(angle) * branchLength;
        const startY = centerY + Math.sin(angle) * branchLength;

        context.moveTo(centerX, centerY);
        context.lineTo(startX, startY);

        const drawingData = getBranchParams(snowflakeType);

        for (let j = 1; j <= 9; j++) {
          const angleOffset = (Math.PI / drawingData.angleSegmentsCount) * j;

          const branchOffsetX =
            startX +
            Math.cos(angle + angleOffset) *
              (branchLength / drawingData.branchShorteningFactor);
          const branchOffsetY =
            startY +
            Math.sin(angle + angleOffset) *
              (branchLength / drawingData.branchShorteningFactor);

          context.moveTo(startX, startY);
          context.lineTo(branchOffsetX, branchOffsetY);
        }
      }
    };

    drawSnowflake();

    context.closePath();
    context.fillStrokeShape(shape);
  };

const FallingSnowflake: React.FC<IFallingSnowflake> = ({
  layerSize,
  snowflakeOptions,
}) => {
  const shapeRef = useRef<Konva.Shape>(null);
  const shapePositionRef = useRef<IShapePositionRef | null>(null);

  const branchesCount = limitValue(snowflakeOptions?.branchesCount || 6, 40);
  const rotationSpeed = limitValue(snowflakeOptions?.rotationSpeed ?? 0.7, 200);
  const fallingSpeed = limitValue(snowflakeOptions?.fallingSpeed ?? 0.7, 1000);
  const snowflakesColor = snowflakeOptions?.snowflakesColor || "#00D2FF";
  const snowflakeType = snowflakeOptions?.snowflakeType || 1;

  const isSynchronousRotation = snowflakeOptions?.isSynchronousRotation ?? true;

  const snowflakeSize =
    (layerSize.width / 1000) *
    limitValue(snowflakeOptions?.snowflakeSize || 10, 100);

  useEffect(() => {
    if (shapeRef.current) {
      const shape = shapeRef.current;
      const stageHeight = layerSize.height;
      const endY = stageHeight + 100;
      const stageWidth = layerSize.width;
      const shapeWidth = shape.width();

      const startCoordinate = shapePositionRef.current
        ? {
            positionX: shapePositionRef.current.positionX * stageWidth,
            positionY: shapePositionRef.current.positionY * stageHeight,
          }
        : {
            positionX: Math.random() * (stageWidth - shapeWidth),
            positionY: Math.random() * stageHeight * 2 - stageHeight * 2,
          };

      shape.y(startCoordinate.positionY);
      shape.x(startCoordinate.positionX);

      if (!isSynchronousRotation) {
        shape.rotation(shape.rotation() + Math.random() * 100);
      }

      const anim = new Konva.Animation(() => {
        shape.y(shape.y() + (layerSize.height / 1000) * fallingSpeed);
        shape.rotation(shape.rotation() + rotationSpeed);

        if (shape.y() > endY) {
          shape.y(Math.random() * stageHeight - stageHeight);
          shape.x(Math.random() * (stageWidth - shapeWidth));
        }
        if (shape.y() < -stageHeight * 2) {
          shape.y(endY);
          shape.x(Math.random() * (stageWidth - shapeWidth));
        }
      }, shape.getLayer());

      anim.start();

      return () => {
        anim.stop();
        shapePositionRef.current = {
          positionX: shape.x() / stageWidth,
          positionY: shape.y() / stageHeight,
        };
      };
    }
  }, [fallingSpeed, isSynchronousRotation, layerSize, rotationSpeed]);

  const getCtx = useCallback(
    (con: Context, shape: ShapeType) => {
      return getHAhaha(
        con,
        shape
      )({
        branchesCount,
        fallingSpeed,
        isSynchronousRotation,
        rotationSpeed,
        snowflakesColor,
        snowflakesCount: 1000,
        snowflakeSize,
        snowflakeType,
      });
    },
    [
      branchesCount,
      fallingSpeed,
      isSynchronousRotation,
      rotationSpeed,
      snowflakeSize,
      snowflakeType,
      snowflakesColor,
    ]
  );

  return (
    <Shape
      ref={shapeRef}
      width={snowflakeSize}
      height={snowflakeSize}
      offsetX={snowflakeSize / 2}
      offsetY={snowflakeSize / 2}
      sceneFunc={getCtx}
      fill={snowflakesColor}
      stroke={snowflakesColor}
      strokeWidth={snowflakeSize / 10}
    />
  );
};

export default memo(FallingSnowflake);
