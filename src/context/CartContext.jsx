import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  // PERSISTENCE: Initialize from LocalStorage so cart isn't lost on refresh
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("farzara_cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        return Array.isArray(parsedCart) ? parsedCart : [];
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
    }
    return [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sync with LocalStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("farzara_cart", JSON.stringify(cart));
  }, [cart]);

  // --- ACTIONS ---

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // If new item, add with qty 1
      return [...prevCart, { ...product, qty: 1 }];
    });
    openSidebar(); // Professional UX: Open sidebar automatically on add
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
      )
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        addToCart,
        removeFromCart,
        updateQty,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook for easier usage in components
function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("useCart must be used within a CartProvider");
  return context;
}

export { CartProvider, useCart };
