import styled from "@emotion/styled";
import { Form } from "@remix-run/react";
import { black, darkBlue, lightBlue } from "~/theme/colors";
import { Wrapper } from "~/theme/global.styles";

export const Modules = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  background: ${lightBlue};
  width: 100%;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${darkBlue};

  & > p {
    font-size: 2.4rem;
    margin: 0 1rem;
  }
`;

export const SubTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Hint = styled.p`
  margin: 1.5rem 0 0;
  color: ${black};
`;

export const StyledWrapper = styled(Wrapper)`
  padding: 1.5rem;
  flex-direction: column;
`;

export const WidgetWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 1rem;

  @media (min-width: 48em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const InnerAction = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonArea = styled.div`
  display: flex;
  & > form {
    margin-right: 1rem;
  }
`;

export const Note = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
`;

export const NoteForm = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
