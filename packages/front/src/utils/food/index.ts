import { arr } from "utils/array";
import type { SchemaType } from "utils/db/realm/types";

import { food } from "./data";
import type { IFood } from "./types";

const getConsumptionExpected = (type: IFood["type"], current = 0): number[] => {
  const expected: Record<IFood["type"], number> = {
    carbs: 4,
    dairy: 2,
    fruitsAndVegetables: 4,
    liquids: 5
  };
  return arr(expected[type] - current);
};

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

const groupConsumptionByFoodType = (
  data: SchemaType<"Consumption">[]
): Record<IFood["type"], SchemaType<"Consumption">[]> => {
  const res: Record<IFood["type"], SchemaType<"Consumption">[]> = {
    carbs: [],
    dairy: [],
    fruitsAndVegetables: [],
    liquids: []
  };

  data.forEach((el) => {
    const type = getFoodById(el.food).type;
    res[type].push(el);
  });
  return res;
};

export {
  food,
  getConsumptionExpected,
  getFoodByType,
  getFoodById,
  groupConsumptionByFoodType
};
