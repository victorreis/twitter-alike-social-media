import 'styled-components';
import { CustomThemeType } from './Theme/Types';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}

declare module '*.svg' {
  const content: string;
  export default content;
}
