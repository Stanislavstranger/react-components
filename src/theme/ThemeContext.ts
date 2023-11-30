import { createContext } from "react";

export enum Theme {
  LiGHT = 'light',
  DARK = 'dark',
}

export interface ThemContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemContextProps>({} as ThemContextProps);

export const LOCAL_STORAGE_THEME_KEY = 'theme'