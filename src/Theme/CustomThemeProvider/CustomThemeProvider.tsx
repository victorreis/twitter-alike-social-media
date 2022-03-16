import { useMemo, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../Modes';
import { ThemeMode, CustomThemeType } from '../Types';
import {
  ThemeContextType,
  CustomThemeProviderProps,
} from './CustomThemeProvider.types';

export const themes: Record<ThemeMode | 'default', CustomThemeType> = {
  default: darkTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext<
  ThemeContextType | Record<string, never>
>({});

export const customThemeProviderDefaults: Required<CustomThemeProviderProps> = {
  testID: 'ThemeContextProvider',
  themeName: 'dark',
};

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = (
  props
): JSX.Element => {
  const {
    testID = customThemeProviderDefaults.testID,
    children,
    themeName = customThemeProviderDefaults.themeName,
  } = props;

  const [theme, setTheme] = useState<CustomThemeType>(themes[themeName]);

  const switchTheme = (themeMode: ThemeMode): void => {
    setTheme(themes[themeMode]);
  };

  const providerValue = useMemo(() => ({ theme, switchTheme }), [theme]);

  return (
    <ThemeContext.Provider data-testid={testID} value={providerValue}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};
