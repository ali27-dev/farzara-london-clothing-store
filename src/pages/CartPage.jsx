import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ButtonText from "../ui/ButtonText";
import CartDetails from "../features/CartProducts/CartDetails";

function CartPage() {
  const moveBack = useMoveBack();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cart Products</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <CartDetails />
    </>
  );
}

export default CartPage;
