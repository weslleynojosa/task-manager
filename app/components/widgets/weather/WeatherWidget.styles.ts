import styled from "@emotion/styled";
import { grey, darkBlue, blue, white } from "~/theme/colors";
import { Wrapper } from "~/theme/global.styles";

export const WeatherWrapper = styled(Wrapper)`
  justify-content: center;
  padding: 1.5rem;
    min-width: 20rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Location = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${blue};
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  image-rendering: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Condition = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${blue};
  :after {
    content: "|";

    margin: 0 1rem;
  }
`;

export const Temp = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  color: ${blue};
`;

export const Empty = styled.div`
  color: ${grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
`;
