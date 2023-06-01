import styled from "styled-components";
import Input from "./Input";
import { ChangeEvent, FocusEvent, forwardRef } from "react";
import { onKeyPressMaskChange, mask as maskFn } from "../utils/utils";
import InputMaskContainer from "./InputMaskContainer";

interface InputLabelProps {
  label: string;
  defaultValue?: string | number;
  id: string;
  measure?: "COD:" | "KG" | "R$";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  name: string;
  maxLength?: number;
  mask?: "true";
  value?: string;
}

type InputLabelContainerProps = Pick<InputLabelProps, "measure">;

const InputLabelContainer = styled.div<InputLabelContainerProps>`
  position: relative;

  > label {
    cursor: pointer;
    font-size: 1.2rem;
  }

  > input {
    margin-top: 0.8rem;
  }

  > span {
    position: absolute;
    font-size: ${({ measure }) => (measure === "COD:" ? "1.2rem" : "1.4rem")};
    font-weight: 600;
    color: var(--grey-300);

    top: ${({ measure }) => (measure === "COD:" ? "57%" : "54%")};
    left: 2rem;
  }
`;

const InputLabel = forwardRef<HTMLInputElement, InputLabelProps>(
  (
    {
      label,
      defaultValue,
      id,
      measure,
      onBlur,
      onChange,
      name,
      maxLength,
      mask,
      value,
    }: InputLabelProps,
    ref
  ) => {
    const renderMeasure = () => {
      return measure ? <span>{measure}</span> : "";
    };

    const renderInput = () => {
      if (mask) {
        return (
          <InputMaskContainer mt="0.8rem">
            <span>
              {maskFn(value as string)} <span></span>
            </span>
            <Input
              mask="true"
              maxLength={11}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={ref}
              onKeyDown={onKeyPressMaskChange}
              value={value}
            />
          </InputMaskContainer>
        );
      }

      return (
        <Input
          name={name}
          id={id}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          pl={
            measure
              ? measure === "COD:"
                ? "5.4rem"
                : measure === "KG"
                ? "4.4rem"
                : "4.2rem"
              : "auto"
          }
          maxLength={maxLength}
        />
      );
    };

    return (
      <InputLabelContainer measure={measure} ref={ref}>
        <label htmlFor={id}>{label}:</label>
        <br />
        {renderMeasure()}
        {renderInput()}
      </InputLabelContainer>
    );
  }
);

export default InputLabel;
