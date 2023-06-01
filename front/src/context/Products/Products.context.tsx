import { createContext, useState } from "react";
import { IProviderProps } from "../children.interface";
import {
  IAddEditProductRequest,
  IProductsContextProps,
  Product,
} from "./interfaces";
import api from "../../service/axios";
import { getToken } from "../../utils/utils";

export const ProductsContext = createContext({} as IProductsContextProps);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  const getAllProducts = async (): Promise<Product[]> => {
    const res = await api.get("/products", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  const addNewProduct = async (
    data: IAddEditProductRequest
  ): Promise<Product> => {
    const res = await api.post("/products", data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  const editProduct = async (
    data: IAddEditProductRequest,
    id: number
  ): Promise<Product> => {
    const res = await api.patch(`/products/${id}`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  const deleteProduct = async (id: number): Promise<void> => {
    return await api.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getAllProducts,
        addNewProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
