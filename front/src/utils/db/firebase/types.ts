import type { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type DocData = FirebaseFirestoreTypes.DocumentData;

type ColRef<T extends DocData = DocData> =
  FirebaseFirestoreTypes.CollectionReference<T>;

type DocRef<T extends DocData = DocData> =
  FirebaseFirestoreTypes.DocumentReference<T>;

type DocSnap<T extends DocData = DocData> =
  FirebaseFirestoreTypes.DocumentSnapshot<T>;

type QuerySnap<T extends DocData = DocData> =
  FirebaseFirestoreTypes.QuerySnapshot<T>;

export type { ColRef, DocRef, DocSnap, QuerySnap };
