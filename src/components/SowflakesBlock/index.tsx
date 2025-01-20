import React, { useEffect, useState, useRef, useMemo } from "react";
import { Stage, Layer } from "react-konva";
import FallingSnowflake from "../FallingSnowflake";
import { ISowflakesBlock } from "../interfaces";
import "./style.css";

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const SowflakesBlock: React.FC<ISowflakesBlock> = ({
  snowflakeOptions,
  children,
}) => {
  const [layerSize, setLayerSize] = useState(getWindowSize);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (boxRef.current) {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setLayerSize({ width, height });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const count = useMemo(() => {
    return [...Array(Math.abs(snowflakeOptions?.snowflakesCount || 50))];
  }, [snowflakeOptions?.snowflakesCount]);

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      ref={boxRef}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <Stage width={layerSize.width} height={layerSize.height}>
          <Layer>
            {count.map((_, i) => (
              <FallingSnowflake
                layerSize={layerSize}
                key={i}
                snowflakeOptions={snowflakeOptions}
              />
            ))}
          </Layer>
        </Stage>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SowflakesBlock;
