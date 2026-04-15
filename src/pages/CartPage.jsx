import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ButtonText from "../ui/ButtonText";
import CartDetails from "../features/CartProducts/CartDetails";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cart Products</Heading>
        <ButtonText onClick={() => navigate("/products")}>
          &larr; Back
        </ButtonText>
      </Row>
      {cart.length > 0 ? (
        <CartDetails />
      ) : (
        "There is no Carted products yet!,Please go back to products section and shop now!"
      )}
    </>
  );
}

export default CartPage;
