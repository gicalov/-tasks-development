import { ISowflakesBlock } from "./src/components/interfaces";

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "falling-snowflakes-2" {
  export const SowflakesBlock: React.FC<ISowflakesBlock>;
}

export {};
