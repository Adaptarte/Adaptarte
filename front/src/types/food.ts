type FoodType = "carbs" | "dairy" | "fruitsAndVegetables" | "liquids";

interface IFood {
  id: number;
  image: number;
  name: string;
  type: FoodType;
}

export type { IFood };
