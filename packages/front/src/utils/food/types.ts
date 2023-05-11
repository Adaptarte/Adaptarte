import type { ImgProps } from "components/Img/types";

const foodTypes = ["liquids", "carbs", "fruitsAndVegetables", "dairy"] as const;
type FoodType = (typeof foodTypes)[number];

interface IFood {
  id: number;
  img: ImgProps["src"];
  name: string;
  type: FoodType;
}

export { foodTypes };
export type { IFood };
