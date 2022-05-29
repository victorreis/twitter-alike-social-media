import { CustomThemeType, ThemeMode } from '../Types';

export type ThemeContextType = {
  theme: CustomThemeType;
  switchTheme: (themeMode: ThemeMode) => void;
};

export interface RequiredCustomThemeProviderProps {
  children?: React.ReactNode;
}

export interface DefaultCustomThemeProviderProps {
  testID?: string;
  themeName?: ThemeMode;
}

export type CustomThemeProviderProps = RequiredCustomThemeProviderProps &
  DefaultCustomThemeProviderProps;
