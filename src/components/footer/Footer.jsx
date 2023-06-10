import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <p>
          <a href="mailto:mustafakhaledinfo@gmail.com?subject=Hello%20from%20website&body=I%20would%20like%20to%20get%20in%20touch%20with%20you.">
            Email: mustafakhaledinfo@gmail.com
          </a>
        </p>

        <p>Phone : +20 1151747091</p>
        <p>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
