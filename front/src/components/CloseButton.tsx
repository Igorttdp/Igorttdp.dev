import styled from "styled-components";
import times from "../assets/times.svg";
import { forwardRef } from "react";

const CloseButtonContainer = styled.button`
  width: 3.2rem;
  height: 3.2rem;

  background-color: #202020;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2rem;
  right: 3.2rem;
`;

const CloseButton = forwardRef<HTMLButtonElement>((props, ref) => (
  <CloseButtonContainer ref={ref} {...props}>
    <img src={times} alt="Ícone Vezes" />
  </CloseButtonContainer>
));

export default CloseButton;
