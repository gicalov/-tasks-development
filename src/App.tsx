import { useState } from "react";
import { SowflakesBlock } from "falling-snowflakes-2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const initSnowflakeOptions = {
  snowflakesCount: 30,
  snowflakeSize: 20,
  branchesCount: 6,
  rotationSpeed: -1.7,
  fallingSpeed: 3.7,
};

const App = () => {
  const [snowflakeOptions, setSnowflakeOptions] =
    useState(initSnowflakeOptions);

  return (
    <Router basename="/-tasks-development">
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ height: "800px", width: "100%" }}>
              <SowflakesBlock snowflakeOptions={snowflakeOptions}>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",

                    border: "solid",
                    width: "200px",
                    height: "100px",
                  }}
                ></div>
              </SowflakesBlock>
            </div>
          }
        />
        <Route path="*" element={<>пздц</>} />
      </Routes>
    </Router>
  );
};

export default App;
