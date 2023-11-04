import { Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { RoutesModel } from './model';

const Home = lazy(() => import('../../pages/home'));
const Product = lazy(() => import('../../pages/product'));

import PageNotFound from '../../pages/error';
import { Spinner } from '../../../shared/components/ui';

const routes: RoutesModel = [
  {
    name: 'home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'product',
    path: 'product/*',
    component: <Product />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
