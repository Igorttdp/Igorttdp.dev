import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";
import styled from "styled-components";

const AlertOverlay = styled(AlertDialogOverlay)`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default AlertOverlay;
