import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import Wishlist from "./pages/Wishlist";

import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

import Compare from "./pages/Compare";

import TrackOrder from "./pages/TrackOrder";
import TrackOrderDetails from "./pages/TrackOrderDetails";

import Account from "./pages/Account";







function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
            path="/shop"
            element={<Shop/>}
         />


         <Route
            path="/product/:id"
            element={<ProductDetails/>}
          />


          <Route
             path="/cart"
             element={<Cart />}
          />

          <Route
             path="/wishlist"
             element={<Wishlist/>}
          />

          <Route
             path="/checkout"
             element={<Checkout/>}
           />

          <Route
             path="/success"
             element={<Success/>}
           />

           <Route
              path="/compare"
              element={<Compare />}
            />

            <Route
               path="/track-order"
               element={<TrackOrder/>}
            />

             <Route
                path="/track-order/:id"
                element={<TrackOrderDetails/>}
              />

              <Route
                 path="/account"
                 element={<Account/>}
               />



      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;