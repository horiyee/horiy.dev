import { User } from "firebase/auth";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { useFirebaseAuth } from "./firebase/hooks/useFirebaseAuth";

type AuthState = {
  firebaseUser: User | null;
};

const initialAuthState: AuthState = {
  firebaseUser: null,
};

const AuthContext = createContext<AuthState>(initialAuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthStateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { firebaseUser } = useFirebaseAuth();

  const authState: AuthState = useMemo(
    () => ({ firebaseUser }),
    [firebaseUser],
  );

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
