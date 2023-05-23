import admin from "firebase-admin";

import { serviceAccount } from "./env";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.projectId ?? ""}.firebaseio.com`
});

const auth = admin.auth();
const firestore = admin.firestore();

export { auth, firestore };
