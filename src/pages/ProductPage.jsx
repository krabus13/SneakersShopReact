import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import Navbar from "../components/Navbar/Navbar";
import MyButton from "../components/MyButton/MyButton";
import styles from "./ProductPage.module.css";
import img1 from "../images/15.webp";
import img2 from "../images/10.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import img5 from "../images/5.webp";
import img6 from "../images/13.webp";
import img7 from "../images/7.webp";
import img8 from "../images/8.webp";
import img9 from "../images/9.webp";
import img10 from "../images/11.webp";
import img11 from "../images/12.webp";
import img12 from "../images/16.webp";
import img14 from "../images/14.webp";

const ProductPage = ({ handleRemoveFromCart }) => {
  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(CartContext);
  const products = [
    { id: 1, title: "Nike Wella", price: 1200, img: img1 },
    {
      id: 2,
      title: "Nike Gassaniga",
      price: 649,
      prevPrice: 999,
      img: img2,
    },
    { id: 3, title: "Nike Tallin", price: 999, prevPrice: 1499, img: img3 },
    { id: 4, title: "Under Armor Fix", price: 799, img: img4 },
    { id: 5, title: "Nike Gamma", price: 820, img: img5 },
    { id: 6, title: "Nike Zebra", price: 999, prevPrice: 2200, img: img6 },
    { id: 7, title: "Champion Moon", price: 2100, img: img7 },
    { id: 8, title: "Nike Sport", price: 1500, img: img8 },
    {
      id: 9,
      title: "New Balance Cuba",
      price: 899,
      prevPrice: 1499,
      img: img9,
    },
    { id: 10, title: "Nike Caraba ", price: 499, prevPrice: 750, img: img10 },
    { id: 11, title: "Nike Tyagi", price: 2399, img: img2 },
    { id: 12, title: "Nike Blue", price: 849, prevPrice: 1199, img: img14 },
    { id: 13, title: "Nike Default", price: 500, img: img12 },
    {
      id: 14,
      title: "Adidas Hiramato",
      price: 920,
      prevPrice: 1111,
      img: img11,
    },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <Link to={"/"}>
        <button className={styles.backButton}>На головну </button>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={styles.start}>
          <div className={styles.form2}>
            <div className={styles.form2Title}>{product.title}</div>
            <div className={styles.selectSize}>
              Розмір:
              <a href="#">38</a>
              <a href="#">39</a>
              <a href="#">40</a>
              <a href="#">41</a>
              <a href="#">42</a>
            </div>
            <Link to={"/pay"}>
              <MyButton>
                <p style={{ color: "#6495ed" }}>Купити</p>
              </MyButton>
            </Link>
          </div>
          <div className={styles.mainform}>
            <div>
              <img src={product.img} className={styles.img} alt="img" />
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.form}>
                <h4
                  className={styles.price}
                  style={{
                    marginRight: product.prevPrice ? "0" : "14px",
                  }}
                >
                  {product.price} $
                </h4>
                <h5 className={styles.prevPrice}>{product.prevPrice}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
