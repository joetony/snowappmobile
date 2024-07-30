import React, { createContext, useState, ReactNode } from 'react';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-nbzq4pzmfmk2sgkw.us.auth0.com',
  clientId: 'hrLZ1rFyFHS6QaD5HzVdWiAgARpku4Er',
});

interface Auth0ContextProps {
  isAuthenticated: boolean;
  user: Auth0User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

interface Auth0User {
    name?: string;
    picture?: string;
    [key: string]: any;
  }

export const Auth0Context = createContext<Auth0ContextProps | undefined>(undefined);

interface Auth0ProviderProps {
  children: ReactNode;
}

export const Auth0Provider: React.FC<Auth0ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Auth0User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({ scope: 'openid profile email' });
      const userInfo = await auth0.auth.userInfo({ token: credentials.accessToken });
      setUser(userInfo);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Auth0Context.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </Auth0Context.Provider>
  );
};