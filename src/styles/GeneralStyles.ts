import styled from "styled-components";
import { css } from "styled-components";

export const StyledInputError = styled.p<{ $errormessage?: string }>`
  ${({ $errormessage }: { $errormessage?: string }) =>
    !!$errormessage &&
    css`
      color: ${({theme}) => theme.colors.status.error};
      margin-top: 4px;
      font-size: 12px;
    `}
`;
