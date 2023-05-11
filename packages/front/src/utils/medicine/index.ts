import { addTime, compareDates } from "utils/date";
import type { SchemaType } from "utils/db/realm/types";
import type { DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

import { recipes } from "./data";

const getLastIntakes = (data: DBMedicineIntake[]): DBMedicineIntake[] => {
  return data.reduce<DBMedicineIntake[]>((acc, curr) => {
    const accDate = acc[curr.recipe]?.date;
    if (accDate === undefined || compareDates(curr.date, accDate, false) > 0) {
      acc[curr.recipe] = curr;
    }
    return acc;
  }, []);
};

const getNextIntake = (
  recipe: DBMedicineRecipe,
  last?: DBMedicineIntake
): Date => {
  if (last === undefined) {
    return new Date(recipe.takeFrom);
  }
  return addTime(new Date(last.date), recipe.interval, "hour");
};

const getRecipeById = (id: number): SchemaType<"MedicineRecipe"> => {
  const expected = recipes[id - 1];
  if (id !== expected.id) {
    throw new Error("Unexpected recipe id");
  }
  return expected;
};

export { getLastIntakes, getNextIntake, getRecipeById, recipes };
