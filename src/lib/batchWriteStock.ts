import {faker} from '@faker-js/faker';
import {BatchWriteItems, Product} from '../types';
import {STOCKS_TABLE_NAME} from '../constants';

/**
 * Function that receives an array of products,
 * and returns a ready to convert to JSON object
 * with a stocks array where each Item is in
 * a PutRequest format, with a product_id and a
 * count.
 * @param products Product[]
 * @returns BatchWriteItems<'stocks'>
 */
export const batchWriteStock: (
  products: Product[]
) => BatchWriteItems<typeof STOCKS_TABLE_NAME> = products => ({
  [STOCKS_TABLE_NAME]: products.map(product => ({
    PutRequest: {
      Item: {
        product_id: {S: product.id},
        count: {N: `${faker.datatype.number({min: 0, max: 50})}`},
      },
    },
  })),
});
