import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
import * as S from "./CartSidebarStyle";

const CartSidebar = () => {
  const {
    cart,
    isSidebarOpen,
    closeSidebar,
    updateQty,
    removeFromCart,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <S.Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
      <S.SidebarContainer isOpen={isSidebarOpen}>
        <S.Header>
          <h2>Your Bag ({cart.length})</h2>
          <S.CloseBtn onClick={closeSidebar}>
            <X size={24} />
          </S.CloseBtn>
        </S.Header>

        <S.Content>
          {cart.length > 0 ? (
            cart.map((item) => (
              <S.CartItem key={item.id}>
                <S.ItemImage src={item.images[0]} alt={item.name} />
                <S.ItemDetails>
                  <S.ItemHeader>
                    <h4
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        closeSidebar();
                      }}
                    >
                      {item.name}
                    </h4>
                    <button
                      style={{ color: "#9ca3af" }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </S.ItemHeader>
                  <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                    £{item.price}
                  </p>
                  <S.QuantityControls>
                    <button onClick={() => updateQty(item.id, -1)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>
                      <Plus size={14} />
                    </button>
                  </S.QuantityControls>
                </S.ItemDetails>
              </S.CartItem>
            ))
          ) : (
            <p
              style={{ textAlign: "center", marginTop: "4rem", color: "#888" }}
            >
              Your bag is empty
            </p>
          )}
        </S.Content>

        {cart.length > 0 && (
          <S.Footer>
            <S.Subtotal>
              <span>Subtotal</span>
              <span>£{cartTotal.toFixed(2)}</span>
            </S.Subtotal>
            <S.ActionButton primary onClick={() => navigate("/checkout")}>
              Checkout
            </S.ActionButton>
            <S.ActionButton
              onClick={() => {
                navigate("/cart");
                closeSidebar();
              }}
            >
              View Full Bag
            </S.ActionButton>
          </S.Footer>
        )}
      </S.SidebarContainer>
    </>
  );
};

export default CartSidebar;
