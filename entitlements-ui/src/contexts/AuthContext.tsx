import { ReactNode, createContext, useState } from 'react';
import { STORAGE_KEY } from '../constants/baseConstants';

export type AuthContextType = {
  auth: AuthType | null;
  setAuth: (auth: AuthType | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: ReactNode;
};

export type AuthType = {
  email?: string;
  token: string;
  role: string;
  name: string;
};

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthType | null>(
    localStorage.getItem(STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
      : null
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
