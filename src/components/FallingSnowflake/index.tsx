import React, { useRef, useEffect } from "react";
import Konva from "konva";
import { Shape } from "react-konva";
import { IFallingSnowflake, IShapePositionRef } from "../interfaces";

const FallingSnowflake: React.FC<IFallingSnowflake> = ({
  layerSize,
  snowflakeOptions,
}) => {
  const shapeRef = useRef<Konva.Shape>(null);
  const shapePositionRef = useRef<IShapePositionRef | null>(null);

  const branchesCount = snowflakeOptions?.branchesCount || 6;
  const rotationSpeed = snowflakeOptions?.rotationSpeed || 0.7;
  const fallingSpeed = snowflakeOptions?.fallingSpeed || 0.7;

  const snowflakeSize =
    (layerSize.width / 1000) * (snowflakeOptions?.snowflakeSize || 10);

  useEffect(() => {
    if (shapeRef.current) {
      const shape = shapeRef.current;
      const stageHeight = window.innerHeight;
      const endY = stageHeight + 100;
      const stageWidth = window.innerWidth;
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

      const anim = new Konva.Animation(() => {
        shape.y(shape.y() + (layerSize.height / 1000) * fallingSpeed);
        shape.rotation(shape.rotation() + rotationSpeed);

        if (shape.y() > endY) {
          shape.y(Math.random() * stageHeight - stageHeight);
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
  }, [fallingSpeed, layerSize, rotationSpeed]);

  return (
    <Shape
      ref={shapeRef}
      width={snowflakeSize}
      height={snowflakeSize}
      offsetX={snowflakeSize / 2}
      offsetY={snowflakeSize / 2}
      sceneFunc={(context, shape) => {
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

            for (let j = 1; j <= 9; j++) {
              const angleOffset = (Math.PI / 3) * j;

              const branchOffsetX =
                startX + Math.cos(angle + angleOffset) * (branchLength / 3);
              const branchOffsetY =
                startY + Math.sin(angle + angleOffset) * (branchLength / 3);

              context.moveTo(startX, startY);
              context.lineTo(branchOffsetX, branchOffsetY);
            }
          }
        };

        drawSnowflake();

        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill="#00D2FF"
      stroke="#00D2FF"
      strokeWidth={snowflakeSize / 10}
    />
  );
};

export default FallingSnowflake;
