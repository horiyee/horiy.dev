"use client";

import { User } from "firebase/auth";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { useFirebaseAuth } from "./hooks/useFirebaseAuth";

type AuthState = {
  user: User | null;
};

const initialAuthState: AuthState = {
  user: null,
};

const AuthContext = createContext<AuthState>(initialAuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthStateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useFirebaseAuth();

  const authState: AuthState = useMemo(() => ({ user }), [user]);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
