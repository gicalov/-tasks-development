import { SowflakesBlock } from "falling-snowflakes-2";
import "./App.css";

const App = () => {
  const snowflakeOptions = {
    snowflakesCount: 30,
    snowflakeSize: 20,
    branchesCount: 6,
    rotationSpeed: -1.7,
    fallingSpeed: 3.7,
  };

  return (
    <div style={{ height: "800px", width: "100%" }}>
      <SowflakesBlock snowflakeOptions={snowflakeOptions}>
        <div
          style={{
            display: "flex",
            margin: "auto",
            // marginTop: "600px",
            backgroundColor: "red",
            width: "200px",
            height: "100px",
          }}
        ></div>
      </SowflakesBlock>
    </div>
  );
};

export default App;
