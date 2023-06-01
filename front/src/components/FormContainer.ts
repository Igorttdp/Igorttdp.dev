import styled from "styled-components";

interface IFormContainerProps {
  width?: string;
  height?: string;
}

const FormContainer = styled.form<IFormContainerProps>`
  background-color: var(--grey-600);

  width: ${({ width }) => width ?? "40rem"};
  height: ${({height}) => height ?? "unset"};
  min-height: 30rem;
  padding: 3rem 0;
  border-radius: 1rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  > h3 {
    font-size: 2rem;
  }

  > span {
    font-size: 1.4rem;
  }
`;

export default FormContainer;
