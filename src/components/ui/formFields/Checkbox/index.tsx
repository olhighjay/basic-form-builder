"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import {
  StyledCheckbox,
  StyledCheckWrapper,
  StyledCheckContainer,
} from "./styles";


export type CheckboxProps = {
  name: string;
  disabled?: boolean;
  isChecked?: boolean;
  // onChange: (value: boolean) => void;
} & ComponentPropsWithoutRef<"input">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      disabled,
      isChecked,
      name,
      // onChange,
      ...props
    },
    ref
  ) {
    return (
      <>
        <StyledCheckContainer>
          <StyledCheckWrapper>
            <StyledCheckbox
              disabled={disabled}
              type="checkbox"
              name={name}
              id={name}
              checked={isChecked}
              ref={ref}
              // onChange={(e) => onChange(e.target.checked)}
              {...props}
            />
          </StyledCheckWrapper>
        </StyledCheckContainer>
      </>
    );
  });

export default Checkbox;
