import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

import { useUser } from "utils/auth";
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

const useDbUser = (): DBUser | undefined => {
  const [data, setData] = useState<DBUser>();
  const { uid } = useUser();

  useEffect(() => {
    return refUser(uid).onSnapshot((snapshot) => {
      setData(snapshot.data());
    });
  }, [setData, uid]);

  return data;
};

const useDbUserData = <T extends keyof DBUserCollections>(
  collection: T,
  filter?: QueryFilter<DBUserCollections[T]>
): DBDoc<DBUserCollections[T]>[] => {
  const [data, setData] = useState<DBDoc<DBUserCollections[T]>[]>([]);
  const { uid } = useUser();

  useEffect(() => {
    let ref = refUserCol(uid, collection) as Query<DBUserCollections[T]>;
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
  }, [collection, setData, uid]);

  return data;
};

export { addUser, refUser, refUserCol, useDbUser, useDbUserData };
