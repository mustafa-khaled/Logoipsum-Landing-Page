import styles from "./services.module.css";
import photo from "../../assets/servecess5.png";

const SeventhSection = () => {
  return (
    <div className={`${styles.seven} container`}>
      <div className={styles.seven_text}>
        <h2>I Don’t Care How It Works. I’m Ready To Go.</h2>
        <p>
          Excellent! I love the enthusiasm. I am here for you and I can’t wait
          to simplify your life. Let’s get you on the calendar and we will hop
          straight to the decluttering.
        </p>
        <button className="btn">Book</button>
      </div>
      <img src={photo} alt="seven" />
    </div>
  );
};

export default SeventhSection;
