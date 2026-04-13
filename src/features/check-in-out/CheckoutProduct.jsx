import React, { useState } from "react";
import * as S from "./CheckoutProductStyles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import OrderSummary from "../CartProducts/OrderSummary";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, cartTotal } = useCart();
  const shipping = 200; // Flat rate as per screenshot
  const [paymentType, setPaymentType] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would normally validate the form
    alert("Processing your FarZara London Order...");
    navigate("/order-success"); // We will build this next!
  };
  return (
    <S.CheckoutContainer>
      <S.FormSection>
        {/* CONTACT SECTION */}
        <S.FormBlock>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "1.8rem" }}>Contact</h2>
            <button style={{ textDecoration: "underline", fontSize: "1.3rem" }}>
              Sign in
            </button>
          </div>
          <S.InputWrapper>
            <S.FloatingLabel>Email</S.FloatingLabel>
            <S.StyledInput type="email" />
          </S.InputWrapper>
          <label style={{ fontSize: "1.3rem", display: "flex", gap: "8px" }}>
            <input type="checkbox" /> Email me with news and offers
          </label>
        </S.FormBlock>

        {/* DELIVERY SECTION */}
        <S.FormBlock>
          <h2 style={{ fontSize: "1.8rem", marginTop: "2rem" }}>Delivery</h2>

          <S.InputWrapper>
            <S.FloatingLabel>Country/Region</S.FloatingLabel>
            <S.StyledInput as="select">
              <option>Pakistan</option>
              <option>United Kingdom</option>
            </S.StyledInput>
          </S.InputWrapper>

          <S.InputGroup>
            <S.InputWrapper>
              <S.FloatingLabel>First name</S.FloatingLabel>
              <S.StyledInput />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.FloatingLabel>Last name</S.FloatingLabel>
              <S.StyledInput />
            </S.InputWrapper>
          </S.InputGroup>

          <S.InputWrapper>
            <S.FloatingLabel>Address</S.FloatingLabel>
            <S.StyledInput />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.FloatingLabel>Apartment, suite, etc. (optional)</S.FloatingLabel>
            <S.StyledInput />
          </S.InputWrapper>

          <S.InputGroup>
            <S.InputWrapper>
              <S.FloatingLabel>City</S.FloatingLabel>
              <S.StyledInput />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.FloatingLabel>Postal code (optional)</S.FloatingLabel>
              <S.StyledInput />
            </S.InputWrapper>
          </S.InputGroup>

          <S.InputWrapper>
            <S.FloatingLabel>Phone</S.FloatingLabel>
            <S.StyledInput />
          </S.InputWrapper>
        </S.FormBlock>

        {/* SHIPPING METHOD */}
        <S.FormBlock>
          <h2 style={{ fontSize: "1.6rem" }}>Shipping method</h2>
          <S.MethodBox>
            <span>Standard</span>
            <strong>Rs 200.00</strong>
          </S.MethodBox>
        </S.FormBlock>

        {/* PAYMENT SECTION WITH CARD INPUTS */}
        <S.FormBlock>
          <h2 style={{ fontSize: "1.6rem" }}>Payment</h2>
          <p style={{ color: "#707070", fontSize: "1.2rem" }}>
            All transactions are secure and encrypted.
          </p>

          <S.PaymentBox>
            <S.PaymentOption
              active={paymentType === "card"}
              onClick={() => setPaymentType("card")}
            >
              <div>
                <input type="radio" checked={paymentType === "card"} readOnly />
                Debit / Credit Card
              </div>
              <img
                src="https://i.imgur.com/v37976p.png"
                alt="cards"
                style={{ height: "18px" }}
              />
            </S.PaymentOption>

            {/* CONDITIONAL CARD FIELDS (Only show if 'card' is selected) */}
            {paymentType === "card" && (
              <div
                style={{
                  padding: "1.5rem",
                  background: "#f9f9f9",
                  borderBottom: "1px solid #e1e1e1",
                }}
              >
                <S.InputWrapper>
                  <S.StyledInput placeholder="Card number" />
                </S.InputWrapper>
                <S.InputGroup>
                  <S.StyledInput placeholder="Expiration date (MM / YY)" />
                  <S.StyledInput placeholder="Security code" />
                </S.InputGroup>
                <S.InputWrapper style={{ marginTop: "1.2rem" }}>
                  <S.StyledInput placeholder="Name on card" />
                </S.InputWrapper>
              </div>
            )}

            <S.PaymentOption
              active={paymentType === "cod"}
              onClick={() => setPaymentType("cod")}
            >
              <div>
                <input type="radio" checked={paymentType === "cod"} readOnly />
                Cash on Delivery (COD)
              </div>
            </S.PaymentOption>
          </S.PaymentBox>
        </S.FormBlock>

        <S.PayButton onClick={handlePayment}>Pay now</S.PayButton>
      </S.FormSection>

      {/* RIGHT: ORDER SUMMARY SECTION */}
      {/* RIGHT: ORDER SUMMARY SECTION */}
      <S.SummaryAside>
        {cart.map((item) => (
          <S.CheckoutItem key={item.id}>
            <S.ImageWrapper>
              <img src={item.images[0]} alt={item.name} />
              <S.QtyBadge>{item.qty}</S.QtyBadge>
            </S.ImageWrapper>
            <S.ItemInfo>
              <h4>{item.name}</h4>
              <p>{item.size || "STD"}</p>
            </S.ItemInfo>
            <span style={{ fontSize: "1.4rem", fontWeight: "500" }}>
              Rs.{(item.price * item.qty).toLocaleString()}
            </span>
          </S.CheckoutItem>
        ))}

        <div
          style={{
            borderTop: "1px solid #e1e1e1",
            paddingTop: "2rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
              fontSize: "1.4rem",
            }}
          >
            <span>Subtotal</span>
            <span>Rs.{cartTotal.toLocaleString()}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
              fontSize: "1.4rem",
            }}
          >
            <span>Shipping</span>
            <span>Rs.{shipping.toLocaleString()}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            <span>Total</span>
            <span>Rs.{(cartTotal + shipping).toLocaleString()}</span>
          </div>
        </div>
      </S.SummaryAside>
    </S.CheckoutContainer>
  );
};

export default CheckoutPage;
