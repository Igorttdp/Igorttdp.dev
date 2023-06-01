import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

interface IBackButtonProps {
  path: string;
}

const BackButtonContainer = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;

  width: 5rem;
  height: 5rem;

  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

const BackButton = ({ path }: IBackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <BackButtonContainer onClick={handleClick} role="button">
      <img src={arrow} alt="Ícone Seta para esquerda" />
    </BackButtonContainer>
  );
};

export default BackButton;
