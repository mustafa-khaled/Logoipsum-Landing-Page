import styles from "./about.module.css";
import photo from "../../assets/think.png";

const ThirdSection = () => {
  return (
    <div className={`${styles.home} ${styles.third} container `}>
      <div>
        <img src={photo} alt="Home" />
      </div>
      <div className={styles.text}>
        <h1>“think of outside the</h1>
        <h1> box, but organize</h1>
        <h1>inside of it”</h1>
      </div>
    </div>
  );
};

export default ThirdSection;
