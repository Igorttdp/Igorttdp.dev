import { Content as RadixContent } from "@radix-ui/react-dialog";
import styled from "styled-components";

interface IContentProps {
  height?: string;
}

const Content = styled(RadixContent)<IContentProps>`
  background-color: var(--grey-600);
  border-radius: 1rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50rem;
  min-height: 40rem;
  height: ${({ height }) => height ?? "unset"};
  max-height: 90vh;
  padding: 4rem 2.4rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  :focus {
    outline: none;
  }

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1.6rem;

    > .checkbox-field {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      align-self: baseline;
      gap: 8px;

      > input[type="checkbox"],
      label {
        cursor: pointer;
      }

      > label {
        font-size: 1.2rem;
      }
    }
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export default Content;
