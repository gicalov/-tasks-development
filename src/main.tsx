import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SowflakesBlock from "./components/SowflakesBlock";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "100vw", height: "100vh" }}>
      <SowflakesBlock
        snowflakeOptions={{
          // 0.9 => 90 / 110
          snowflakeSize: 100,
          snowflakeType: 6,

          fallingSpeed: 10,
          snowflakesCount: 300,
          isSynchronousRotation: false,
          branchesCount: 2,
        }}
      />
    </div>
  </StrictMode>
);
