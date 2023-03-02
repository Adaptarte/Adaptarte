import { schemas } from "./schemas";
import type { SchemaType, SchemaTypes } from "./types";

const getRealm = async (): Promise<Realm> => {
  return await Realm.open({
    schema: schemas
  });
};

const create = <T extends keyof SchemaTypes>(
  realm: Realm,
  name: T,
  object: SchemaType<T>
): SchemaType<T> => {
  return realm.create<SchemaType<T>>(name, object);
};

const objects = <T extends keyof SchemaTypes>(
  realm: Realm,
  name: T
): SchemaType<T>[] => {
  return Array.from<SchemaType<T>>(realm.objects(name));
};

export { create, getRealm, objects };
