export interface IFallingSnowflake {
  layerSize: { width: number; height: number };
  snowflakeOptions: ISnowflakeOptions;
}

export interface IShapePositionRef {
  positionX: number;
  positionY: number;
}

export interface ISnowflakeOptions {
  snowflakeSize: number;
  branchesCount: number;
  rotationSpeed: number;
  fallingSpeed: number;
}

export interface ISowflakesBlock {
  snowflakeOptions: ISnowflakeOptions;
}
