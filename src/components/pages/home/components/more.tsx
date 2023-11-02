import { useMemo } from 'react';
import { Loader } from '../../../../shared/components/ui';
import { DialogDefault } from '../../../../shared/components/ui/dialog';
import { useGetProduct } from '../../../../shared/hooks/react-query/product';
import {
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Typography,
} from '@material-tailwind/react';

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
      <Card className="flex items-center shadow-2xl cursor-pointer">
        <CardHeader color="blue-gray" className="w-80 h-80">
          <Carousel className="w-full h-full">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="w-full h-full object-cover"
            />
          </Carousel>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.title}
          </Typography>
          <Typography>${data.price}</Typography>
        </CardBody>
      </Card>
    </DialogDefault>
  );
}

export default MoreProduct;
