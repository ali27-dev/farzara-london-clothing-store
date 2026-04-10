import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import * as S from "./OrderSummaryStyles";
import { Check } from "lucide-react";

function OrderSummary() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <S.SummaryBox>
        <S.Title>Order Summary</S.Title>

        <S.SummaryRow>
          <span>Subtotal</span>
          <strong>Rs.{cartTotal.toLocaleString()}</strong>
        </S.SummaryRow>
        <S.SummaryRow>
          <span>Delivery</span>
          <strong>Free</strong>
        </S.SummaryRow>

        <S.SummaryRow>
          <span>Shipping with Delivery</span>
          <strong>Rs.{cartTotal.toLocaleString()}</strong>
        </S.SummaryRow>

        <S.CheckoutBtn onClick={() => navigate("/checkout")}>
          Proceed to Checkout <Check size={18} />
        </S.CheckoutBtn>

        <S.ContinueBtn onClick={() => navigate("/products")}>
          Continue to Shopping
        </S.ContinueBtn>
      </S.SummaryBox>
    </>
  );
}

export default OrderSummary;
