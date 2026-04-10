import { useCart } from "../../context/CartContext";
import * as C from "./CartDetailsStyles";
import Heading from "../../ui/Heading";
import CartItemRow from "./CartItemRow";
import OrderSummary from "./OrderSummary";

function CartDetails() {
  const { cart, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <C.EmptyCartContainer>
        <h2>Your Bag is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <ShopLink to="/products">Continue Shopping</ShopLink>
      </C.EmptyCartContainer>
    );
  }

  return (
    <>
      <C.StyledCartPage>
        <Heading as="h1">Your Bag ({cartCount} items)</Heading>
        <C.CartContent>
          <C.ItemsSection>
            {cart.map((item) => (
              <CartItemRow key={item.id} item={item} />
            ))}
          </C.ItemsSection>

          <C.SummarySection>
            <OrderSummary />
          </C.SummarySection>
        </C.CartContent>
      </C.StyledCartPage>
    </>
  );
}

export default CartDetails;
