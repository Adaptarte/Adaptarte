import firestore from "@react-native-firebase/firestore";

import type { DBUser, DBUserCollections } from "../types";
import type { DocRef } from "./types";

const refUser = (id: string): DocRef<DBUser> => {
  return firestore().collection<DBUser>("Users").doc(id);
};

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
  const ref = refUser(user).collection(collection);
  return ref.add(data) as Promise<DocRef<DBUserCollections[T]>>;
};

export { addUser, addUserData, refUser };
