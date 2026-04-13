import Row from "../ui/Row";
import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import CheckoutProduct from "../features/check-in-out/CheckoutProduct";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Checkout</Heading>
        <ButtonText onClick={() => navigate("/home")}>&larr; Back</ButtonText>
      </Row>
      <CheckoutProduct />
    </>
  );
}

export default Checkout;
