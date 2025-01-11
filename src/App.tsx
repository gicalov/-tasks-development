import { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import FallingSnowflake from "./components/FallingSnowflake";
import CenteredBlock from "./components/CenteredBlock";
import "./App.css";

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const App = () => {
  const [layerSize, setLayerWidth] = useState(getWindowSize);

  useEffect(() => {
    const handleResize = () => {
      setLayerWidth(getWindowSize());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="background-container">
        <Stage width={layerSize.width - 8} height={layerSize.height - 20}>
          <Layer>
            {[...Array(500)].map((_, i) => (
              <FallingSnowflake layerSize={layerSize} key={i} />
            ))}
          </Layer>
        </Stage>
      </div>
      <CenteredBlock />
    </div>
  );
};

export default App;
