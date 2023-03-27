import type { MedicineRecipe } from "types/medicine";

const recipes: MedicineRecipe[] = [
  {
    amount: 0,
    details: "Tomar 30 min antes del desayuno",
    id: 1,
    interval: 24,
    medicine: "Levotiroxina x100 Mcgr",
    takeFrom: new Date(2023, 3, 1, 6)
  },
  {
    amount: 0,
    id: 2,
    interval: 12,
    medicine: "Amlodipino x 5mg",
    takeFrom: new Date(2023, 3, 1, 14)
  }
];

export { recipes };