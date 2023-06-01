/* eslint-disable react-hooks/exhaustive-deps */
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { IProviderProps } from "../../context/children.interface";
import AlertContent from "./Content";
import AlertOverlay from "./Overlay";
import Button from "../Button";
import AlertTitle from "./Title";
import AlertDescription from "./Description";
import { Costumer } from "../../context/Costumers/interfaces";
import { Product } from "../../context/Products/interfaces";
import { Dispatch, SetStateAction } from "react";

interface IAlertModalProps extends IProviderProps {
  deleteFn(id: number): Promise<void>;
  id: number;
  type: "products" | "costumers";
  state: Product[] | Costumer[];
  setState:
    | Dispatch<SetStateAction<Product[]>>
    | Dispatch<SetStateAction<Costumer[]>>;
  setIsAnimated: Dispatch<SetStateAction<string>>;
}

const AlertModal = ({
  children,
  deleteFn,
  id,
  type,
  state,
  setState,
  setIsAnimated,
}: IAlertModalProps) => {
  const handleClick = () => {
    if (type === "products") {
      const elements = state as Product[];
      const deleteState = elements.filter((el) => el.cod !== id);
      const setElements = setState as Dispatch<SetStateAction<Product[]>>;
      deleteFn(id).then(() => {
        setIsAnimated("true");
        setTimeout(() => {
          setElements(deleteState);
        }, 300);
      });
    }

    if (type === "costumers") {
      const elements = state as Costumer[];
      const deleteState = elements.filter((el) => el.cod !== id);
      const setElements = setState as Dispatch<SetStateAction<Costumer[]>>;
      deleteFn(id).then(() => {
        setIsAnimated("true");
        setTimeout(() => {
          setElements(deleteState);
        }, 300);
      });
    }
  };

  const handleExit = () => {
    setIsAnimated("false");
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertOverlay />
        <AlertContent>
          <AlertTitle className="AlertDialogTitle">
            Você tem certeza ?
          </AlertTitle>
          <AlertDescription className="AlertDialogDescription">
            Essa ação não pode ser desfeita. Ao clicar, confirmar, os dados
            serão excluidos dos nossos servidores.
          </AlertDescription>
          <div style={{ display: "flex", gap: 25, justifyContent: "center" }}>
            <AlertDialog.Cancel asChild>
              <Button onClick={handleExit} variant="negative">
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button onClick={handleClick}>Confirmar</Button>
            </AlertDialog.Action>
          </div>
        </AlertContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertModal;
