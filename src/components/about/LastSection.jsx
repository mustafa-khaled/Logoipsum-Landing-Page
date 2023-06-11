import Gallary from "../galary/Gallary";
import styles from "./about.module.css";

const LastSection = () => {
  return (
    <div className={`${styles.last_section} container`}>
      <div className={styles.head_image}></div>
      <Gallary />
      <p>
        Show Off Your Organizing Style By Tagging #Lovesimple On Instagram For A
        change To win 10% Off!
      </p>
    </div>
  );
};

export default LastSection;
