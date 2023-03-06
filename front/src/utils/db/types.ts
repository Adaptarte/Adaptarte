import type { ObjectSchema, PropertiesTypes } from "realm";

import type { IDailyGoal } from "types/dailyGoals";
import type { IConsumption } from "types/food";
import type { StrictUnion } from "utils/types";

interface SchemaTypes {
  Consumption: IConsumption;
  DailyGoal: IDailyGoal;
}

type SchemaType<T extends keyof SchemaTypes> = StrictUnion<SchemaTypes[T]>;

interface SchemaProps extends PropertiesTypes {
  id: "int";
}

interface Schema extends ObjectSchema {
  name: keyof SchemaTypes;
  primaryKey: "id";
  properties: SchemaProps;
}

export type { SchemaType, SchemaTypes, Schema };
