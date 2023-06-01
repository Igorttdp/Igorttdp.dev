import { AlertDialogContent } from "@radix-ui/react-alert-dialog";
import styled from "styled-components";

const AlertContent = styled(AlertDialogContent)`
  background-color: var(--grey-600);
  border-radius: 1rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 2.6rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  :focus {
    outline: none;
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

export default AlertContent;
