
import { forwardRef } from "react";
import {
  StyledRadioBtn,
  StyledRadioBtnContainer,
  StyledRadioBtnTextWrapper,
  StyledRadioBtnTitle,
  StyledRadioBtnWrapper,
} from "./StyledRadioButton";
export type RadioButtonProps = {
  title: string;
  name: string;
  disabled?: boolean;
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function Checkbox(
    {
      name,
      title,
      disabled,
      ...props
    },
    ref
  ) {

  return (
    <>
      <StyledRadioBtnContainer>
        <StyledRadioBtnWrapper>
          <StyledRadioBtn
            disabled={disabled}
            type="radio"
            name={name}
            id={name}
            ref={ref}
            {...props}
          />
        </StyledRadioBtnWrapper>

        <StyledRadioBtnTextWrapper>
          {title && (
            <StyledRadioBtnTitle
            >
              {title}
            </StyledRadioBtnTitle>
          )}
        </StyledRadioBtnTextWrapper>
      </StyledRadioBtnContainer>
    </>
  );
});

export default RadioButton;
