/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import CenteredContainer from "../components/CenteredContainer";
import AddProductForm from "../components/Forms/AddProductForm";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";
import { ProductsContext } from "../context/Products/Products.context";

const Products = () => {
  const { products, setProducts, getAllProducts } = useContext(ProductsContext);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  const renderContent = () => {
    if (products.length === 0) {
      return (
        <div className="centered_control">
          <span>Lista de produtos vazia</span>
          <span>Adicionar Produto</span>
          <Modal
            title="Adicionar Produto"
            height="60rem"
            setTrigger={() => <AddButton no_pos />}
            renderContent={(setOpen) => <AddProductForm setOpen={setOpen} />}
          />
        </div>
      );
    }

    return (
      <>
        <ProductsContainer>
          {products.map((el) => {
            return <ProductCard key={el.cod} {...el} />;
          })}
        </ProductsContainer>

        <Modal
          title="Adicionar Produto"
          height="60rem"
          setTrigger={() => <AddButton />}
          renderContent={(setOpen) => <AddProductForm setOpen={setOpen} />}
        />
      </>
    );
  };

  return (
    <CenteredContainer gap="6rem">
      <BackButton path="/dashboard" />

      <h2 className="title">Produtos</h2>
      {renderContent()}
    </CenteredContainer>
  );
};

export default Products;
