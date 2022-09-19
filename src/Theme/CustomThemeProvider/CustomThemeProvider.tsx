/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMemo, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../Modes';
import { ThemeMode, CustomThemeType } from '../Types';
import {
  ThemeContextType,
  CustomThemeProviderProps,
  DefaultCustomThemeProviderProps,
} from './CustomThemeProvider.types';

export const themes: Record<ThemeMode | 'default', CustomThemeType> = {
  default: darkTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext<
  ThemeContextType | Record<string, never>
>({});

export const customThemeProviderDefaults: Required<DefaultCustomThemeProviderProps> =
  {
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
      {/* waiting for a new lib version compatible with React 18 */}
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
