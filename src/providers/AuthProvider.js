import { createContext } from 'react';

import { UserProviderAuth } from '../hooks';

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
  signup:()=>{}
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const auth = UserProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
