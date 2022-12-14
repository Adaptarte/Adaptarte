type TFoodCategory = "liquids" | "carbs" | "fruitsAndVegetables" | "dairy";

interface IFood {
  category: TFoodCategory;
  image: number;
  name: string;
}

export type { IFood, TFoodCategory };
