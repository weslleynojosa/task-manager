import styled from "@emotion/styled";
import { black, blue, grey } from "~/theme/colors";
import { PropTypes } from "~/components/input/Input.types";
import { css } from "@emotion/react";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  
  @media (min-width: 48em) {
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input<PropTypes>`
  border: none;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0;
  color: ${black};

  ${({ isTitle }) =>
    isTitle &&
    css`
      color: ${blue};
    `}

  &:disabled {
    background: none;
  }
`;

export const StyledLabel = styled.label<PropTypes>`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${grey};

  ${({ isTitle }) =>
    isTitle &&
    css`
      color: ${blue};
      font-weight: 600;
    `}
`;
