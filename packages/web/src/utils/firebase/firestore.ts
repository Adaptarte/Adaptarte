import type {
  DocumentData,
  DocumentSnapshot,
  Query,
  QueryConstraint,
} from "firebase/firestore";
import {
  addDoc as dbAddDoc,
  collection,
  deleteDoc,
  doc,
  getDoc as dbGetDoc,
  getDocs as dbGetCol,
  onSnapshot,
  query,
  Timestamp,
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

const getCol = async <T extends object>(
  path: string,
  filter?: QueryConstraint[],
): Promise<DBDoc<T>[]> => {
  const ref = collection(db, path) as Query<T, T>;
  const filtered = filter === undefined ? ref : query(ref, ...filter);
  const snapshot = await dbGetCol(filtered);
  return snapshot.docs.map((doc) => getDocData<T>(doc));
};

const getDoc = async <T extends object>(path: string): Promise<DBDoc<T>> => {
  const ref = doc(db, path);
  const snapshot = await dbGetDoc(ref);
  return getDocData(snapshot);
};

const getDocData = <T extends object>(
  doc: DocumentSnapshot<DocumentData>,
): DBDoc<T> => {
  return {
    data: timestampsToDate(doc.data()) as T | undefined,
    id: doc.id,
  };
};

const listenCol = <T extends object>(
  path: string,
  listener: (docs: DBDoc<T>[]) => void,
  filter?: QueryConstraint[],
): (() => void) => {
  const ref = collection(db, path) as Query<T, T>;
  const filtered = filter === undefined ? ref : query(ref, ...filter);
  const unsubscribe = onSnapshot(filtered, (snapshot) => {
    listener(snapshot.docs.map((doc) => getDocData(doc)));
  });
  return unsubscribe;
};

const listenDoc = <T extends object>(
  path: string,
  listener: (doc: DBDoc<T>) => void,
): (() => void) => {
  const ref = doc(db, path);
  const unsubscribe = onSnapshot(ref, (snapshot) => {
    snapshot.data();
    listener(getDocData(snapshot));
  });
  return unsubscribe;
};

const timestampsToDate = <T>(obj: T): T => {
  if (obj instanceof Timestamp) {
    return obj.toDate() as T;
  } else if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      obj[key] = timestampsToDate(obj[key]);
    }
  }
  return obj;
};

const updateDoc = async <T extends object>(
  path: string,
  data: T,
): Promise<void> => {
  const ref = doc(db, path);
  return dbUpdateDoc(ref, data);
};

export { addDoc, delDoc, getCol, getDoc, listenCol, listenDoc, updateDoc };
