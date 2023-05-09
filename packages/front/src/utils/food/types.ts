import type { ImgProps } from "components/Img/types";

const foodTypes = ["liquids", "carbs", "fruitsAndVegetables", "dairy"] as const;
type FoodType = (typeof foodTypes)[number];

interface IConsumption {
  date: Date;
  food: number;
  id: number;
}

interface IFood {
  id: number;
  img: ImgProps["src"];
  name: string;
  type: FoodType;
}

export { foodTypes };
export type { IConsumption, IFood };
