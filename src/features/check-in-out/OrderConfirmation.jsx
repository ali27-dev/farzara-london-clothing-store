import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./OrderConfirmationStyles";
import { useCart } from "../../context/CartContext";

const OrderConfirmation = () => {
  const { clearCart } = useCart(); // Assuming you have a cart context to clear the cart after order confirmation
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve data passed from Checkout state
  // Fallback to mock data if accessed directly for development
  const orderData = location.state?.order || {
    id: "FZ-99284",
    total: 39500,
    method: "Cash on Delivery",
    date: new Date().toLocaleDateString("en-GB"),
    items: [
      {
        id: 1,
        name: "3 Piece Lawn Printed Unstitched Suit",
        qty: 1,
        price: 7500,
        image:
          "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=200",
      },
      {
        id: 2,
        name: "3 Piece Lawn Embroidered Suit",
        qty: 1,
        price: 31800,
        image:
          "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=200",
      },
    ],
  };

  // UX Best Practice: Clear the cart once the order is confirmed
  useEffect(() => {
    if (clearCart) clearCart();
  }, [clearCart]);

  return (
    <S.SuccessWrapper>
      {/* SUCCESS HERO */}
      <S.IconCircle>
        <Check size={48} strokeWidth={3} />
      </S.IconCircle>

      <S.HeaderSection>
        <h1>Order Confirmed!</h1>
        <p>
          Thank you for choosing FarZara London. Your order has been placed
          successfully and is now being processed by our team.
        </p>
      </S.HeaderSection>

      {/* QUICK DETAILS BLOCK */}
      <S.OrderMetaGrid>
        <S.MetaItem>
          <span>Order Number</span>
          <strong>#{orderData.id}</strong>
        </S.MetaItem>
        <S.MetaItem>
          <span>Date</span>
          <strong>{orderData.date}</strong>
        </S.MetaItem>
        <S.MetaItem>
          <span>Total Amount</span>
          <strong>Rs. {orderData.total.toLocaleString()}</strong>
        </S.MetaItem>
        <S.MetaItem>
          <span>Payment Method</span>
          <strong>{orderData.method}</strong>
        </S.MetaItem>
        <S.MetaItem style={{ gridColumn: "1 / -1" }}>
          <span>Shipping Address</span>
          <strong>{orderData.address}</strong>
        </S.MetaItem>
      </S.OrderMetaGrid>

      {/* Product Summary & Buttons will go here next */}
      <S.ItemList>
        {orderData.items.map((item) => (
          <S.OrderItem key={item.id}>
            <S.ItemImage src={item.image} alt={item.name} />
            <S.ItemInfo>
              <h4>{item.name}</h4>
              <p>Qty: {item.qty}</p>
            </S.ItemInfo>
            <S.ItemPrice>Rs. {item.price.toLocaleString()}</S.ItemPrice>
          </S.OrderItem>
        ))}
      </S.ItemList>

      <S.ButtonGroup>
        <S.ActionBtn primary onClick={() => navigate("/")}>
          Continue Shopping
        </S.ActionBtn>
        {/* <S.ActionBtn secondary onClick={() => navigate("/account/orders")}>
          View My Orders
        </S.ActionBtn> */}
      </S.ButtonGroup>

      <p style={{ marginTop: "4rem", fontSize: "1.2rem", color: "#999" }}>
        A confirmation email has been sent to your registered address.
      </p>
    </S.SuccessWrapper>
  );
};

export default OrderConfirmation;
