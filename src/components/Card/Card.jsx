import styles from "./Card.module.css";
import MyButton from "../MyButton/MyButton";
import img1 from "../../images/15.webp";
import img2 from "../../images/10.webp";
import { Link } from "react-router-dom";
const Card = ({ handleAddToCart }) => {
  const card = [
    { id: 1, title: "Nike Wella", price: 1200, img: img1 },
    {
      id: 2,
      title: "Nike Gassaniga",
      price: 649,
      prevPrice: 999,
      img: img2,
    },
  ];

  return (
    <div className={styles.start}>
      {card.map((item) => (
        <div key={item.id} className={styles.main}>
          <Link to={`/product/${item.id}`}>
            <img src={item.img} className={styles.CardImg} alt={item.title} />
          </Link>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.form}>
            <h4
              className={styles.price}
              style={{
                marginRight: item.prevPrice ? "0" : "14px",
              }}
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
      ))}
    </div>
  );
};

export default Card;
