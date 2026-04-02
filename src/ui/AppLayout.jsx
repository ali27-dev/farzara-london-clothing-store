/* eslint-disable */
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Sidebar from "./Sidebar";

const StyleAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

const StyleMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      {/* <Sidebar /> */}
      <StyleMain>
        <Container>
          <Outlet />
        </Container>
      </StyleMain>
    </StyleAppLayout>
  );
}

export default AppLayout;
