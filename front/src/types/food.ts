type TFoodCategory = "carbs" | "dairy" | "fruitsAndVegetables" | "liquids";

interface IFood {
  category: TFoodCategory;
  image: number;
  name: string;
}

export type { IFood, TFoodCategory };
