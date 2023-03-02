import type { Schema } from "./types";

const schemas: Schema[] = [
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
    name: "Food",
    primaryKey: "id",
    properties: {
      id: "int",
      name: "string",
      type: "string"
    }
  }
];

export { schemas };
