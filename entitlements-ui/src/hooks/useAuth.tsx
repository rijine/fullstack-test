import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../contexts/AuthContext';

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext) as AuthContextType;
  return { auth, setAuth };
};
