import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Overlay from "./Overlay";
import Content from "./Content";
import Title from "./Title";
import CloseButton from "../CloseButton";
import { IModalProps } from "./interfaces/interfaces";

const Modal = ({
  children,
  title,
  subtitle,
  height,
  setTrigger,
  renderContent,
}: IModalProps) => {
  const showTitle = () => {
    return title ? (
      <Title className="DialogTitle">
        {title}
        {showSubtitle()}
      </Title>
    ) : null;
  };

  const showSubtitle = () => {
    return subtitle ? (
      <>
        <br />
        <span>{subtitle}</span>
      </>
    ) : (
      ""
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{setTrigger()}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content height={height}>
          {showTitle()}
          {renderContent ? renderContent(setOpen) : children}
          <Dialog.Close asChild>
            <CloseButton />
          </Dialog.Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
