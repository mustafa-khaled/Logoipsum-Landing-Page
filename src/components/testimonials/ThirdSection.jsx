import styles from "./testimonials.module.css";
import photo from "../../assets/tes2.png";

const ThirdSection = () => {
  return (
    <div className={`${styles.third} container`}>
      <div>
        <h2>“Tammy is amazing!</h2>
        <p>
          Not only is she great at what she does but she is also kind,
          considerate and listens to her clients vision and puts that together
          with her own style and knowledge of what the client needs to live a
          stress free organized life! Tammy has done two homes of mine now from
          top to bottom and it seems there is always a project laying around
          that I need Tammy’s help with. From the garage to photos she helps to
          make your life simple and easy and she is really fun to be around as
          well. Tammy will be part of every home I live in, as an organizer and
          as part of the family. My grandson Kaleb always asks if Tammy can come
          organize his room for him so he can be clean and organized! I love it!
          Thanks for making my life organized, love ya girl!”—Leah V.
        </p>
        <button className="btn">Closet Reveal</button>
      </div>
      <img src={photo} alt="Photo" />
    </div>
  );
};

export default ThirdSection;
