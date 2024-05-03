import styled from "@emotion/styled";
import {Form} from "@remix-run/react";
import {lightGrey} from "~/theme/colors";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: solid 2px ${lightGrey};
  border-radius: 0.8rem;
  width: 100%;
  padding: 1.5rem;
    margin-top: 1.5rem;

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