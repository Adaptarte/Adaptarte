import Realm from "realm";

import { schemas } from "./schemas";

const getRealm = async (): Promise<Realm> => {
  return await Realm.open({
    schema: schemas
  });
};

export { getRealm };
