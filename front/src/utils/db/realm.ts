import { createRealmContext } from "@realm/react";

import { schemas } from "./schemas";
import type { SchemaName, SchemaType } from "./types";

const { RealmProvider, useRealm } = createRealmContext({
  schema: schemas
});

const dbCreate = <T extends SchemaName>(
  realm: Realm,
  name: T,
  object: Omit<SchemaType<T>, "id">
): SchemaType<T> => {
  // Generate id
  const docIds = dbObjects(realm, name).map((el) => el.id);
  const id = Math.max(0, ...docIds) + 1;

  const doc = { ...object, id } as SchemaType<T>;
  return realm.create(name, doc);
};

const dbObjects = <T extends SchemaName>(
  realm: Realm,
  name: T
): SchemaType<T>[] => {
  return Array.from<SchemaType<T>>(realm.objects(name));
};

const dbDelete = <T extends SchemaName>(
  realm: Realm,
  name: T,
  id: number
): void => {
  const docIds = dbObjects(realm, name).filter((el) => el.id === id)[0];

  realm.delete(docIds);
};

export { dbCreate, dbObjects, dbDelete, RealmProvider, useRealm };
