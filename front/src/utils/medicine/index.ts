import type { MedicineIntake, MedicineRecipe } from "types/medicine";
import { compareDates, MS_PER_HOUR } from "utils/date";

import { recipes } from "./data";

const getLastIntakes = (data: MedicineIntake[]): MedicineIntake[] => {
  return data.reduce<MedicineIntake[]>((acc, curr) => {
    if (compareDates(curr.date, acc[curr.recipe].date, false) > 0) {
      acc[curr.recipe] = curr;
    }
    return acc;
  }, []);
};

const getNextIntake = (recipe: MedicineRecipe, last?: MedicineIntake): Date => {
  if (last === undefined) {
    return new Date(recipe.takeFrom);
  }
  return new Date(last.date.getTime() + recipe.interval * MS_PER_HOUR);
};

const getRecipeById = (id: number): MedicineRecipe => {
  const expected = recipes[id - 1];
  if (id !== expected.id) {
    throw new Error("Unexpected recipe id");
  }
  return expected;
};

export { getLastIntakes, getNextIntake, getRecipeById, recipes };
