import styled from "@emotion/styled";
import { black, darkBlue } from "~/theme/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 0 #4f4f4f;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  width: 100%;
  height: 9rem;
  flex-grow: 1;

  & > p,
  h1 {
    margin: 0;
  }

  & > p {
    font-size: 1.2rem;
    color: ${black};
  }

  & > h1 {
    font-size: 2.4rem;
    color: ${darkBlue};
  }
`;
