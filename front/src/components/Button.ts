import styled from "styled-components";

interface IButtonProps {
  variant?: "positive" | "negative";
}

const Button = styled.button<IButtonProps>`
  width: 20rem;
  font-size: 1.4rem;
  padding: 0.8rem 0;

  color: #ffffff;
  background-color: transparent;

  :hover {
    background-color: ${({ variant }) =>
      variant === "negative" ? "var(--red-500)" : "var(--green)"};
  }

  border: 1px solid;
  border-color: ${({ variant }) =>
    variant === "negative" ? "var(--red-500)" : "var(--green)"};
    border-radius: 0.6rem;
`;

export default Button;
