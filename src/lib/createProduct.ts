import {faker} from '@faker-js/faker';
import type {Product} from '../types';

/**
 * Factory function to create a Product
 * @returns Product
 */
export const createProduct = (): Product => {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price(10, 200, 0)),
  };
};
