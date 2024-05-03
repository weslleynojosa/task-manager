import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonTypes } from "~/components/button/Button.types";
import {blue, grey, lightGrey, white} from "~/theme/colors";

export const StyledButton = styled.button<ButtonTypes>`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${blue};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.125rem;
  
  :disabled {
    background-color: ${grey};
  }

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

  ${({ className }) =>
    className === "floating" &&
    css`
      position: absolute;
      bottom: 2.5rem;
      right: 2.5rem;
      width: 15rem;
      margin: 0 auto;
      justify-content: center;
      border-radius: 0.4rem;
    `};
`;
