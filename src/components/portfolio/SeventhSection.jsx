import styles from "./portfolio.module.css";
import Gallary from "../galary/Gallary";

const SeventhSection = () => {
  return (
    <div className={`${styles.seven} container`}>
      <h2>Simple On Social</h2>
      <Gallary />
    </div>
  );
};

export default SeventhSection;
