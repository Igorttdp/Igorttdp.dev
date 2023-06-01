import styled from "styled-components";
import barcode from "../assets/barcode.svg";
import { forwardRef } from "react";

interface IBarCodeOpenContainer {
  width?: string;
}

const BarCodeOpenContainer = styled.div<IBarCodeOpenContainer>`
  cursor: pointer;
  position: relative;

  > img {
    width: ${({ width }) => width ?? "auto"};
  }

  > span {
    cursor: pointer !important;
    position: absolute;
    font-size: 1.8rem !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bolder !important;
    text-shadow: -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000,
      1px 0px 0px #000;
  }
`;

const BarCodeOpen = forwardRef<HTMLDivElement>((props, ref) => (
  <BarCodeOpenContainer ref={ref} {...props}>
    <img src={barcode} alt="Ícone Código de Barras" />
    <span>ABRIR</span>
  </BarCodeOpenContainer>
));

export default BarCodeOpen;
