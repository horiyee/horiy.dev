import { useCallback, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { firebaseApp } from "..";
import { useRouter } from "next/navigation";
import { pageRoutes } from "../../config/pageRoutes";

export const useFirebaseAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      router.push(pageRoutes.index);
    });
  }, []);

  const signIn = useCallback(async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const {} = credential;
        const { user } = result;

        setUser(user);
      })
      .catch((error) => {
        const {} = error;
        const _ = GoogleAuthProvider.credentialFromError(error);
      });
  }, [setUser]);

  return { user, signIn };
};
