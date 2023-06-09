import { addTime, compareDates } from "utils/date";
import type { SchemaType } from "utils/db/realm/types";
import type { DBDoc, DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

import { recipes } from "./data";

const getLastIntakes = (
  data: DBDoc<DBMedicineIntake>[]
): DBDoc<DBMedicineIntake>[] => {
  return data.reduce<DBDoc<DBMedicineIntake>[]>((acc, curr) => {
    const accDate = acc[curr.data.recipe]?.data.date;
    if (
      accDate === undefined ||
      compareDates(curr.data.date, accDate, false) > 0
    ) {
      acc[curr.data.recipe] = curr;
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
