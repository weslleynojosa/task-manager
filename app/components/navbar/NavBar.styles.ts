import styled from "@emotion/styled";
import Button from "~/components/button/Button";
import { blue, grey, lightestGrey, paleWhite, white } from "~/theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  height: 100%;
  position: fixed;
  background-image: url("/nav_bg.png");

  @media (max-width: 48em) {
    display: none;
  }
`;

export const Actions = styled.div`
  color: ${white};
  font-size: 2.4rem;
  margin: 1.5rem 0 4rem;
  padding-bottom: 3rem;
  border-bottom: solid 1px ${white};
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IconButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${paleWhite};
  }
`;
