import styles from "./services.module.css";

const FourthSection = () => {
  return (
    <div className={styles.fourth}>
      <div className={`${styles.fourth_content} container`}>
        <div className={styles.one}>
          <h2>Virtual Organizing</h2>
          <div>
            <p>
              Behold the power of the internet! It allows us to connect
              virtually so I can help you organize from anywhere in the country.
              I invite you to bring on any room, pile, or project that is
              weighing on you. Let’s start off with a virtual consultation and
              we can devise a custom plan for you!
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
