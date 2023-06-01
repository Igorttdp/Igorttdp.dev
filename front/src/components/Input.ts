import styled from "styled-components";

interface InputProps {
  pl?: string;
  mask?: "true";
  filled?: string;
}

const Input = styled.input<InputProps>`
  width: 31rem;
  padding: 1.2rem 2rem;
  padding-left: ${({ pl }) => pl ?? "auto"};

  font-size: 1.4rem;
  background-color: var(--primary-color);
  color: ${({ mask }) => (mask ? "transparent" : "#fff")};
  border: 1px solid transparent;
  border-radius: 0.8rem;

  ::autofill {
    -webkit-background-clip: text !important;
    background-clip: text !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({filled}) => filled && filled.length > 0 ? "transparent" : "#fff"};
    -webkit-box-shadow: 0 0 0px 1000px var(--primary-color) inset;
    box-shadow: 0 0 0px 1000px var(--primary-color) inset;
    font-family: "Inter";
    font-size: 1.4rem;
    transition: background-color 5000s ease-in-out 0s;
  }

  ::selection {
    color: ${({ mask }) => (mask ? "transparent" : "auto")};
  }

  :focus {
    border-color: #fff;
  }

  ::placeholder {
    color: var(--grey-300);
  }
`;

export default Input;
