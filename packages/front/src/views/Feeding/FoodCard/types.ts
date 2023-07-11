import type { DBDoc, DBFoodIntake } from "utils/db/types";

interface FoodCardProps extends DBDoc<DBFoodIntake> {
  onDelete?: (id: string) => void;
}

export type { FoodCardProps };
