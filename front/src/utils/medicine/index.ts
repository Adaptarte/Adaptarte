import { MedicineRecipe } from "types/medicine";

import { recipes } from "./data";

const getRecipeById = (id: number): MedicineRecipe => {
  const expected = recipes[id - 1];
  if (id !== expected.id) {
    throw new Error("Unexpected recipe id");
  }
  return expected;
};

export { getRecipeById, recipes };
