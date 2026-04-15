import Row from "../ui/Row";
import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import CheckoutProduct from "../features/check-in-out/CheckoutProduct";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../ui/Logo";

const StyleCheckoutContainer = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

function Checkout() {
  const navigate = useNavigate();

  return (
    <StyleCheckoutContainer>
      <Logo />
      <Row style={{ margin: "4rem 4rem 2rem 4rem" }} type="horizontal">
        <Heading as="h1">Checkout</Heading>
        <ButtonText onClick={() => navigate("/cart")}>&larr; Back</ButtonText>
      </Row>
      <CheckoutProduct />
    </StyleCheckoutContainer>
  );
}

export default Checkout;
