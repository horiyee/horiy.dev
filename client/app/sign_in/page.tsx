"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pageRoutes } from "../config/pageRoutes";
import { useFirebaseAuth } from "../firebase/hooks/useFirebaseAuth";

const SignInPage: React.FC = () => {
  const router = useRouter();
  const { firebaseUser, signIn } = useFirebaseAuth();

  const onClick = useCallback(() => {
    signIn().then(() => {
      router.push(pageRoutes.index);
    });
  }, [signIn]);

  useEffect(() => {
    if (firebaseUser !== null) {
      router.push(pageRoutes.index);
    }
  }, [firebaseUser]);

  return (
    <section>
      <button onClick={onClick}>Googleアカウントでログイン</button>
    </section>
  );
};

export default SignInPage;
