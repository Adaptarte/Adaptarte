import type { ObjectSchema, PropertiesTypes } from "realm";

import type { StrictUnion } from "utils/types";

import type { DBUserCollectionName, DBUserCollections } from "../types";

type SchemaType<T extends DBUserCollectionName> = StrictUnion<
  DBUserCollections[T] & { readonly id: number }
>;

type Collection<T extends DBUserCollectionName> = Realm.Collection<
  Realm.Object<SchemaType<T>> & SchemaType<T>
>;

interface SchemaProps extends PropertiesTypes {
  id: "int";
}

interface Schema extends ObjectSchema {
  name: DBUserCollectionName;
  primaryKey: "id";
  properties: SchemaProps;
}

export type { Collection, SchemaType, Schema };
