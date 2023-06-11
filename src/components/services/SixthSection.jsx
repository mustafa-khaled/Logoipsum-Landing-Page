import styles from "./services.module.css";

const SixthSection = () => {
  return (
    <div className={styles.six}>
      <div className={`${styles.six_section} container`}>
        <h1>Ok, But How Does It Work?</h1>
        <p>I get it; it’s overwhelming already—let me break it down for you.</p>
        <button className="btn">PROCESS</button>
      </div>
    </div>
  );
};

export default SixthSection;
