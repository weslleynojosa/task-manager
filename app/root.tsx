import { Outlet } from "@remix-run/react";
import Document from "~/components/document/Document";
import User from "~/components/icons/user/User";
import NavBar from "~/components/navbar/NavBar";
import Widgets, { loader, action } from "~/routes/widgets";
import {
  Container,
  ContentWrapper,
  Main,
  MainPage,
} from "~/theme/global.styles";

export { loader, action };

export default function App() {
  return (
    <Document title={"Task Manager"}>
      <MainPage>
        <NavBar />
        <ContentWrapper>
          <User />
          <Main>
            <Container>
              <Outlet />
            </Container>
            <Widgets />
          </Main>
        </ContentWrapper>
      </MainPage>
    </Document>
  );
}
