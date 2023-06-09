import pointers from "../../images/strelka.png";
import styles from "./PointerWithText2.module.css";
const PointerWithText = ({ children }) => {
  return (
    <div>
      <div className={styles.PWTComponent}>
        <h2 className={styles.text}>{children}</h2>
        <img src={pointers} className={styles.pointer} alt="img" />
      </div>
    </div>
  );
};
export default PointerWithText;
