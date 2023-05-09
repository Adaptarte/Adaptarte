import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type DocData = FirebaseFirestoreTypes.DocumentData;

type ColRef<T extends DocData = DocData> =
  FirebaseFirestoreTypes.CollectionReference<T>;

type DocRef<T extends DocData = DocData> =
  FirebaseFirestoreTypes.DocumentReference<T>;

type DocSnap<T extends DocData = DocData> =
  FirebaseFirestoreTypes.DocumentSnapshot<T>;

type Query<T extends DocData = DocData> = FirebaseFirestoreTypes.Query<T>;

type QueryFilter<T extends DocData = DocData> = Parameters<Query<T>["where"]>[];

type QuerySnap<T extends DocData = DocData> =
  FirebaseFirestoreTypes.QuerySnapshot<T>;

export type { ColRef, DocRef, DocSnap, Query, QueryFilter, QuerySnap };
