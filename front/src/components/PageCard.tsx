import styled from "styled-components";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IPageCardContainerProps {
  width?: string;
  height?: string;
  gap?: string;
  color?: "red" | "blue";
}

interface IPageCardProps extends IPageCardContainerProps {
  path: string;
  children: ReactNode;
}

const PageCardContainer = styled.div<IPageCardContainerProps>`
  cursor: pointer;

  width: ${({ width }) => width ?? "30rem"};
  height: ${({ height }) => height ?? "15rem"};

  background-color: transparent;
  border: 1px solid;
  border-color: ${({ color }) =>
    color === "blue" ? "var(--blue)" : "var(--red-500)"};
  border-radius: 1rem;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap ?? "1.6rem"};

  :hover {
    background-color: ${({ color }) =>
      color === "blue" ? "var(--blue)" : "var(--red-500)"};
    transition: all 0.3s;
  }

  > span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const PageCard = ({
  children,
  path,
  width,
  height,
  gap,
  color,
}: IPageCardProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <PageCardContainer
      width={width}
      height={height}
      gap={gap}
      color={color}
      role="button"
      onClick={handleClick}
    >
      {children}
    </PageCardContainer>
  );
};

export default PageCard;
