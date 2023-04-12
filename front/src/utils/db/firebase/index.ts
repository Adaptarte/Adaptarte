import firestore from "@react-native-firebase/firestore";

import type { DBUser } from "../types";
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

export { addUser, refUser };
