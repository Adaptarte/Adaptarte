import type { ImgName } from "components/Img/types";

const foodTypes = [
  "liquids",
  "carbs",
  "fruitsAndVegetables",
  "dairy",
  "protein",
] as const;
type FoodType = (typeof foodTypes)[number];

interface IFood {
  id: number;
  img: ImgName;
  name: string;
  type: FoodType;
}

export { foodTypes };
export type { IFood };
