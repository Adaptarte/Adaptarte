import { addTime, compareDates, setDayTime } from "utils/date";
import type { DBDoc, DBMedicineIntake, DBMedicineRecipe } from "utils/db/types";

import { recipes } from "./data";
import type { MedicineRecipeGoals, MedicineRecipeIntakes } from "./types";

const groupMedicines = (
  recipes: DBDoc<DBMedicineRecipe>[],
  intakes: DBDoc<DBMedicineIntake>[],
): MedicineRecipeIntakes[] => {
  const medicines: Record<string, MedicineRecipeIntakes> = {};
  recipes.reduce((acc, recipe) => {
    acc[recipe.id] = { intakes: [], recipe };
    return acc;
  }, medicines);
  intakes.forEach((intake) => {
    medicines[intake.data.recipe].intakes.push(intake);
  });
  return Object.values(medicines).map((el) => {
    el.intakes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
    return el;
  });
};

const getMedicineGoals = (
  recipes: DBDoc<DBMedicineRecipe>[],
  intakes: DBDoc<DBMedicineIntake>[],
): MedicineRecipeGoals[] => {
  const medicines = groupMedicines(recipes, intakes);
  const today = setDayTime(new Date(), 0);
  const tomorrow = addTime(new Date(today), 1, "day");
  return medicines.map((medicine) => {
    let date = medicine.intakes[0]?.data.date ?? medicine.recipe.data.date;
    medicine.intakes = medicine.intakes.filter(
      (el) => el.data.date.getTime() >= today.getTime(),
    );
    const goals: Date[] = [];
    while (goals.length < 2) {
      date = addTime(new Date(date), medicine.recipe.data.interval, "hour");
      if (date.getTime() >= tomorrow.getTime()) {
        break;
      }
      goals.unshift(date);
    }
    return Object.assign({ goals }, medicine);
  });
};

const getLastIntakes = (
  data: DBDoc<DBMedicineIntake>[],
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
  last?: DBMedicineIntake,
): Date => {
  if (last === undefined) {
    return new Date(recipe.date);
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

export {
  getLastIntakes,
  getMedicineGoals,
  getNextIntake,
  getRecipeById,
  recipes,
};
