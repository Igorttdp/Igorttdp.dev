import { Dispatch, SetStateAction } from "react";

export interface IProductsContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  getAllProducts(): Promise<Product[]>;
  addNewProduct(data: IAddEditProductRequest): Promise<Product>;
  editProduct(data: IAddEditProductRequest, id: number): Promise<Product>;
  deleteProduct(id: number): Promise<void>;
}

export interface Product {
  cod: number;
  description: string;
  bar_code: string;
  value: number;
  gross_weight: number;
  net_weight: number;
}

export type IAddEditProductRequest = Omit<Product, "cod">;