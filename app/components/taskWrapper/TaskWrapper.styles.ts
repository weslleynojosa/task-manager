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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: solid 2px ${lightGrey};
  border-radius: 0.8rem;
  width: 100%;
  padding: 1.5rem;

    @media (min-width: 48em) {
        max-width: 46rem;
    }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;

  @media (min-width: 48em) {
    flex-wrap: nowrap;
    margin-bottom: 1.8rem;
  }
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const WidgetWrapper = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 2rem auto;
  gap: 1rem;

  @media (min-width: 48em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
