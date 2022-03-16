import { createElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { TestProps } from '../../Config/Tests/Test.types';
import { Home } from '../../Pages/Home';
import { routes } from '../../Routes/Routes';
import {
  RouterSwitchProps,
  DefaultRouterSwitchProps,
} from './RouterSwitch.types';

export const routerSwitchDefaults: Required<DefaultRouterSwitchProps> &
  Required<TestProps> = {
  testID: 'RouterSwitch',
};

export const RouterSwitch: React.FC<RouterSwitchProps> = (
  props
): JSX.Element => {
  const { testID = routerSwitchDefaults.testID } = props;

  const renderRoutes = () => {
    return routes.map(({ key, element, path }) => (
      <Route key={key} element={createElement(element)} path={path} />
    ));
  };

  return (
    <main data-testid={testID}>
      <Routes>
        <Route element={<Home />} path="/" />
        {renderRoutes()}
        <Route element={<Home />} path="*" />
      </Routes>
    </main>
  );
};
