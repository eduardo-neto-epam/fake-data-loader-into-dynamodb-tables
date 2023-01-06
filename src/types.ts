import {PRODUCTS_TABLE_NAME, STOCKS_TABLE_NAME} from './constants';

type ProductId = {
  S: string;
};

type ProductTitle = {
  S: string;
};

type ProductDescription = {
  S: string;
};

type ProductPrice = {
  N: string;
};

type StockCount = {
  N: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export type ProductItemPutRequest = {
  id: ProductId;
  title: ProductTitle;
  description: ProductDescription;
  price: ProductPrice;
};

export type Stock = {
  product_id: Product['id'];
  count: number;
};

export type StockItemPutRequest = {
  product_id: ProductId;
  count: StockCount;
};

export type PutRequest<T extends ProductItemPutRequest | StockItemPutRequest> =
  {
    PutRequest: {
      Item: T;
    };
  };

type Tables = typeof PRODUCTS_TABLE_NAME | typeof STOCKS_TABLE_NAME;

export type BatchWriteItems<T extends Tables> = {
  [key in T]: PutRequest<
    T extends typeof PRODUCTS_TABLE_NAME
      ? ProductItemPutRequest
      : T extends typeof STOCKS_TABLE_NAME
      ? StockItemPutRequest
      : never
  >[];
};
