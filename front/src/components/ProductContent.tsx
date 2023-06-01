import styled from "styled-components";
import barcode from "../assets/barcode.svg";
import TextArea from "./TextArea";
import { Product } from "../context/Products/interfaces";

const ProductContentContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 2.8rem;

  > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 2.8rem;

    > img {
      width: 20rem;
    }

    > div {
      width: 40rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      > div {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;

        :last-child {
          align-items: flex-end;
        }
      }
    }

    span {
      font-size: 1.6rem;
    }
  }

  > span {
    font-size: 2rem;
  }
`;

const ProductContent = ({
  cod,
  bar_code,
  description,
  gross_weight,
  net_weight,
  value,
}: Product) => {
  return (
    <ProductContentContainer>
      <div>
        <img src={barcode} alt="Ícone Código de Barras" />
        <div>
          <div>
            <span>ID do produto: {cod}</span>
            <span>
              <small>COD:</small> {bar_code}
            </span>
          </div>
          <div>
            <span>Peso Bruto: {gross_weight}</span>
            <span>Peso Líquido: {net_weight}</span>
          </div>
        </div>
      </div>
      <TextArea
        width="40rem"
        height="20rem"
        disabled
        defaultValue={description}
      />
      <span>Valor: R$ {value}</span>
    </ProductContentContainer>
  );
};

export default ProductContent;
