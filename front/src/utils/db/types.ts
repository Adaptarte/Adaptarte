import type { ObjectSchema, PropertiesTypes } from "realm";

import type { IDailyGoal } from "types/dailyGoals";
import type { IConsumption } from "types/food";
import type { ITension } from "types/hypertension";
import type { MedicineIntake, MedicineRecipe } from "types/medicine";
import type { StrictUnion } from "utils/types";

interface SchemaTypes {
  Tension: ITension;
  Consumption: IConsumption;
  DailyGoal: IDailyGoal;
  MedicineIntake: MedicineIntake;
  MedicineRecipe: MedicineRecipe;
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
