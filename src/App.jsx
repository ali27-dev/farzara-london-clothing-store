import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import OrderDetails from "./pages/OrderDetails";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkin from "./pages/Checkin";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
// import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="orderdetails/:orderId" element={<OrderDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="checkin/:orderId" element={<Checkin />} />
            {/* <Route path="/" element={<Checkout />} /> */}
            <Route path="contactus" element={<ContactUs />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
