import type { IFood } from "types/food";

import { food } from "./data";

const getFoodByType = (type: IFood["type"]): IFood[] => {
  return food.filter((el) => el.type === type);
};

const getFoodById = (id: IFood["id"]): IFood => {
  const expected = food[id - 1];
  if (id !== expected.id) {
    throw new Error("Unexpected food id");
  }
  return expected;
};

export { food, getFoodByType, getFoodById };
