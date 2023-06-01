import styled from "styled-components";
import plus from "../assets/plus.svg";
import { forwardRef } from "react";
import { ButtonHTMLAttributes } from "react";
import { Ref } from "react";

interface IAddButtonContainerProp
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  no_pos?: boolean;
}

const AddButtonContainer = styled.button<IAddButtonContainerProp>`
  width: 6.4rem;
  height: 6.4rem;

  background-color: #202020;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: ${({ no_pos }) => (no_pos ? "unset" : "absolute")};
  bottom: 5%;
  right: 5%;
`;

const AddButton = forwardRef<HTMLButtonElement, IAddButtonContainerProp>(
  (props, ref: Ref<HTMLButtonElement>) => (
    <AddButtonContainer ref={ref} {...props}>
      <img src={plus} alt="Ícone Mais" />
    </AddButtonContainer>
  )
);

export default AddButton;
