import { FC } from 'react';

import { Container } from './App.styles';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

export const App: FC = (): JSX.Element => {
  return (
    <CustomThemeProvider>
      <Container data-testid="container">hello world</Container>
    </CustomThemeProvider>
  );
};
