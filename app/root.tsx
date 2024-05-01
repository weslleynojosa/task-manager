import { Outlet } from "@remix-run/react";
import Document from "~/components/document/Document";
import styled from "@emotion/styled";

export const Container = styled.div`
    border-radius: 8px;
    box-shadow: 0 2px 11px 0 #4f4f4f;
    margin: 0 2rem;
    overflow: hidden;
    max-height: 80vh;
`

export default function App() {
  return (
      <Document title={"Task Manager"}>
          <h1>TASKS</h1>
          {/*TODO: NAVBAR, WIDGETS, wrap Outlet*/}
          <Container>
              <Outlet/>
          </Container>
          <footer>TEST</footer>
      </Document>
  );
}
