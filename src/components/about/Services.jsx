import styles from "./about.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className="container">
        <h1>Services</h1>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3>Moving In</h3>
            <p>
              You know: the thing that nobody likes doing. The process that
              starts off with order and then ends with throwing everything in a
              “junk” drawer. Schedule me before your next move and I can have
              you unpacked and ready to work in your home office or ready to
              cook in you kitchen on the first night!
            </p>
          </div>
          <div className={styles.box}>
            <h3>Kitchen/Pantry</h3>
            <p>
              Imagine all of your spices in simple, modern, and uniform
              containers all ready for you to live out your Michelin rated
              cooking experience. Imagine a clearly labeled and stocked pantry.
              Book now and you don’t have to imagine it anymore.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Garage</h3>
            <p>
              The garage should not be the resting place for the items you just
              no longer want to address. It is a place for your vehicle,
              seasonal items, and your hobbies! And sometimes spiders.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Refresh</h3>
            <p>
              This service is ideal for former clients who just need a simple
              refresh in their space. Think of it like an organizational reset
              button! Some clients like to Refresh before school starts or after
              the holidays. Who couldn’t use a little reset?
            </p>
          </div>
          <div className={styles.box}>
            <h3>Kids/Playrooms</h3>
            <p>
              Kids come with their own subset of unpredictability. I am here to
              help eliminate one variable: where do their clothes, books, and
              toys go. Unfortunately, the rest is up to you.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Try Me</h3>
            <p>
              Haven’t found your exact decluttering puzzle? Oh, you are in for a
              treat! Click to learn more about all the ways I can simplify your
              life.
            </p>
          </div>
        </div>
        <div className={styles.btn}>
          <button className="btn">Simplify</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
