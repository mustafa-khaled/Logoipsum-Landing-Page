import styles from "./portfolio.module.css";
import photo from "../../assets/pro8.png";

const FivethSection = () => {
  return (
    <div className={`${styles.five} container`}>
      <img src={photo} alt="photo" />
      <div>
        <h2>How about some testimonials:</h2>
        <p>
          “I’m looking forward to more projects with Tammy and I have and I will
          recommend her without hesitation—” .
        </p>
        <button className="btn">BOOK</button>
      </div>
    </div>
  );
};

export default FivethSection;
