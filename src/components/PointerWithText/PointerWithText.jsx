import pointers from "../../images/strelka.png";
import styles from "./PointerWithText.module.css";
const PointerWithText = ({ children }) => {
  return (
    <div>
      <div className={styles.PWTComponent}>
        <img src={pointers} className={styles.pointer} alt="img" />
        <h2 className={styles.text}>{children}</h2>
      </div>
    </div>
  );
};
export default PointerWithText;
