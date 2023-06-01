import styled from "styled-components";

interface ILoaderProps {
  width?: string;
  height?: string;
  borderWidth?: string;
}

const Loader = styled.div<ILoaderProps>`
  width: ${({ width }) => width ?? "12rem"};
  height: ${({ height }) => height ?? "12rem"};
  border-radius: 50%;
  border-width: ${({ borderWidth }) => borderWidth ?? "1.2rem"};
  border-style: solid;
  border-color: var(--grey-600);
  border-top-color: var(--blue);
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
