import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '@/config/firebase';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({ user: null, loading: true });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('auth fetch');
    const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setLoading(false);
      } else {
        // Sign in anonymously if not signed in
        try {
          setLoading(true);
          const result = await signInAnonymously(auth);
          setUser(result.user);
        } catch (error) {
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
