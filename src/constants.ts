export const initSnowflakeOptions = {
  snowflakeType: 1,
  snowflakesCount: 30,
  snowflakeSize: 20,
  sizeSpread: 0,
  branchesCount: 6,
  rotationSpeed: 2,
  fallingSpeed: 1,
  snowflakesColor: "#00D2FF",
  isSynchronousRotation: true,
};

export const inputOptions = [
  {
    label: "Скин снежинок:",
    name: "snowflakeType",
    type: "range",
    min: 1,
    max: 6,
    step: 1,
  },
  {
    label: "Размер снежинки:",
    name: "snowflakeSize",
    type: "range",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    label: "Процент разброса размера:",
    name: "sizeSpread",
    type: "range",
    min: 0,
    max: 90,
    step: 10,
  },
  {
    label: "Число ветвей:",
    name: "branchesCount",
    type: "range",
    min: 1,
    max: 40,
    step: 1,
  },
  {
    label: "Скорость падения:",
    name: "fallingSpeed",
    type: "range",
    min: -10,
    max: 20,
    step: 0.1,
  },
  {
    label: "Скорость вращения:",
    name: "rotationSpeed",
    type: "range",
    min: -10,
    max: 10,
    step: 1,
  },
  { label: "Цвет снежинки:", name: "snowflakesColor", type: "color" },
  {
    label: "Колличество снежинок:",
    name: "snowflakesCount",
    type: "range",
    min: 1,
    max: 300,
    step: 10,
  },
];

export const styles = {
  backGroundDark: { backgroundColor: "black" },
};
