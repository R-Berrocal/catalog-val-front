import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import { Product } from '../../common/interfaces';
import usePersistedStore from '../../../store';

type PropsCardDefault = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export function CardDefault({ id, title, price, image }: PropsCardDefault) {
  const { showDialog } = usePersistedStore((state) => state);
  return (
    <Card
      className="flex items-center shadow-2xl cursor-pointer "
      onClick={() => showDialog(id)}
    >
      <CardHeader color="blue-gray" className="w-full h-full">
        <img
          src={image}
          alt="card-image"
          className="w-full h-auto shadow-2xl"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>${price}</Typography>
      </CardBody>
    </Card>
  );
}

export type DataGrid = {
  products?: Product[];
};

export function CardGrid({ products }: DataGrid) {
  return (
    <div
      key="products"
      className="mt-10 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 "
    >
      {products?.map((product) => (
        <CardDefault
          key={product.id}
          id={product.id}
          price={product.price}
          title={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
}
