import styles from "./services.module.css";
import photo from "../../assets/serceses.png";

const ServicesHome = () => {
  return (
    <div className={`${styles.home} container`}>
      <img src={photo} alt="Services Home" />
      <div className={styles.text}>
        <h1>What Are Your Services ?</h1>
        <p>
          There is no one-size-fits-all prognosis that I can give you—But the
          following list is what I typically tackle. My services are offered at
          $100-150 per hour.
        </p>
        <div className={styles.btn}>
          <button className="btn">Book</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
