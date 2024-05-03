import styled from "@emotion/styled";
import {blue, lightestGrey} from "~/theme/colors";


export const Container = styled.div`
display: flex;
    padding: 1.5rem;
`
export const Wrapper = styled.div`
  display: flex;
    gap: 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
  border-radius: 0.8rem;
  background: ${lightestGrey};
    width: 5rem;
    height: 5rem;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.p`
  font-size: 2.4rem;
    margin: 0;
`;

export const Title = styled.span`
font-size: 1.4rem;
color: ${blue}`
