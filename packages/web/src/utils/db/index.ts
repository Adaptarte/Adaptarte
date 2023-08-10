/* eslint-disable max-lines-per-function */
import type { QueryConstraint } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

import * as db from "utils/firebase/firestore";

import type { DBDoc, DBOperations, DBUser, DBUserCollections } from "./types";

const useDB = (uid: string): DBOperations => {
  const user = `Users/${uid}`;

  const addDoc = useCallback(
    <T extends keyof DBUserCollections>(
      collection: T,
      data: DBUserCollections[T],
    ) => {
      if (user !== null) {
        db.addDoc(`${user}/${collection}`, data).catch(console.error);
      }
    },
    [user],
  );

  const delDoc = useCallback(
    (collection: keyof DBUserCollections, doc: string) => {
      if (user !== null) {
        db.delDoc(`${user}/${collection}/${doc}`).catch(console.error);
      }
    },
    [user],
  );

  const updateUser = useCallback(
    (data: Partial<DBUser>) => {
      if (user !== null) {
        db.updateDoc(user, data).catch(console.error);
      }
    },
    [user],
  );

  const getDocs = <T extends keyof DBUserCollections>(
    collection: T,
    filter?: QueryConstraint[],
  ): DBDoc<DBUserCollections[T]>[] => {
    const [docs, setDocs] = useState<DBDoc<DBUserCollections[T]>[]>([]);
    useEffect(() => {
      if (user !== null) {
        return db.listenCol(`${user}/${collection}`, setDocs, filter);
      }
    }, [collection, filter, user]);
    return docs;
  };

  const getUser = (): DBDoc<DBUser> | null => {
    const [doc, setDoc] = useState<DBDoc<DBUser> | null>(null);
    useEffect(() => {
      if (user !== null) {
        return db.listenDoc(user, setDoc);
      }
    }, [user]);
    return doc;
  };

  return { addDoc, delDoc, getDocs, getUser, updateUser };
};

export { useDB };
