/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import CenteredContainer from "../components/CenteredContainer";
import CostumerCard from "../components/CostumerCard";
import CostumersContainer from "../components/CostumersContainer";
import AddCostumerForm from "../components/Forms/AddCostumerForm";
import Modal from "../components/Modal";
import { CostumersContext } from "../context/Costumers/Costumers.context";

const Costumers = () => {
  const { costumers, setCostumers, getAllCostumers } =
    useContext(CostumersContext);

  useEffect(() => {
    getAllCostumers().then((res) => setCostumers(res));
  }, []);

  const renderContent = () => {
    if (costumers.length === 0) {
      return (
        <div className="centered_control">
          <span>Lista de clientes vazia</span>
          <span>Adicionar Cliente</span>
          <Modal
            title="Adicionar Cliente"
            setTrigger={() => <AddButton no_pos />}
            renderContent={(setOpen) => <AddCostumerForm setOpen={setOpen} />}
          />
        </div>
      );
    }

    return (
      <>
        <CostumersContainer>
          {costumers.map((el) => {
            return (
              <CostumerCard
                key={el.cod}
                {...el}
                has_background="true"
                top="0"
                right="0"
              />
            );
          })}
        </CostumersContainer>

        <Modal
          title="Adicionar Cliente"
          setTrigger={() => <AddButton />}
          renderContent={(setOpen) => <AddCostumerForm setOpen={setOpen} />}
        />
      </>
    );
  };

  return (
    <CenteredContainer>
      <BackButton path="/dashboard" />
      <h2 className="title">Clientes</h2>
      {renderContent()}
    </CenteredContainer>
  );
};

export default Costumers;
