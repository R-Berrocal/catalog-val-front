import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants/query-keys';
import ProductsService from '../../services/products';
import usePersistedStore from '../../../store';

export function useListProducts() {
  const { data: products, isLoading } = useQuery(QUERY_KEYS.PRODUCT, () =>
    ProductsService.listProducts()
  );
  return {
    products,
    isLoading,
  };
}

export function useGetProduct() {
  const { id, isOpenDialog } = usePersistedStore();

  const { data: product, isLoading } = useQuery(
    [QUERY_KEYS.PRODUCT, id],
    () => ProductsService.getProduct(id),
    {
      enabled: id.length > 0 && isOpenDialog,
    }
  );
  return {
    product,
    isLoading,
  };
}
