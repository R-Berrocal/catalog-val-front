import { lazy } from 'react';
import PageTemplate from '../../../shared/components/templates/page';
import { NavbarSimple } from '../../app/layout/components/Navbar';

const ProductList = lazy(() => import('./components/list'));
const ProductForm = lazy(() => import('./components/form'));

const routes = {
  mainpage: {
    path: '/',
    element: <ProductList />,
  },
  routes: [
    {
      path: '/create',
      element: <ProductForm />,
    },
  ],
};

function ProductRouter() {
  return (
    <>
      <NavbarSimple />
      <PageTemplate data={routes} />
    </>
  );
}

export default ProductRouter;
