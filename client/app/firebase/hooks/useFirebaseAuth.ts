import { useCallback, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { firebaseApp } from "..";

export const useFirebaseAuth = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | undefined>(undefined);

  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
    });
  }, []);

  const signIn = useCallback(async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const { accessToken } = credential;
        setToken(accessToken);
      })
      .catch((error) => {
        const {} = error;
        const _ = GoogleAuthProvider.credentialFromError(error);
      });
  }, [setToken]);

  return { firebaseUser, token, signIn };
};
