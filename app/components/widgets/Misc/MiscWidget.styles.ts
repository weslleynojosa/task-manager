import styled from "@emotion/styled";
import { black, darkBlue } from "~/theme/colors";
import {Wrapper} from "~/theme/global.styles";

export const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
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
