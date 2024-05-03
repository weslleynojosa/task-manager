import styled from "@emotion/styled";
import { darkBlue, lightBlue, lightGrey } from "~/theme/colors";
import { Form } from "@remix-run/react";

export const Header = styled.div`
  display: flex;
  background: ${lightBlue};
  width: 100%;
  height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${darkBlue};
  user-select: none;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

export const P = styled.p`
  margin-right: 10rem;

  @media (max-width: 47.94em) {
    &.id-number,
    &.name {
      display: none;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60rem;
  width: 100%;
  overflow-y: scroll;
`;
