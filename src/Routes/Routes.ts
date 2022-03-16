import { Home } from '../Pages/Home';
import { Route } from './Routes.types';

export const routes: Route[] = [
  {
    key: 'User',
    name: 'User',
    path: `/user/:nickname`,
    element: Home,
  },
];
