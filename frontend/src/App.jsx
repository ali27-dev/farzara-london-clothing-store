import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/productsContext";
import { AuthProvider } from "./context/authContext";
import { OrderProvider } from "./context/orderContext";

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
import OrderConfirmation from "./features/check-in-out/OrderConfirmation";
import Checkout from "./pages/Checkout";
import TrackOrderDetails from "./features/check-in-out/TrackingOrderDetails";
import TrackOrder from "./features/check-in-out/TrackOrder";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <>
      <GlobalStyles />
      <ProductsProvider>
        <AuthProvider>
          <OrderProvider>
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
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="account" element={<Account />} />
                  </Route>
                  <Route
                    path="checkout"
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  />
                  // In App.jsx
                  <Route path="order-success" element={<OrderConfirmation />} />
                  <Route path="track-order" element={<TrackOrder />} />
                  <Route
                    path="track-order/:id"
                    element={<TrackOrderDetails />}
                  />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </OrderProvider>
        </AuthProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
