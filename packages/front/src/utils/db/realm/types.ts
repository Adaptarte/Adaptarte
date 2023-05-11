import type { ObjectSchema, PropertiesTypes } from "realm";

import type { StrictUnion } from "utils/types";

import type {
  DBFoodIntake,
  DBMedicineIntake,
  DBMedicineRecipe,
  DBTension
} from "../types";

interface SchemaTypes {
  Tension: DBTension;
  Consumption: DBFoodIntake;
  MedicineIntake: DBMedicineIntake;
  MedicineRecipe: DBMedicineRecipe;
}

type SchemaName = keyof SchemaTypes;

type SchemaType<T extends SchemaName> = StrictUnion<
  SchemaTypes[T] & { readonly id: number }
>;

type Collection<T extends SchemaName> = Realm.Collection<
  Realm.Object<SchemaType<T>> & SchemaType<T>
>;

interface SchemaProps extends PropertiesTypes {
  id: "int";
}

interface Schema extends ObjectSchema {
  name: SchemaName;
  primaryKey: "id";
  properties: SchemaProps;
}

export type { Collection, SchemaName, SchemaType, Schema };
