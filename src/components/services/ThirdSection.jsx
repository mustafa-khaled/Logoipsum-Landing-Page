import styles from "./services.module.css";
import photo from "../../assets/serveses2.png";

const ThirdSection = () => {
  return (
    <div className={`${styles.third} container`}>
      <div className={styles.image_container}>
        <img src={photo} alt="Third Section" />
        <div>
          <p>Give the gift of time</p>
          <h2>Gift Certificates Available.</h2>
          <button className="btn">Order Here</button>
        </div>
      </div>
      <div className={styles.third_text}>
        <h2>Coaching Calls</h2>
        <p>
          I am so excited to help teach you how to start your organizing
          business. Or already started and need to know all of the details about
          client/business management? I’ve done the homework and found the best
          of the best that I am happy to share with you! - 1 hour zoom $125
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
