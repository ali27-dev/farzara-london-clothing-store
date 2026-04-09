/* eslint-disable */
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import { CartProvider } from "../context/CartContext";

const StyleAppLayout = styled.div``;

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
    <CartProvider>
      <StyleAppLayout>
        <Navbar />
        <StyleMain>
          <Container>
            <Outlet />
          </Container>
        </StyleMain>
        <FooterSection />
      </StyleAppLayout>
    </CartProvider>
  );
}

export default AppLayout;
