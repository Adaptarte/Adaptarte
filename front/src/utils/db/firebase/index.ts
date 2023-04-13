import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

import type { DBUser, DBUserCollections } from "../types";
import type { ColRef, DocRef, Query, QueryFilter } from "./types";

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

const useDbUser = (id: string): DBUser | undefined => {
  const [data, setData] = useState<DBUser>();

  useEffect(() => {
    return refUser(id).onSnapshot((snapshot) => {
      setData(snapshot.data());
    });
  }, [id]);

  return data;
};

const useDbUserData = <T extends keyof DBUserCollections>(
  user: string,
  collection: T,
  filter?: QueryFilter<DBUserCollections[T]>
): DBUserCollections[T][] | undefined => {
  const [data, setData] = useState<DBUserCollections[T][]>();

  useEffect(() => {
    let ref = refUserCol(user, collection) as Query<DBUserCollections[T]>;
    filter?.forEach(([field, op, val]) => {
      ref = ref.where(field, op, val);
    });
    const sub = ref.onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      sub();
    };
  }, [user]);

  return data;
};

export { addUser, addUserData, delUserData, refUser, useDbUser, useDbUserData };
