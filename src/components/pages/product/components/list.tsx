import { Button } from '@material-tailwind/react';
import { CardGrid, Loader } from '../../../../shared/components/ui';
import { useListProducts } from '../../../../shared/hooks/react-query/product';
import MoreProduct from './more';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function ListProducts() {
  const { products, isLoading } = useListProducts();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('create');
  };
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-6">
      <div className="flex gap-5">
        {/* <Input label="Buscar" crossOrigin={undefined} /> */}
        <Button
          className="flex justify-center items-center gap-2"
          onClick={handleClick}
        >
          Añadir producto
          <PlusCircleIcon height={20} />
        </Button>
      </div>
      <CardGrid products={products} />
      <MoreProduct />
    </div>
  );
}

export default ListProducts;
