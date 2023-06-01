/* eslint-disable react-hooks/exhaustive-deps */
import CenteredContainer from "../components/CenteredContainer";
import PageCard from "../components/PageCard";
import doorOpen from "../assets/doorOpen.svg";
import barcode from "../assets/barcode.svg";
import userSettings from "../assets/userSettings.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthRegisterContext } from "../context/AuthRegister/AuthRegister.context";
import { User } from "../context/AuthRegister/interfaces";

const Dashboard = () => {
  const navigate = useNavigate();

  const { profile, setProfile, getProfile } = useContext(AuthRegisterContext);

  const exit = () => {
    clearLocalStorage();
    clearProfile();
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const clearProfile = () => {
    setProfile({} as User);
  };

  useEffect(() => {
    const token = localStorage.getItem("@softline_token");

    if (!token) {
      navigate("/");
    }

    getProfile().then((res) => setProfile(res));
  }, []);

  return (
    <CenteredContainer gap="3.6rem">
      <h2 className="title">Bem vindo, {profile.name}!</h2>

      <div className="row">
        <PageCard gap="4rem" path="/dashboard/products">
          <img src={barcode} alt="Ícone Código de Barras" />
          <span>Produtos</span>
        </PageCard>
        <PageCard gap="4rem" path="/dashboard/costumers">
          <img src={userSettings} alt="Ícone Condigurações de usuário" />
          <span>Clientes</span>
        </PageCard>
      </div>

      <div role="button" onClick={exit}>
        <PageCard width="25rem" height="6rem" color="blue" path="/">
          <img src={doorOpen} alt="Ícone Portas Abertas" />
          <span>Sair</span>
        </PageCard>
      </div>
    </CenteredContainer>
  );
};

export default Dashboard;
