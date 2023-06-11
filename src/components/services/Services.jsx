import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ServicesHome from "./ServicesHome";
import ThirdSection from "./ThirdSection";
import FivethSection from "./FivethSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import Gallary from "../galary/Gallary";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div>
      <ServicesHome />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivethSection />
      <SixthSection />
      <SeventhSection />
      <div className={`${styles.galary_container} container`}>
        <h2>Simple On Social</h2>
        <Gallary />
      </div>
    </div>
  );
};

export default Services;
