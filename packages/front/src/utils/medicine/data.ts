import type { DBDoc, DBMedicineRecipe } from "utils/db/types";

const recipes: DBDoc<DBMedicineRecipe>[] = [
  {
    data: {
      amount: 0,
      details: "Tomar 30 min antes del desayuno",
      interval: 24,
      medicine: "Levotiroxina x100 Mcgr",
      takeFrom: new Date(2023, 3, 1, 6)
    },
    id: "1"
  },
  {
    data: {
      amount: 0,
      details: "",
      interval: 12,
      medicine: "Amlodipino x 5mg",
      takeFrom: new Date(2023, 3, 1, 14)
    },
    id: "2"
  }
];

export { recipes };
