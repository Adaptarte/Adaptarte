const foodTypes = ["liquids", "carbs", "fruitsAndVegetables", "dairy"] as const;
type FoodType = (typeof foodTypes)[number];

interface IConsumption {
  date: Date;
  food: number;
  id: number;
}

interface IFood {
  id: number;
  image: number;
  name: string;
  type: FoodType;
}

export { foodTypes };
export type { IConsumption, IFood };
