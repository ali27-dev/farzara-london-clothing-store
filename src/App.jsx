import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductPage from "./pages/ProductPage";
import Wishlist from "./pages/Wishlist";
import CartPage from "./pages/CartPage";
import Checkin from "./pages/Checkin";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Categories from "./pages/Categories";
import Account from "./pages/Account";
// import ScrollToTop from "./ui/ScrollToTop";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkin/:orderId" element={<Checkin />} />
            <Route path="categories" element={<Categories />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
