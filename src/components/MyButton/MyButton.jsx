import { Children } from "react";
import styles from "./myButton.module.css";

const MyButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <h3 className={styles.butInside}>{children}</h3>
    </button>
  );
};
export default MyButton;
