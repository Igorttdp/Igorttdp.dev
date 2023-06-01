import styled from "styled-components";

interface InputMaskContainerProps {
  mt?: string;
}

const InputMaskContainer = styled.div<InputMaskContainerProps>`
  position: relative;
  margin-top: ${({mt}) => mt ?? "unset"};

  :focus-within {
    > span > span {
      border-width: 1px;
    }
  }

  > span {
    font-size: 1.4rem;
    color: #fff;
    position: absolute;
    top: 48%;
    left: 2rem;
    transform: translateY(-50%);

    > span {
      animation: blink 1s step-end infinite;
      border-left: 0px solid white;
      margin-left: 0.25rem;

      @keyframes blink {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: #fff;
        }
      }
    }
  }
`;

export default InputMaskContainer;
