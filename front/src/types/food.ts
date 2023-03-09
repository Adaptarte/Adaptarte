const foodTypes = <const>["liquids", "carbs", "fruitsAndVegetables", "dairy"];
type FoodType = (typeof foodTypes)[number];

interface IConsumption {
  date: Date;
  food: number;
}

interface IFood {
  id: number;
  image: number;
  name: string;
  type: FoodType;
}

export { foodTypes };
export type { IConsumption, IFood };
