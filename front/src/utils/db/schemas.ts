import type { Schema } from "./types";

const schemas: Schema[] = [
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
  }
];

export { schemas };
