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
    name: "Consumption",
    primaryKey: "id",
    properties: {
      date: "date",
      food: "int",
      id: "int"
    }
  },
  {
    name: "DailyGoal",
    primaryKey: "id",
    properties: {
      done: "bool",
      id: "int",
      time: "int",
      title: "string",
      type: "string"
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
