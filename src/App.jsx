import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import ProductDetails from "./features/Products/ProductDetails";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Unstitched from "./pages/Unstitched";
import ContactUsPage from "./pages/ContactUsPage";
import PageNotFound from "./pages/PageNotFound";
import Sales from "./pages/Sales";
import Account from "./pages/Account";
// import ScrollToTop from "./ui/ScrollToTop";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="sales" element={<Sales />} />
              <Route path="unstitched" element={<Unstitched />} />
              <Route path="contactus" element={<ContactUsPage />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
