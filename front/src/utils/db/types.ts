import type { ObjectSchema, PropertiesTypes } from "realm";

import type { IDailyGoal } from "types/dailyGoals";
import type { IConsumption } from "types/food";
import type { StrictUnion } from "utils/types";

interface SchemaTypes {
  Consumption: IConsumption;
  DailyGoal: IDailyGoal;
}

type SchemaName = keyof SchemaTypes;

type SchemaType<T extends SchemaName> = StrictUnion<
  SchemaTypes[T] & { readonly id: number }
>;

interface SchemaProps extends PropertiesTypes {
  id: "int";
}

interface Schema extends ObjectSchema {
  name: SchemaName;
  primaryKey: "id";
  properties: SchemaProps;
}

export type { SchemaName, SchemaType, Schema };
