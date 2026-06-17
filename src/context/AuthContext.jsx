import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { clearStoredAuth, getStoredAuth, storeAuth } from '../services/api.js';
import { login as loginRequest } from '../services/pibicApi.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => getStoredAuth());

  const login = useCallback(async ({ username, password }) => {
    const response = await loginRequest(username, password);
    storeAuth(response);
    setAuth(response);
    return response;
  }, []);

  const logout = useCallback(() => {
    clearStoredAuth();
    setAuth(null);
  }, []);

  const value = useMemo(
    () => ({
      auth,
      isAuthenticated: Boolean(auth?.token),
      login,
      logout,
    }),
    [auth, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }

  return context;
}
