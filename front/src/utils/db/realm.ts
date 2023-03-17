import { createRealmContext } from "@realm/react";

import { schemas } from "./schemas";
import type { SchemaName, SchemaType } from "./types";

const { RealmProvider, useRealm } = createRealmContext({
  schema: schemas
});

const create = <T extends SchemaName>(
  realm: Realm,
  name: T,
  object: Omit<SchemaType<T>, "id">
): SchemaType<T> => {
  // Generate id
  const docIds = objects(realm, name).map((el) => el.id);
  const id = Math.max(0, ...docIds) + 1;

  const doc = <SchemaType<T>>{ ...object, id };
  return realm.create(name, doc);
};

const objects = <T extends SchemaName>(
  realm: Realm,
  name: T
): SchemaType<T>[] => {
  return Array.from<SchemaType<T>>(realm.objects(name));
};

const deleteO = <T extends SchemaName>(
  realm: Realm,
  name: T,
  id: number
): void => {
  const docIds = objects(realm, name).filter((el) => el.id == id)[0];

  realm.delete(docIds);
};

export { create, objects, deleteO, RealmProvider, useRealm };
