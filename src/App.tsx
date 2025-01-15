import CenteredBlock from "./components/CenteredBlock";
import SowflakesBlock from "./components/SowflakesBlock";
import "./App.css";

const App = () => {
  const snowflakeOptions = {
    // all fields are optional
    snowflakesCount: 50,
    snowflakeSize: 10,
    branchesCount: 6,
    rotationSpeed: 0.7,
    fallingSpeed: 0.7,
  };

  return (
    <div className="wrapper">
      <div className="background">
        <SowflakesBlock snowflakeOptions={snowflakeOptions} />{" "}
        {/* snowflakeOptions optional props */}
      </div>
      <CenteredBlock />
    </div>
  );
};

export default App;
