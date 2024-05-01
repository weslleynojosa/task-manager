import styled from "@emotion/styled";
import { lightestGrey } from "~/theme/colors";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  border-bottom: solid 1px ${lightestGrey};
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
