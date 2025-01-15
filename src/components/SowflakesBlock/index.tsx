import { useEffect, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import FallingSnowflake from "../FallingSnowflake";
import { ISowflakesBlock } from "../../interfaces";
import "./style.css";

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const SowflakesBlock: React.FC<ISowflakesBlock> = ({ snowflakeOptions }) => {
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

  return (
    <div className="background-container" ref={boxRef}>
      <Stage width={layerSize.width - 8} height={layerSize.height - 20}>
        <Layer>
          {[...Array(snowflakeOptions?.snowflakesCount || 50)].map((_, i) => (
            <FallingSnowflake
              layerSize={layerSize}
              key={i}
              snowflakeOptions={snowflakeOptions}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default SowflakesBlock;
