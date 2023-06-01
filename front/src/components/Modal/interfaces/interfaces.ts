import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalProps {
  children?: ReactNode | ReactNode[];
  title?: string;
  subtitle?: string;
  height?: string;
  setTrigger(): JSX.Element;
  renderContent?(data: Dispatch<SetStateAction<boolean>>): JSX.Element;
}

export interface SetOpen {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
