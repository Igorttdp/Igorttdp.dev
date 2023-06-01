import { DialogTitle } from "@radix-ui/react-dialog";
import styled from "styled-components";

const Title = styled(DialogTitle)`
  font-size: 2rem;
  text-align: center;

  line-height: 0.9;

  > span {
    font-size: 1.6rem;
  }
`;

export default Title;
