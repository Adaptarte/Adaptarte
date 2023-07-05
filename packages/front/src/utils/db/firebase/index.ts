import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

import { fillDiseases } from "utils/patient";

import type { DBDoc, DBUser, DBUserCollections } from "../types";
import type { ColRef, DocRef, Query, QueryFilter } from "./types";

const addUser = async (id: string): Promise<void> => {
  const snapshot = await refUser(id).get();
  if (!snapshot.exists) {
    return snapshot.ref.set({
      diet: {
        carbs: 3,
        dairy: 3,
        fruitsAndVegetables: 4,
        liquids: 6,
        protein: 2
      },
      diseases: fillDiseases(),
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

const timestampsToDate = <T>(obj: T): T => {
  if (obj instanceof firestore.Timestamp) {
    return obj.toDate() as T;
  } else if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      obj[key] = timestampsToDate(obj[key]);
    }
  }
  return obj;
};

const useDbUser = (id: string): DBUser | undefined => {
  const [data, setData] = useState<DBUser>();

  useEffect(() => {
    return refUser(id).onSnapshot((snapshot) => {
      setData(snapshot.data());
    });
  }, [id, setData]);

  return data;
};

const useDbUserData = <T extends keyof DBUserCollections>(
  user: string,
  collection: T,
  filter?: QueryFilter<DBUserCollections[T]>
): DBDoc<DBUserCollections[T]>[] => {
  const [data, setData] = useState<DBDoc<DBUserCollections[T]>[]>([]);

  useEffect(() => {
    let ref = refUserCol(user, collection) as Query<DBUserCollections[T]>;
    filter?.forEach(([field, op, val]) => {
      ref = ref.where(field, op, val);
    });
    return ref.onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          data: timestampsToDate(doc.data()),
          id: doc.id
        }))
      );
    });
  }, [collection, setData, user]);

  return data;
};

export { addUser, addUserData, delUserData, refUser, useDbUser, useDbUserData };
