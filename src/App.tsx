import { FC, useLayoutEffect } from 'react';

import { Container, GlobalStyle } from './App.styles';
import { RouterSwitch } from './Components/RouterSwitch';
import { localStorageInitializerService } from './Services/LocalStorageInitializer/LocalStorageInitializer.service';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

export const App: FC = (): JSX.Element => {
  useLayoutEffect(() => {
    localStorageInitializerService.initialize();
  }, []);

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Container data-testid="container">
        <RouterSwitch />
      </Container>
    </CustomThemeProvider>
  );
};
