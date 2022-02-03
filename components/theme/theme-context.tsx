import * as React from 'react';
import { useEffect, useRef } from 'react';

export const ThemeContext = React.createContext({ state: { theme: 'light' }, changeTheme: (action: string) => {} });

function themeReducer(state: { theme: string }, action: string) {
  switch (action) {
    case 'light': {
      return { theme: 'light' };
    }
    case 'dark': {
      return { theme: 'dark' };
    }
    case 'toggle': {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      return { theme: nextTheme };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const loadThemeFromLocalStorage = () => {
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark';
  }
  return 'light';
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const switchTheme = (theme: string | undefined): void => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  const currentState = { theme: 'light' }; //loadThemeFromLocalStorage();
  const [state, changeTheme] = React.useReducer(themeReducer, currentState);

  const stateRef = useRef<{ theme: string }>();
  stateRef.current = state;

  useEffect(() => {
    return () => {
      switchTheme(stateRef.current?.theme);
    };
  }, [state.theme]);

  useEffect(() => {
    const storedTheme = loadThemeFromLocalStorage();
    changeTheme(storedTheme);
  }, []);

  const value = { state, changeTheme };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
