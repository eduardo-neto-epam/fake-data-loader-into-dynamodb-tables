import { writeFile } from 'fs';

import { faker } from '@faker-js/faker/locale/en_GB';

import type { Product, Stock } from '../types';

let products: Product[] = [];

const NUMBER_OF_PRODUCTS = 10;

const createProduct = (): Product => {
    return {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: Number(faker.commerce.price(10, 200, 0)),
    }
}

const createStocks = (products: Product[]): Stock[] => {
    return products.map((product) => ({
        product_id: product.id,
        count: faker.datatype.number({min: 0, max: 50}),
    }))
}

Array.from({ length: NUMBER_OF_PRODUCTS }).forEach(() => {
    products.push(createProduct());
  });

const stocks: Stock[] = createStocks(products);

const PRODUCTS_JSON = JSON.stringify(products);

const STOCKS_JSON = JSON.stringify(stocks);

export const writeJsonFiles = () => {
    writeFile('./products.json', PRODUCTS_JSON, 'utf8', () => console.log('PRODUCTS_JSON CREATED'))
    writeFile('./stocks.json', STOCKS_JSON, 'utf8', () => console.log('STOCKS_JSON CREATED'))
}

