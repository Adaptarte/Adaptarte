import { arr } from "utils/array";
import type { DBDoc, DBFoodIntake } from "utils/db/types";

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
  data: DBDoc<DBFoodIntake>[]
): Record<IFood["type"], DBDoc<DBFoodIntake>[]> => {
  const res: Record<IFood["type"], DBDoc<DBFoodIntake>[]> = {
    carbs: [],
    dairy: [],
    fruitsAndVegetables: [],
    liquids: []
  };

  data.forEach((el) => {
    const type = getFoodById(el.data.food).type;
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
