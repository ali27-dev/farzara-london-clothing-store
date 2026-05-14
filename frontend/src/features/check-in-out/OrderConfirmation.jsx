import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./OrderConfirmationStyles";
import { useOrders } from "../../context/orderContext";
const OrderConfirmation = () => {
  const { order } = useOrders();
  const navigate = useNavigate();

  // Redirect if no order data (e.g. user refreshes page)
  useEffect(() => {
    if (!order) navigate("/");
  }, [order, navigate]);

  if (!order) return null;

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
          <strong>#{order._id}</strong>
        </S.MetaItem>
        <S.MetaItem>
          <span>Date</span>
          <strong>{new Date(order.createdAt).toLocaleDateString()}</strong>
        </S.MetaItem>
        <S.MetaItem>
          <span>Total Amount</span>
          <strong>Rs. {order.totalPrice}</strong>
        </S.MetaItem>
        <S.MetaItem>
          <span>Payment Method</span>
          <strong>{order.paymentMethod}</strong>
        </S.MetaItem>
        <S.MetaItem style={{ gridColumn: "1 / -1" }}>
          <span>Shipping Address</span>
          <strong>
            {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
            {order.shippingAddress.country}
          </strong>
        </S.MetaItem>
      </S.OrderMetaGrid>

      {/* Product Summary & Buttons */}
      <S.ItemList>
        {order.orderItems.map((item, idx) => (
          <S.OrderItem key={idx}>
            <S.ItemImage
              src={Array.isArray(item.images) ? item.images[0] : item.images}
              alt={item.name}
            />
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
      </S.ButtonGroup>

      <p style={{ marginTop: "4rem", fontSize: "1.2rem", color: "#999" }}>
        A confirmation email has been sent to your registered address.
      </p>
    </S.SuccessWrapper>
  );
};

export default OrderConfirmation;
