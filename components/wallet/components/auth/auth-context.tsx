import React, { Dispatch } from 'react';

export type AuthAccountState = {
  isAuthenticated: boolean;
  address?: string | null;
  ensName?: string | null;
};

export type AuthAction = { type: 'connect'; payload: { address: string; ensName?: string } } | { type: 'disconnect' };

export interface AuthProviderProps {
  children: React.ReactNode;
}
const initialAuthState: AuthAccountState = {
  isAuthenticated: false,
  address: null,
  ensName: null,
};

export const AuthContext = React.createContext<{ authState: AuthAccountState; authDispatch: Dispatch<AuthAction> }>({
  authState: null,
  authDispatch: null,
});

function authReducer(state: AuthAccountState, action: AuthAction): AuthAccountState {
  switch (action.type) {
    case 'connect':
      return { ...state, isAuthenticated: true, address: action.payload.address, ensName: action.payload.ensName };
    case 'disconnect':
      return { ...state, isAuthenticated: false, address: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, authDispatch] = React.useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
