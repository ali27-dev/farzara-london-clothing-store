import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import * as S from "./TrackingOrderDetailsStyles";

const STATUS_STEPS = [
  { label: "Order Placed", icon: <Clock size={20} /> },
  { label: "Processing", icon: <Package size={20} /> },
  { label: "Shipped", icon: <Truck size={20} /> },
  { label: "Out for Delivery", icon: <MapPin size={20} /> },
  { label: "Delivered", icon: <CheckCircle size={20} /> },
];

const TrackOrder = () => {
  const { orderId } = useParams();
  const [currentStatusIndex, setCurrentStatusIndex] = useState(2); // Mock: Shipped (index 2)

  // Calculate percentage for the progress line
  const progressPercentage =
    (currentStatusIndex / (STATUS_STEPS.length - 1)) * 100;

  return (
    <S.TrackingContainer>
      <S.TrackHeader>
        <h1>Track Your Order</h1>
        <p>Order ID: #{orderId}</p>
      </S.TrackHeader>
      <S.StepperWrapper>
        <S.ProgressLine progress={progressPercentage} />

        {STATUS_STEPS.map((step, index) => {
          const isCompleted = index < currentStatusIndex;
          const isActive = index === currentStatusIndex;

          return (
            <S.Step key={index}>
              <S.StepIcon active={isActive} completed={isCompleted}>
                {isCompleted ? <CheckCircle size={24} /> : step.icon}
              </S.StepIcon>
              <S.StepLabel active={isActive} completed={isCompleted}>
                <h4>{step.label}</h4>
                {isActive && <span>Current Status</span>}
              </S.StepLabel>
            </S.Step>
          );
        })}
      </S.StepperWrapper>
      {/* Order Details and Product Summary will be implemented in the next step */}
      <S.OrderDetailsGrid>
        {/* LEFT: LOGISTICS INFO */}
        <S.InfoCard>
          <h3>Delivery Details</h3>
          <S.DetailRow>
            <span>Estimated Delivery</span>
            <strong>April 22, 2026</strong>
          </S.DetailRow>
          <S.DetailRow>
            <span>Shipping Address</span>
            <strong>29 Eve Road, Bristol, BS5 0JX</strong>
          </S.DetailRow>
          <S.DetailRow>
            <span>Carrier</span>
            <strong>DHL Express</strong>
          </S.DetailRow>
          <S.DetailRow>
            <span>Payment Method</span>
            <strong>Cash on Delivery</strong>
          </S.DetailRow>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #ddd",
            }}
          >
            <S.DetailRow>
              <span>Subtotal</span>
              <strong>Rs. 39,300</strong>
            </S.DetailRow>
            <S.DetailRow>
              <span>Shipping</span>
              <strong>Rs. 200</strong>
            </S.DetailRow>
            <S.DetailRow style={{ fontSize: "1.8rem", fontWeight: "800" }}>
              <span>Total</span>
              <strong>Rs. 39,500</strong>
            </S.DetailRow>
          </div>
        </S.InfoCard>

        {/* RIGHT: ORDERED ITEMS */}
        <div>
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "2rem",
              textTransform: "uppercase",
            }}
          >
            Items in this Order
          </h3>
          <S.ProductList>
            {/* Mocking the products for now */}
            <S.ProductItem>
              <S.Thumb src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=200" />
              <S.ItemMeta>
                <h4>3 Piece Lawn Printed Unstitched Suit</h4>
                <p>Quantity: 1 • Size: STD</p>
              </S.ItemMeta>
              <span style={{ fontWeight: "700" }}>Rs. 7,500</span>
            </S.ProductItem>

            <S.ProductItem>
              <S.Thumb src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=200" />
              <S.ItemMeta>
                <h4>3 Piece Lawn Embroidered Suit</h4>
                <p>Quantity: 1 • Size: S</p>
              </S.ItemMeta>
              <span style={{ fontWeight: "700" }}>Rs. 31,800</span>
            </S.ProductItem>
          </S.ProductList>
        </div>
      </S.OrderDetailsGrid>
    </S.TrackingContainer>
  );
};

export default TrackOrder;
