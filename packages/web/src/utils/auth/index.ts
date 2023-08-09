import type { User } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "utils/firebase/config";

const signIn = (email: string, password: string): void => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Signed in successfully");
    })
    .catch(console.error);
};

const signOut = (): void => {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out successfully");
    })
    .catch(console.error);
};

const useAuth = (): User | null | undefined => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    return auth.onAuthStateChanged(setUser);
  }, []);
  return user;
};

export { signIn, signOut, useAuth };
