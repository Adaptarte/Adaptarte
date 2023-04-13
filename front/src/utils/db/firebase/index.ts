import firestore from "@react-native-firebase/firestore";

import type { DBUser, DBUserCollections } from "../types";
import type { ColRef, DocRef } from "./types";

const addUser = async (id: string): Promise<void> => {
  const snapshot = await refUser(id).get();
  if (!snapshot.exists) {
    return snapshot.ref.set({
      score: 0
    });
  }
};

const addUserData = async <T extends keyof DBUserCollections>(
  user: string,
  collection: T,
  data: DBUserCollections[T]
): Promise<DocRef<DBUserCollections[T]>> => {
  return refUserCol(user, collection).add(data);
};

const delUserData = <T extends keyof DBUserCollections>(
  user: string,
  collection: T,
  id: string
): void => {
  refUserCol(user, collection).doc(id).delete().catch(console.error);
};

const refUser = (id: string): DocRef<DBUser> => {
  return firestore().collection<DBUser>("Users").doc(id);
};

const refUserCol = <T extends keyof DBUserCollections>(
  user: string,
  collection: T
): ColRef<DBUserCollections[T]> => {
  return refUser(user).collection(collection) as ColRef<DBUserCollections[T]>;
};

export { addUser, addUserData, delUserData, refUser };
