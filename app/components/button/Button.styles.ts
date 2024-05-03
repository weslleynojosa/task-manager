import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonTypes } from "~/components/button/Button.types";
import { blue, lightGrey, white } from "~/theme/colors";

export const StyledButton = styled.button<ButtonTypes>`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${blue};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background: ${blue};
      color: ${white};
      padding: 0.8rem 2.5rem;
    `};

  ${({ secondary }) =>
    secondary &&
    css`
      border: solid 1px ${lightGrey};
      padding: 0.8rem 2.5rem;
    `};

  ${({ warning }) =>
      warning &&
      css`
      color: ${white};
        background: ${blue};
        padding: 0.8rem 2.5rem;
    `};
`;
