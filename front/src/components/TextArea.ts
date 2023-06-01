import styled from "styled-components";

interface ITextAreaProps {
  width?: string;
  height?: string;
}

const TextArea = styled.textarea<ITextAreaProps>`
  max-width: 50rem;
  width: ${({ width }) => width ?? "31rem"};
  height: ${({ height }) => height ?? "13rem"};
  padding: 2rem;

  background-color: var(--primary-color);
  color: #fff;

  border-radius: 1rem;

  ::placeholder {
    color: var(--grey-300);
  }
`;

export default TextArea;
