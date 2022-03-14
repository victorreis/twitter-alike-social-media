import { FC } from 'react';

import { Container, GlobalStyle } from './App.styles';
import { Home } from './Pages/Home';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

export const App: FC = (): JSX.Element => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Container data-testid="container">
        <Home />
      </Container>
    </CustomThemeProvider>
  );
};
