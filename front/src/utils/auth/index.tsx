import type { FirebaseAuthTypes } from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createContext, useContext, useEffect, useState } from "react";

GoogleSignin.configure({
  webClientId:
    "288895389085-2uqd4dqq95l9r46jqm2p533jkidn3lph.apps.googleusercontent.com"
});

const signInEmailPassword = async (
  email: string,
  password: string
): Promise<FirebaseAuthTypes.UserCredential> => {
  return await auth().signInWithEmailAndPassword(email, password);
};

const signInGoogle = async (): Promise<FirebaseAuthTypes.UserCredential> => {
  await GoogleSignin.hasPlayServices();
  const token = await GoogleSignin.signIn();
  const credential = auth.GoogleAuthProvider.credential(token.idToken);
  return auth().signInWithCredential(credential);
};

const signOut = (): void => {
  auth().signOut().catch(console.error);
};

const useAuth = (): FirebaseAuthTypes.User | null | undefined => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  useEffect(() => {
    return auth().onAuthStateChanged(setUser);
  }, []);
  return user;
};

const UserContext = createContext<FirebaseAuthTypes.User | null>(null);

const UserProvider =
  UserContext.Provider as React.Provider<FirebaseAuthTypes.User>;

const useUser = (): FirebaseAuthTypes.User => {
  const ctx = useContext(UserContext);
  if (ctx === null) {
    throw Error("User error. UserProvider not found.");
  }
  return ctx;
};

export {
  signInEmailPassword,
  signInGoogle,
  signOut,
  useAuth,
  UserProvider,
  useUser
};
