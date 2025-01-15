import CenteredBlock from "./components/CenteredBlock";
import SowflakesBlock from "./components/SowflakesBlock";
import "./App.css";

const App = () => {
  const snowflakeOptions = {
    snowflakeSize: 10,
    branchesCount: 6,
    rotationSpeed: 0.7,
    fallingSpeed: 0.7,
  };

  return (
    <div className="wrapper">
      <div className="background">
        <SowflakesBlock snowflakeOptions={snowflakeOptions} />
      </div>
      <CenteredBlock />
    </div>
  );
};

export default App;
