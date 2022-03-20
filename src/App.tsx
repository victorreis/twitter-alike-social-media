import { FC, useLayoutEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { Container, GlobalStyle } from './App.styles';
import { RouterSwitch } from './Components/RouterSwitch';
import { localStorageInitializerService } from './Services/LocalStorageInitializer/LocalStorageInitializer.service';
import { CustomThemeProvider } from './Theme/CustomThemeProvider';

import 'react-toastify/dist/ReactToastify.css';

export const App: FC = (): JSX.Element => {
  useLayoutEffect(() => {
    localStorageInitializerService.initialize();
  }, []);

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme="dark"
      />
      <Container data-testid="container">
        <RouterSwitch />
      </Container>
    </CustomThemeProvider>
  );
};
