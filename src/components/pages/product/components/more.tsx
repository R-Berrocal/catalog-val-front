import { useMemo } from 'react';
import { CardDefault, Loader } from '../../../../shared/components/ui';
import { DialogDefault } from '../../../../shared/components/ui/dialog';
import { useGetProduct } from '../../../../shared/hooks/react-query/product';
import { Carousel } from '@material-tailwind/react';

function MoreProduct() {
  const { product, isLoading } = useGetProduct();

  const data = useMemo(
    () => ({
      id: product?.id,
      title: product?.name,
      price: product?.price,
      image: product?.image,
    }),
    [product]
  );

  if (isLoading) return <Loader />;
  return (
    <DialogDefault title={`Producto ${data?.title}`}>
      <CardDefault
        id={data.id ?? ''}
        price={data.price ?? 0}
        title={data.title ?? ''}
        image={data.image ?? ''}
        classCardHeader="w-80 h-80"
      >
        <Carousel className="w-full h-full">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover outline-none"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="w-full h-full object-cover outline-none"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="w-full h-full object-cover outline-none"
          />
        </Carousel>
      </CardDefault>
    </DialogDefault>
  );
}

export default MoreProduct;
