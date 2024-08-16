"use client";

import { useCallback, useEffect } from "react";
import { useFirebaseAuth } from "../firebase/hooks/useFirebaseAuth";
import { useRouter } from "next/navigation";
import { pageRoutes } from "../config/pageRoutes";

const SignInPage: React.FC = () => {
  const router = useRouter();
  const { user, signIn } = useFirebaseAuth();

  const onClick = useCallback(() => {
    signIn().then(() => {
      router.push(pageRoutes.index);
    });
  }, [signIn]);

  useEffect(() => {
    if (user !== null) {
      router.push(pageRoutes.index);
    }
  }, []);

  return (
    <section>
      <button onClick={onClick}>Googleアカウントでログイン</button>
    </section>
  );
};

export default SignInPage;
