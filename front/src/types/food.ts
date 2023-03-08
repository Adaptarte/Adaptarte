type FoodType = "carbs" | "dairy" | "fruitsAndVegetables" | "liquids";

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

export type { IConsumption, IFood };
