import { ReactNode } from "react";

export interface IFallingSnowflake {
  layerSize: { width: number; height: number };
  snowflakeOptions?: ISnowflakeOptions;
}

export interface IShapePositionRef {
  positionX: number;
  positionY: number;
}

export interface ISnowflakeOptions {
  snowflakesCount?: number;
  snowflakeSize?: number;
  branchesCount?: number;
  rotationSpeed?: number;
  fallingSpeed?: number;
  snowflakesColor?: string;
  snowflakeType?: number;
  isSynchronousRotation?: boolean;
  sizeSpread?: number;
}

export interface ISowflakesBlock {
  snowflakeOptions?: ISnowflakeOptions;
  children?: ReactNode;
}
