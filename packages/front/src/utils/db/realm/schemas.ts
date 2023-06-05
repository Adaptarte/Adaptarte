import type { Schema } from "./types";

const schemas: Schema[] = [
  {
    name: "Tension",
    primaryKey: "id",
    properties: {
      date: "date",
      diastolic: "int",
      id: "int",
      systolic: "int"
    }
  },
  {
    name: "FoodIntake",
    primaryKey: "id",
    properties: {
      date: "date",
      food: "int",
      id: "int"
    }
  },
  {
    name: "MedicineIntake",
    primaryKey: "id",
    properties: {
      date: "date",
      id: "int",
      recipe: "int"
    }
  },
  {
    name: "MedicineRecipe",
    primaryKey: "id",
    properties: {
      amount: "int",
      details: "string",
      id: "int",
      interval: "float",
      medicine: "string",
      takeFrom: "date"
    }
  }
];

export { schemas };
