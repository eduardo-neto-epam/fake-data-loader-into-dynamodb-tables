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

type Tables = 'products' | 'stocks';

export type BatchWriteItems<T extends Tables> = {
  [key in T]: PutRequest<
    T extends 'products'
      ? ProductItemPutRequest
      : T extends 'stocks'
      ? StockItemPutRequest
      : never
  >[];
};
