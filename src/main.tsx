import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SowflakesBlock from "./components/SowflakesBlock";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "100vw", height: "100vh" }}>
      <SowflakesBlock
        snowflakeOptions={{
          snowflakeSize: 80,
          snowflakeType: 1,
          sizeSpread: 90,
          fallingSpeed: 2,
          snowflakesCount: 20,
          isSynchronousRotation: false,
          branchesCount: 6,
        }}
      />
    </div>
  </StrictMode>
);
