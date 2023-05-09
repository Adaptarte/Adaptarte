import type { IMedicineIntake, IMedicineRecipe } from "types/medicine";
import { addTime, compareDates } from "utils/date";

import { recipes } from "./data";

const getLastIntakes = (data: IMedicineIntake[]): IMedicineIntake[] => {
  return data.reduce<IMedicineIntake[]>((acc, curr) => {
    const accDate = acc[curr.recipe]?.date;
    if (accDate === undefined || compareDates(curr.date, accDate, false) > 0) {
      acc[curr.recipe] = curr;
    }
    return acc;
  }, []);
};

const getNextIntake = (
  recipe: IMedicineRecipe,
  last?: IMedicineIntake
): Date => {
  if (last === undefined) {
    return new Date(recipe.takeFrom);
  }
  return addTime(new Date(last.date), recipe.interval, "hour");
};

const getRecipeById = (id: number): IMedicineRecipe => {
  const expected = recipes[id - 1];
  if (id !== expected.id) {
    throw new Error("Unexpected recipe id");
  }
  return expected;
};

export { getLastIntakes, getNextIntake, getRecipeById, recipes };
