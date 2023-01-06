import {BatchWriteItems, Product} from '../types';
import {PRODUCTS_TABLE_NAME} from '../constants';

/**
 * Function that receives an array of products,
 * and returns a ready to convert to JSON object
 * with a products array where each product is in
 * a PutRequest format.
 * @param products Product[]
 * @returns BatchWriteItems<'products'>
 */
export const batchWriteProducts: (
  products: Product[]
) => BatchWriteItems<typeof PRODUCTS_TABLE_NAME> = products => ({
  [PRODUCTS_TABLE_NAME]: products.map(product => ({
    PutRequest: {
      Item: {
        id: {S: product.id},
        title: {S: product.title},
        description: {S: product.description},
        price: {N: `${product.price}`},
      },
    },
  })),
});
