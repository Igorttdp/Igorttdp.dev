import { createContext, useState } from "react";
import { IProviderProps } from "../children.interface";
import api from "../../service/axios";
import {
  Costumer,
  IAddEditCostumerRequest,
  ICostumersContextProps,
} from "./interfaces";
import { getToken } from "../../utils/utils";

export const CostumersContext = createContext<ICostumersContextProps>(
  {} as ICostumersContextProps
);

const CostumersProvider = ({ children }: IProviderProps) => {
  const [costumers, setCostumers] = useState<Costumer[]>([] as Costumer[]);

  const getAllCostumers = async (): Promise<Costumer[]> => {
    const res = await api.get("/costumers", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  const addNewCostumer = async (data: IAddEditCostumerRequest): Promise<Costumer> => {
    const res = await api.post("/costumers", data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  const editCostumer = async (data: IAddEditCostumerRequest, id: number): Promise<Costumer> => {
    const res = await api.patch(`/costumers/${id}`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  const deleteCostumer = async (id: number): Promise<void> => {
    return await api.delete(`/costumers/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  };

  return (
    <CostumersContext.Provider
      value={{
        costumers,
        setCostumers,
        getAllCostumers,
        addNewCostumer,
        editCostumer,
        deleteCostumer,
      }}
    >
      {children}
    </CostumersContext.Provider>
  );
};

export default CostumersProvider;
