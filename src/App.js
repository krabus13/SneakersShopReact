import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./CartContext";
import { useState } from "react";
import PayPages from "./components/PayPages/PayPages";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route
              path="/product/:id"
              element={
                <ProductPage handleRemoveFromCart={handleRemoveFromCart} />
              }
            />
            <Route path="/pay" element={<PayPages />} />
            {/* <Navigate to="/" /> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
