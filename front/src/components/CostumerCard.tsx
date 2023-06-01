import styled from "styled-components";
import signature from "../assets/signature.svg";
import digital from "../assets/digital.svg";
import document_icon from "../assets/document.svg";
import eye_slash from "../assets/eye_slash.svg";
import company from "../assets/company.svg";
import map from "../assets/map.svg";
import EditDeleteControll from "./EditDeleteControll";
import { Costumer } from "../context/Costumers/interfaces";
import { InputHTMLAttributes, useState } from "react";
import { mask } from "../utils/utils";

interface ICostumerCardProps extends Costumer {
  top?: string;
  right?: string;
  has_background?: "true";
}

interface ICostumerCardContainerProps
  extends InputHTMLAttributes<HTMLLIElement> {
  isAnimated: string;
}

const CostumerCardContainer = styled.li<ICostumerCardContainerProps>`
  position: relative;

  width: 50rem;
  height: 18rem;

  color: #fff;
  background-color: ${({ isAnimated }) =>
    isAnimated === "possible" ? "var(--red-300)" : "var(--grey-600)"};

  border-radius: 1rem;

  padding: 3.6rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 2rem;

  animation: ${({ isAnimated }) =>
    isAnimated === "true" ? "delete 0.3s ease-in forwards" : "unset"};

    transition: all .3s;

  @keyframes delete {
    0% {
      scale: 1;
    }

    100% {
      scale: 0;
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    :nth-child(2) {
      position: relative;
      > button {
        position: absolute;
        top: 14px;
        right: 16px;

        width: 17px;
        height: 17px;
        background-color: transparent;
        background-repeat: no-repeat;
        background-image: url(${eye_slash});
      }
    }

    :last-child > span {
      inline-size: 12rem;
    }

    > div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: flex-start;
      gap: 0;

      > div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }
    }
  }
`;

const CostumerCard = ({
  has_background,
  right,
  top,
  cod,
  name,
  fantasy,
  document,
  address,
}: ICostumerCardProps) => {
  const [isAnimated, setIsAnimated] = useState("");

  const data = {
    cod,
    name,
    fantasy,
    document,
    address,
  };

  return (
    <CostumerCardContainer isAnimated={isAnimated}>
      <EditDeleteControll
        has_background={has_background}
        right={right}
        top={top}
        form="costumers"
        data={data}
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
      />
      <div>
        <img width={60} height={36} src={signature} alt="Ícone Assinatura" />

        <div>
          <div>
            <img width={22} height={22} src={digital} alt="Ícone Mapa" />
            <span>ID: {cod}</span>
          </div>
          <span>{name}</span>
        </div>
      </div>
      <div>
        <img src={document_icon} alt="Ícone Documento" />
        <span>{mask(document)}</span>
        <button></button>
      </div>
      <div>
        <img src={company} alt="Ícone Compania" />
        <span>{fantasy}</span>
      </div>
      <div>
        <img src={map} alt="Ícone Mapa" />
        <span>{address}</span>
      </div>
    </CostumerCardContainer>
  );
};

export default CostumerCard;
