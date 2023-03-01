import type { ObjectSchema } from "realm";

const schemas: ObjectSchema[] = [
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
