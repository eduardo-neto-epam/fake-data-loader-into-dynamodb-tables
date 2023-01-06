import {createInterface} from 'readline';
import {exec} from 'child_process';

import type {Product} from '../types';
import {
  createProduct,
  writeJsonFileSync,
  batchWriteStock,
  batchWriteProducts,
  validateUserInput,
} from '../lib';
import {JSON_FOLDER} from '../constants';

import {createDirIfNotExists} from '../lib/createDirIfNotExists';
import {fillArray} from '../lib/fillArray';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Callback function that takes the number of products requested as input
 * and creates the appropriate json files to feed the bash scripts
 * that will load the json data into the respective dynamoDB tables.
 * @param x - string - user input with number of products to load.
 */
const loadXProducts = async (x: string) => {
  try {
    const NUMBER_OF_PRODUCTS = validateUserInput(x);
    const products: Product[] = [];

    fillArray(products, NUMBER_OF_PRODUCTS, createProduct);

    createDirIfNotExists(JSON_FOLDER);

    console.info(
      `You have chosen to add ${NUMBER_OF_PRODUCTS} products to the products table!
    Random stocks for each Product ID, will also be added to the stocks table! You welcome! ;)`
    );

    const PRODUCTS_JSON = JSON.stringify(batchWriteProducts(products), null, 4);

    const STOCKS_JSON = JSON.stringify(batchWriteStock(products), null, 4);

    writeJsonFileSync(PRODUCTS_JSON, 'products');
    writeJsonFileSync(STOCKS_JSON, 'stocks');

    exec('sh ./bash_scripts/addProducts.sh', (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        throw new Error(`exec error: ${error}`);
      }
    });

    exec('sh ./bash_scripts/addStocks.sh', (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        throw new Error(`exec error: ${error}`);
      }
    });
    rl.close();
  } catch (error) {
    console.error(error);
    rl.close();
  }
};

/**
 * Main function that asks the user through the terminal interface,
 * how many products to load in dynamo tables,
 * and then executes the callback with the user input.
 */
export const loadData = () => {
  rl.question(
    'How many products would you like? Between 1 and 20 please: ',
    loadXProducts
  );
};
