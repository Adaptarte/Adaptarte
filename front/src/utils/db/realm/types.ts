import type { ObjectSchema, PropertiesTypes } from "realm";

import type { ITension } from "types/hypertension";
import type { IMedicineIntake, IMedicineRecipe } from "types/medicine";
import type { IConsumption } from "utils/food/types";
import type { StrictUnion } from "utils/types";

interface SchemaTypes {
  Tension: ITension;
  Consumption: IConsumption;
  MedicineIntake: IMedicineIntake;
  MedicineRecipe: IMedicineRecipe;
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
