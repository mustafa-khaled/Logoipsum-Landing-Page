import styles from "./services.module.css";
import photo from "../../assets/servises3.png";

const FivethSection = () => {
  return (
    <div className={`${styles.fiveth} container`}>
      <div className={styles.five_text}>
        <h2>The Box</h2>
        <p>
          As a professional organizer, I rely on systems to get the job done
          efficiently. The best system I have created requires thinking INSIDE
          the box. No matter the space, room, collection, etc—I can
          compartmentalize it in a series of boxes to create a fool-proof system
          for you and your family.
          <br /> Box Systems: school memory box and family box (including a mail
          drop, file and shred file). Feel free to inquire within!
        </p>
      </div>
      <div className={styles.five_image}>
        <img src={photo} alt="five_image" />
        <div>
          <h2>School Memory Box</h2>
          <p>Click To Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default FivethSection;
