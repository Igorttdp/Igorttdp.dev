import { Dispatch, SetStateAction } from "react";

export interface ICostumersContextProps {
  costumers: Costumer[];
  setCostumers: Dispatch<SetStateAction<Costumer[]>>;
  getAllCostumers(): Promise<Costumer[]>;
  addNewCostumer(data: IAddEditCostumerRequest): Promise<Costumer>;
  editCostumer(data: IAddEditCostumerRequest, id: number): Promise<Costumer>;
  deleteCostumer(id: number): Promise<void>;
}

export interface Costumer {
  cod: number;
  name: string;
  fantasy: string;
  document: string;
  address: string;
}

export type IAddEditCostumerRequest = Omit<Costumer, "cod">;
