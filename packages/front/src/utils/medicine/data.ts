import type { DBDoc, DBMedicineRecipe } from "utils/db/types";

const recipes: DBDoc<DBMedicineRecipe>[] = [
  {
    data: {
      date: new Date(2023, 3, 1, 6),
      details: "Tomar 30 min antes del desayuno",
      interval: 24,
      medicine: "Levotiroxina x100 Mcgr",
    },
    id: "1",
  },
  {
    data: {
      date: new Date(2023, 3, 1, 14),
      interval: 12,
      medicine: "Amlodipino x 5mg",
    },
    id: "2",
  },
];

export { recipes };
