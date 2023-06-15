import type { StrictUnion } from "utils/types";

import type { DBUserCollectionName, DBUserCollections } from "../types";

type SchemaType<T extends DBUserCollectionName> = StrictUnion<
  DBUserCollections[T] & { readonly id: number }
>;

export type { SchemaType };
