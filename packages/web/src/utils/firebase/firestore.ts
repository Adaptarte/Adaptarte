import type { DocumentData, DocumentSnapshot } from "firebase/firestore";
import {
  addDoc as dbAddDoc,
  collection,
  deleteDoc,
  doc,
  getDoc as dbGetDoc,
  getDocs as dbGetCol,
  updateDoc as dbUpdateDoc,
} from "firebase/firestore";

import type { DBDoc } from "utils/db/types";
import { db } from "utils/firebase/config";

const addDoc = async <T extends object>(
  path: string,
  data: T,
): Promise<string> => {
  const ref = await dbAddDoc(collection(db, path), data);
  return ref.id;
};

const delDoc = async (path: string): Promise<void> => {
  const ref = doc(db, path);
  await deleteDoc(ref);
};

const getCol = async <T extends object>(path: string): Promise<DBDoc<T>[]> => {
  const ref = collection(db, path);
  const snapshot = await dbGetCol(ref);
  return snapshot.docs.map((doc) => getDocData<T>(doc));
};

const getDoc = async <T extends object>(path: string): Promise<DBDoc<T>> => {
  const ref = doc(db, path);
  const snapshot = await dbGetDoc(ref);
  return getDocData<T>(snapshot);
};

const getDocData = <T extends object>(
  doc: DocumentSnapshot<DocumentData>,
): DBDoc<T> => {
  return {
    data: doc.data() as T,
    id: doc.id,
  };
};

const updateDoc = async <T extends object>(
  path: string,
  data: T,
): Promise<void> => {
  const ref = doc(db, path);
  return dbUpdateDoc(ref, data);
};

export { addDoc, delDoc, getCol, getDoc, updateDoc };
