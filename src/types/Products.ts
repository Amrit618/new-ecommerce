export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
}

export interface ProductInCart extends Product {
  quantity: number;
  id: number;
  direction: string;
}

export interface Cart {
  id: string;
  quantity: any;
  products: ProductInCart[];
  total: number;
  totalItem: number;
  cartQuantity: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface ProductReducerType {
  quantity: any;
  productList: Product[];
  /* sortedList: Product[]; */
}

export interface ProductPostType {
  title: string;
  description: string;
  price: number;
  images: string[];
  categoryId: number;
}
export interface offsetLimit {
  offset: number;
  limit: number;
}
