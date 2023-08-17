import type { DBDoc, DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

interface MedicineRecipeIntakes {
  intakes: DBDoc<DBMedicineIntake>[];
  recipe: DBDoc<DBMedicineRecipe>;
}

interface MedicineRecipeGoals extends MedicineRecipeIntakes {
  goals: Date[];
}

export type { MedicineRecipeIntakes, MedicineRecipeGoals };
