import styles from "./portfolio.module.css";
import photo1 from "../../assets/pre6.png";
import photo2 from "../../assets/pre7.png";

const FourthSection = () => {
  return (
    <div className={`${styles.fourth} container`}>
      <p>See Simple Organization in the Tag Hardware Catalog…</p>
      <div>
        <img src={photo1} alt="photo" />
        <img src={photo2} alt="photo" />
      </div>
    </div>
  );
};

export default FourthSection;
