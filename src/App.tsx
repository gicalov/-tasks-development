import { useState, Fragment } from "react";
import { SowflakesBlock } from "falling-snowflakes-2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ISnowflakeOptions } from "./interfaces";
import { initSnowflakeOptions, inputOptions } from "./constants";
import "./App.css";

const App = () => {
  const [snowflakeOptions, setSnowflakeOptions] =
    useState(initSnowflakeOptions);

  const handleChangeSettings = (fieldName: string, value: number | string) => {
    setSnowflakeOptions({
      ...snowflakeOptions,
      [fieldName]: fieldName === "snowflakesColor" ? value : Number(value),
    });
  };

  return (
    <Router basename="/-tasks-development">
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                width: "100%",
                height: "100vh",
              }}
            >
              <SowflakesBlock snowflakeOptions={snowflakeOptions}>
                <div
                  style={{
                    margin: "auto",
                    border: "solid",
                    width: "240px",
                    padding: "20px",
                    boxSizing: "border-box",
                    maxHeight: "100vh",
                    overflow: "auto",
                  }}
                >
                  {inputOptions.map((inputBlock, i) => (
                    <Fragment key={i}>
                      <p>{`${inputBlock.label} ${
                        snowflakeOptions[
                          inputBlock.name as keyof ISnowflakeOptions
                        ]
                      }`}</p>

                      <input
                        style={{ width: "190px" }}
                        name={inputBlock.name}
                        type={inputBlock.type}
                        {...(inputBlock.type === "range" && {
                          min: inputBlock.min,
                          max: inputBlock.max,
                          step: inputBlock.step,
                        })}
                        step="1"
                        value={
                          snowflakeOptions[
                            inputBlock.name as keyof ISnowflakeOptions
                          ]
                        }
                        onChange={(e) =>
                          handleChangeSettings(e.target.name, e.target.value)
                        }
                      />
                    </Fragment>
                  ))}
                </div>
              </SowflakesBlock>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
