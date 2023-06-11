import styles from "./portfolio.module.css";
import photo from "../../assets/pro2.png";

const SecondSection = () => {
  return (
    <div className={`${styles.second} container`}>
      <img src={photo} alt="Photo" />
      <div className={styles.second_text}>
        <p>Currently Trending:</p>
        <h2>The gorgeous closet that I organized and styled for Jen Adams</h2>
        <button className="btn">Closet Reveal</button>
      </div>
    </div>
  );
};

export default SecondSection;
