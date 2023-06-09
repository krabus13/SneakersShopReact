import React, { useContext, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import PointerWithText from "../components/PointerWithText/PointerWithText";
import PointerWithText2 from "../components/PointerWithText/PointerWithText2";
import Card from "../components/Card/Card";
import Cards from "../components/Cards/Cards";
import { CartContext } from "../CartContext";

function Pages() {
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    const isItemInCart = cartItems.some((item) => item.id === product.id);
    if (!isItemInCart) {
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems, product];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      });
      console.log("Product added to cart:", product);
    }
  };

  const handleRemoveFromCart = (e, productId) => {
    e.preventDefault();
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    console.log("Product removed from cart:", productId);
  };

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <PointerWithText>Нова колекція!</PointerWithText>
      <Card handleAddToCart={handleAddToCart} />
      <PointerWithText2>Краща ціна!</PointerWithText2>
      <Cards handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Pages;
