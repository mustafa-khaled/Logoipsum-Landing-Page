import aboutImage from "../../assets/home.png";
import styles from "./about.module.css";

const AboutHome = () => {
  return (
    <div className={`${styles.home} container`}>
      <div>
        <img src={aboutImage} alt="Home" />
      </div>
      <div className={styles.text}>
        <h1>“Simplicity is the ultimate</h1>
        <h1> sophistication.”</h1>
      </div>
    </div>
  );
};

export default AboutHome;
