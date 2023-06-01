import styled from "styled-components";
import pen from "../assets/pen.svg";
import trash from "../assets/trash.svg";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Modal from "./Modal";
import EditProductForm from "./Forms/EditProductForm";
import EditCostumerForm from "./Forms/EditCostumerForm";
import { Product } from "../context/Products/interfaces";
import { Costumer } from "../context/Costumers/interfaces";
import AlertModal from "./AlertModal";
import { ProductsContext } from "../context/Products/Products.context";
import { CostumersContext } from "../context/Costumers/Costumers.context";
import { SetOpen } from "./Modal/interfaces/interfaces";

interface IEditDeleteContainer {
  top?: string;
  right?: string;
  has_background?: "true";
  background?: string;
  isAnimated?: string;
}

type IEditDeleteContainerOmited = Omit<IEditDeleteContainer, "background">;

type IBackgroundColorProps = "var(--red-500)" | "var(--yellow)" | "var(--blue)";

interface IEditDeleteProps extends IEditDeleteContainerOmited {
  form: "products" | "costumers";
  data: Product | Costumer;
  setIsAnimated: Dispatch<SetStateAction<string>>;
}

const EditDeleteContainer = styled.div<IEditDeleteContainer>`
  position: absolute;
  top: ${({ top }) => top ?? "2rem"};
  right: ${({ right }) => right ?? "2rem"};

  background-color: ${({ has_background, background, isAnimated }) =>
    has_background
      ? isAnimated === "possible"
        ? "var(--red-300)"
        : background
      : "transparent"};
  padding: ${({ has_background }) => (has_background ? "0.4rem" : "0")};

  transition: ${({isAnimated}) => isAnimated === "possible" ? "all 0.3s" : "all 0.2s"};

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 2rem !important;

  border-radius: 0 10px 0 10px;

  > button {
    width: 2rem;
    height: 2rem;

    background-color: transparent;
    mask-repeat: no-repeat;
    mask-size: contain;

    :first-child {
      background-color: #fff;
      -webkit-mask-image: url(${pen});
      mask-image: url(${pen});

      :hover {
        background-color: ${({ has_background }) =>
          !has_background ? "#dfc900" : "#fff"};
      }
    }

    :last-child {
      background-color: #fff;
      -webkit-mask-image: url(${trash});
      mask-image: url(${trash});

      :hover {
        background-color: ${({ has_background }) =>
          !has_background ? "var(--red-500)" : "#fff"};
      }
    }
  }
`;

const EditDeleteControll = ({
  has_background,
  right,
  top,
  form,
  data,
  isAnimated,
  setIsAnimated,
}: IEditDeleteProps) => {
  const [background, setBackground] =
    useState<IBackgroundColorProps>("var(--blue)");

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const { products, setProducts, deleteProduct } = useContext(ProductsContext);
  const { costumers, setCostumers, deleteCostumer } =
    useContext(CostumersContext);

  const handleMouseOverYellow = () => {
    setBackground("var(--yellow)");
  };

  const handleMouseOverRed = () => {
    setBackground("var(--red-500)");
  };

  const handleMouseOut = () => {
    setBackground("var(--blue)");
  };

  const handleClick = () => {
    setIsAnimated("possible");
  };

  const renderForm = ({ setOpen }: SetOpen) => {
    if (form === "costumers")
      return <EditCostumerForm setOpen={setOpen} {...(data as Costumer)} />;
    if (form === "products")
      return <EditProductForm setOpen={setOpen} {...(data as Product)} />;
  };

  useEffect(() => {
    if (form === "costumers") {
      setTitle("Editar Cliente");
      setSubtitle(`ID do Cliente:  ${data.cod}`);
    }

    if (form === "products") {
      setTitle("Editar Produto");
      setSubtitle(`ID do Produto: ${data.cod}`);
    }

    return;
  }, [form, data]);

  return (
    <EditDeleteContainer
      isAnimated={isAnimated}
      has_background={has_background}
      background={background}
      right={right}
      top={top}
    >
      <Modal
        title={title}
        subtitle={subtitle}
        height={form === "costumers" ? "50rem" : "69rem"}
        setTrigger={() => (
          <button
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOverYellow}
          ></button>
        )}
        renderContent={(setOpen) => renderForm({ setOpen }) as JSX.Element}
      />
      <AlertModal
        deleteFn={form === "products" ? deleteProduct : deleteCostumer}
        id={data.cod}
        type={form}
        state={
          form === "products"
            ? (products as Product[])
            : (costumers as Costumer[])
        }
        setState={form === "products" ? setProducts : setCostumers}
        setIsAnimated={setIsAnimated}
      >
        <button
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOverRed}
          onClick={handleClick}
        ></button>
      </AlertModal>
    </EditDeleteContainer>
  );
};

export default EditDeleteControll;
