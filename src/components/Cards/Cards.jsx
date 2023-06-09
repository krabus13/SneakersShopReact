import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import styles from "./Cards.module.css";
import img3 from "../../images/3.webp";
import img4 from "../../images/4.webp";
import img5 from "../../images/5.webp";
import img6 from "../../images/13.webp";
import img7 from "../../images/7.webp";
import img8 from "../../images/8.webp";
import img9 from "../../images/9.webp";
import img10 from "../../images/11.webp";
import img11 from "../../images/12.webp";
import img12 from "../../images/16.webp";
import img13 from "../../images/14.webp";
import img2 from "../../images/2.webp";
import img14 from "../../images/14.webp";
import { Link } from "react-router-dom";

const Cards = ({ handleAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const cards = [
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
    {
      id: 10,
      title: "Nike Caraba",
      price: 499,
      prevPrice: 750,
      img: img10,
    },
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

  const sortedCards = cards
    .slice()
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <div className={styles.sortSelect}>
        <div>
          <p style={{ padding: "6px" }}>Сортування</p>
          <input
            className={styles.input}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="По назві"
          />
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.select}
        >
          <option value="asc">Зі зростанням</option>
          <option value="desc">По спаданню</option>
        </select>
      </div>
      <div className={styles.start}>
        {sortedCards.length === 0 ? (
          <p className={styles.pComponent}>Не знайдено :(</p>
        ) : (
          sortedCards.map((item) => (
            <div key={item.id} className={styles.main}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.img}
                  className={styles.CardImg}
                  alt={item.title}
                />
              </Link>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.form}>
                  <h4
                    className={styles.price}
                    style={{ marginRight: item.prevPrice ? "" : "12px" }}
                  >
                    {item.price} $
                  </h4>
                  <h5 className={styles.prevPrice}>{item.prevPrice}</h5>
                  <div className={styles.button}>
                    <MyButton onClick={(e) => handleAddToCart(e, item)}>
                      To cart
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
