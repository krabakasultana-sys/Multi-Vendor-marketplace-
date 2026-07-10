import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { CompareProvider } from "./CompareContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import TrackOrder from "./pages/TrackOrder";
import OrderDetail from "./pages/OrderDetail";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CompareProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 bg-slate-50">
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="/order/:id" element={<OrderDetail />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CompareProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
