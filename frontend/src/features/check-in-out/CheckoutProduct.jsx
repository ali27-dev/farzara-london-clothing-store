import React, { useEffect, useState } from "react";
import * as S from "./CheckoutProductStyles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/orderContext";

import OrderSummary from "../CartProducts/OrderSummary";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const { createOrder, success, order } = useOrders();
  const shipping = 200; // Flat rate as per screenshot
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryDetails, setDeliveryDetails] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "Pakistan",
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    apartment: "",
  });

  const handleInputChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
  };

  // Example: Gathering data from your existing cart/form state
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    createOrder({
      orderItems: cart.map((item) => ({
        name: item.name,
        qty: item.qty,
        images: Array.isArray(item.images) ? item.images[0] : item.images, // send first image or string
        price: item.price,
        product: item._id || item.product, // must be a valid ObjectId string
      })),
      shippingAddress: {
        address: deliveryDetails.address,
        city: deliveryDetails.city,
        postalCode: deliveryDetails.postalCode,
        country: deliveryDetails.country,
      },
      paymentMethod: paymentMethod, // must be one of the allowed values
      totalPrice: cartTotal + shipping,
    });
  };

  useEffect(() => {
    if (success && order) {
      clearCart(); // Clear cart state & localStorage
      navigate(`/order-success`); // Redirect to tracking
    }
  }, [success, order, navigate]);

  return (
    <S.CheckoutContainer>
      <S.FormSection as="form" onSubmit={handlePlaceOrder}>
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
          </div>
          <S.InputWrapper>
            <S.FloatingLabel>Email</S.FloatingLabel>
            <S.StyledInput
              name="email"
              type="email"
              placeholder="Enter your email"
              value={deliveryDetails.email}
              onChange={handleInputChange}
            />
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
            <S.StyledInput
              name="country"
              as="select"
              value={deliveryDetails.country}
              onChange={handleInputChange}
            >
              <option>Pakistan</option>
              <option>United Kingdom</option>
            </S.StyledInput>
          </S.InputWrapper>

          <S.InputGroup>
            <S.InputWrapper>
              <S.FloatingLabel>First name</S.FloatingLabel>
              <S.StyledInput
                name="firstName"
                placeholder="John"
                value={deliveryDetails.firstName}
                onChange={handleInputChange}
                required
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.FloatingLabel>Last name</S.FloatingLabel>
              <S.StyledInput
                name="lastName"
                placeholder="Doe"
                value={deliveryDetails.lastName}
                onChange={handleInputChange}
                required
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.InputWrapper>
            <S.FloatingLabel>Address</S.FloatingLabel>
            <S.StyledInput
              name="address"
              placeholder="123 Main St"
              value={deliveryDetails.address}
              onChange={handleInputChange}
              required
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.FloatingLabel>Apartment, suite, etc. (optional)</S.FloatingLabel>
            <S.StyledInput
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={deliveryDetails.apartment}
              onChange={handleInputChange}
            />
          </S.InputWrapper>

          <S.InputGroup>
            <S.InputWrapper>
              <S.FloatingLabel>City</S.FloatingLabel>
              <S.StyledInput
                name="city"
                placeholder="London"
                value={deliveryDetails.city}
                onChange={handleInputChange}
                required
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.FloatingLabel>Postal code (optional)</S.FloatingLabel>
              <S.StyledInput
                name="postalCode"
                placeholder="12345"
                value={deliveryDetails.postalCode}
                onChange={handleInputChange}
                required
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.InputWrapper>
            <S.FloatingLabel>Phone</S.FloatingLabel>
            <S.StyledInput
              name="phone"
              placeholder="+1 234 567 890"
              value={deliveryDetails.phone}
              onChange={handleInputChange}
              required
            />
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
              active={paymentMethod === "card"}
              onClick={() => setPaymentMethod("card")}
            >
              <div>
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  readOnly
                />
                Debit / Credit Card
              </div>
              <img
                src="https://i.imgur.com/v37976p.png"
                alt="cards"
                style={{ height: "18px" }}
              />
            </S.PaymentOption>

            {/* CONDITIONAL CARD FIELDS (Only show if 'card' is selected) */}
            {paymentMethod === "card" && (
              <div
                style={{
                  padding: "1.5rem",
                  background: "#f9f9f9",
                  borderBottom: "1px solid #e1e1e1",
                }}
              >
                <S.InputWrapper>
                  <S.StyledInput placeholder="Card number" required />
                </S.InputWrapper>
                <S.InputGroup>
                  <S.StyledInput
                    placeholder="Expiration date (MM / YY)"
                    required
                  />
                  <S.StyledInput placeholder="Security code" required />
                </S.InputGroup>
                <S.InputWrapper style={{ marginTop: "1.2rem" }}>
                  <S.StyledInput placeholder="Name on card" required />
                </S.InputWrapper>
              </div>
            )}

            <S.PaymentOption
              active={paymentMethod === "Cash on Delivery"}
              onClick={() => setPaymentMethod("Cash on Delivery")}
            >
              <div>
                <input
                  type="radio"
                  checked={paymentMethod === "Cash on Delivery"}
                  readOnly
                />
                Cash on Delivery (COD)
              </div>
            </S.PaymentOption>
          </S.PaymentBox>
        </S.FormBlock>

        <S.PayButton type="submit">Place Order</S.PayButton>
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
