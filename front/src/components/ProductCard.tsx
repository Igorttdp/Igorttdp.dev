import styled from "styled-components";
import EditDeleteControll from "./EditDeleteControll";
import Modal from "./Modal";
import ProductContent from "./ProductContent";
import BarCodeOpen from "./BarCodeOpen";
import { Product } from "../context/Products/interfaces";
import { useState } from "react";

interface IProductCardContainerProps {
  isAnimated: string;
}

const ProductCardContainer = styled.li<IProductCardContainerProps>`
  position: relative;
  width: 30rem;
  height: 16rem;

  color: #fff;
  background-color: ${({ isAnimated }) =>
    isAnimated === "possible" ? "var(--red-300)" : "var(--grey-600)"};

  padding: 1.2rem 2rem;

  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${({ isAnimated }) =>
    isAnimated === "true" ? "delete 0.3s ease-in forwards" : "unset"};

  transition: all 0.3;

  @keyframes delete {
    0% {
      scale: 1;
    }

    100% {
      scale: 0;
    }
  }

  > div {
    width: fit-content;
    text-align: center;

    > div {
      margin-top: 1.2rem;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;

      > img {
        cursor: pointer;
      }

      > div {
        display: flex;
        flex-flow: column nowrap;

        > small {
          font-size: 1.2rem;
        }
      }

      > span {
        cursor: help;
        font-size: 3.2rem;
        font-weight: 600;

        > span {
          font-size: 1.2rem;
        }
      }
    }
  }

  > span {
    font-size: 1.4rem;
    align-self: flex-end;
    margin-bottom: 1.6rem;
  }
`;

const ProductCard = ({
  cod,
  bar_code,
  description,
  gross_weight,
  net_weight,
  value,
}: Product) => {
  const [isAnimated, setIsAnimated] = useState("false");

  const truncateBarCode = [bar_code.slice(0, 5), "..."];
  const data: Product = {
    cod,
    bar_code,
    description,
    gross_weight,
    net_weight,
    value,
  };

  return (
    <ProductCardContainer isAnimated={isAnimated}>
      <div>
        <Modal height="60rem" setTrigger={() => <BarCodeOpen />}>
          <ProductContent
            cod={cod}
            bar_code={bar_code}
            description={description}
            gross_weight={gross_weight}
            net_weight={net_weight}
            value={value}
          />
        </Modal>
        <div>
          <div>
            <small>ID: {cod}</small>
            <small>COD:</small>
          </div>
          <span title={bar_code}>
            {truncateBarCode[0]}
            <span>{truncateBarCode[1]}</span>
          </span>
        </div>
      </div>

      <EditDeleteControll
        form="products"
        data={data}
        setIsAnimated={setIsAnimated}
      />

      <span>R$ {Number(value).toFixed(2)}</span>
    </ProductCardContainer>
  );
};

export default ProductCard;
