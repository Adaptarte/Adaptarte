/* eslint-disable max-lines-per-function */
import type { QueryConstraint } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

import * as db from "utils/firebase/firestore";

import type { DBDoc, DBOperations, DBUser, DBUserCollections } from "./types";

const getDB = (uid: string): DBOperations => {
  const user = `Users/${uid}`;

  const addDoc = <T extends keyof DBUserCollections>(
    collection: T,
    data: DBUserCollections[T],
  ): void => {
    if (user !== null) {
      db.addDoc(`${user}/${collection}`, data).catch(console.error);
    }
  };

  const delDoc = (collection: keyof DBUserCollections, doc: string): void => {
    if (user !== null) {
      db.delDoc(`${user}/${collection}/${doc}`).catch(console.error);
    }
  };

  const updateUser = (data: Partial<DBUser>): void => {
    if (user !== null) {
      db.updateDoc(user, data).catch(console.error);
    }
  };

  const getDocs = <T extends keyof DBUserCollections>(
    collection: T,
    filter?: QueryConstraint[],
  ): DBDoc<DBUserCollections[T]>[] => {
    const [docs, setDocs] = useState<DBDoc<DBUserCollections[T]>[]>([]);
    useEffect(() => {
      if (user !== null) {
        return db.listenCol(
          `${user}/${collection}`,
          setDocs,
          (filter ?? []).concat([orderBy("date")]),
        );
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

const useDB = (uid: string): DBOperations => {
  return useMemo(() => {
    return getDB(uid);
  }, [uid]);
};

export { useDB };
