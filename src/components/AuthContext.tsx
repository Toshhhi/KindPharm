import React, { createContext, useContext, useState } from 'react';
import { User, AuthState, dummyUsers } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (userData: Omit<User, 'role'> & { role: 'student' | 'professional' }) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = (email: string, password: string) => {
    const user = dummyUsers.find(u => u.email === email && u.password === password);
    if (user) {
      setState({ user, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
  };

  const register = (userData: Omit<User, 'role'> & { role: 'student' | 'professional' }) => {
    // In a real app, this would make an API call
    dummyUsers.push(userData as User);
    setState({ user: userData as User, isAuthenticated: true });
    return true;
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};