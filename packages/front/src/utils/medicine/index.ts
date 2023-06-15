import { addTime, compareDates } from "utils/date";
import type { DBDoc, DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

import { recipes } from "./data";

const getLastIntakes = (
  data: DBDoc<DBMedicineIntake>[]
): DBDoc<DBMedicineIntake>[] => {
  return data.reduce<DBDoc<DBMedicineIntake>[]>((acc, curr) => {
    const i = parseInt(curr.data.recipe);
    const accDate = acc[i]?.data.date;
    if (
      accDate === undefined ||
      compareDates(curr.data.date, accDate, true) > 0
    ) {
      acc[i] = curr;
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

const getRecipeById = (id: string): DBDoc<DBMedicineRecipe> => {
  const expected = recipes[parseInt(id) - 1];
  if (id !== expected.id) {
    throw new Error("Unexpected recipe id");
  }
  return expected;
};

export { getLastIntakes, getNextIntake, getRecipeById, recipes };
