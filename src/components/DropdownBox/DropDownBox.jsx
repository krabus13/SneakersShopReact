import React from "react";
import styles from "./DropDownBox.module.css";
import { Link } from "react-router-dom";

const DropDownBox = ({ cartItems, setCartItems, handleRemoveFromCart }) => {
  const RemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleItemClick = (event, productId) => {
    handleRemoveFromCart(event, productId);
    event.stopPropagation();
  };

  return (
    <div className={styles.main} onClick={handleItemClick}>
      {cartItems.length === 0 ? (
        <h5 className={styles.basketEmpty}>Кошик пустий :(</h5>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li className={styles.liComponent} key={item.id}>
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className={styles.Link}
              >
                <img src={item.img} alt={item.title} className={styles.img} />
              </Link>
              <div className={styles.PriceAndTitle}>
                <h5 className={styles.itemTitle}>{item.title}</h5>
                <div className={styles.but}>
                  <h5 className={styles.itemPrice}>{item.price} $</h5>
                  <div onClick={() => RemoveFromCart(item.id)}>
                    <p className={styles.button}>Видалити</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownBox;
