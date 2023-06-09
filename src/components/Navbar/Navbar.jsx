import React, { useState } from "react";
import styles from "./Navbar.module.css";
import SneakersNav from "../../images/NavbarImg/SneakeкsNav.png";
import DropDownBox from "../DropdownBox/DropDownBox";
import MyButton from "../MyButton/MyButton";

const Navbar = ({ cartItems, setCartItems, handleRemoveFromCart }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price;
    }
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      <div className={styles.Navbar}>
        <div className={styles.left}>
          <img src={SneakersNav} className={styles.NavImg1} alt="Sneakers" />
          <h1 className={styles.title}>Sneakers</h1>
        </div>
        <div className={styles.ButAndDrop}>
          <div className={styles.totalPrice}> {totalPrice}$ </div>
          <div className={styles.CartLenght}>{cartItems.length}</div>
          <MyButton onClick={toggleCart}>
            <p style={{ color: "#6495ed", opacity: "0.6" }}> Мій кошик </p>
            {isCartOpen && (
              <DropDownBox
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartOpen={setCartOpen}
                isCartOpen={isCartOpen}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            )}
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
