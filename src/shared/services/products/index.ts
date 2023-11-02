import { catalogValApi } from '../../common/apis';
import { Product } from '../../common/interfaces';

const ProductsService = {
  listProducts: async () => {
    try {
      const req = await catalogValApi.get<Product[]>('/products');
      const products = req.data;
      return products;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  },
  getProduct: async (id: string) => {
    try {
      const req = await catalogValApi.get<Product>(`/products/${id}`);
      const product = req.data;
      return product;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  },
};

export default ProductsService;
