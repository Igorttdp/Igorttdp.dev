import styled from "styled-components";

interface ICenteredContainer {
  gap?: string;
}

const CenteredContainer = styled.main<ICenteredContainer>`
  position: relative;
  width: 100%;
  min-height: 100vh;

  padding: 6rem 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap ?? "2.8rem"};

  > img {
    width: 30rem;
  }

  > .title {
    font-size: 3.2rem;
  }

  > .row {
    display: flex;
    flex-flow: row nowrap;
    gap: 6rem;
  }

  > .centered_control {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;

    > span {
      :first-child {
        font-size: 2.4rem;
      }

      font-size: 1.8rem;
    }
  }
`;

export default CenteredContainer;
