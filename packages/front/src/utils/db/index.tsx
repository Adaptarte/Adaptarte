import { useCallback, useMemo } from "react";

import { useUser } from "utils/auth";

import { refUser, refUserCol, useDbUser, useDbUserData } from "./firebase";
import type { DBOperations, DBUser, DBUserCollections } from "./types";

const useDB = (): DBOperations => {
  const { uid } = useUser();

  const addDoc = useCallback(
    <T extends keyof DBUserCollections>(
      collection: T,
      data: DBUserCollections[T],
    ) => {
      refUserCol(uid, collection).add(data).catch(console.error);
    },
    [uid],
  );

  const updateDoc = useCallback(
    <T extends keyof DBUserCollections>(
      collection: keyof DBUserCollections,
      doc: string,
      data: DBUserCollections[T],
    ) => {
      refUserCol(uid, collection).doc(doc).update(data).catch(console.error);
    },
    [uid],
  );

  const delDoc = useCallback(
    (collection: keyof DBUserCollections, doc: string) => {
      refUserCol(uid, collection).doc(doc).delete().catch(console.error);
    },
    [uid],
  );

  const updateUser = useCallback(
    (data: Partial<DBUser>) => {
      refUser(uid).update(data).catch(console.error);
    },
    [uid],
  );

  return useMemo(
    () => ({
      addDoc,
      delDoc,
      getDocs: useDbUserData,
      getUser: useDbUser,
      updateDoc,
      updateUser,
    }),
    [uid],
  );
};

export { useDB };
