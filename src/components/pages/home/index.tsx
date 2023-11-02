import { CardGrid, Loader } from '../../../shared/components/ui';
import { useListProducts } from '../../../shared/hooks/react-query/product';
import { NavbarSimple } from '../../app/layout/components/Navbar';
import MoreProduct from './components/more';

function Home() {
  const { products, isLoading } = useListProducts();
  if (isLoading) return <Loader />;
  return (
    <div className="display flex flex-col justify-center items-center">
      <NavbarSimple />
      <CardGrid products={products} />
      <MoreProduct />
    </div>
  );
}

export default Home;
