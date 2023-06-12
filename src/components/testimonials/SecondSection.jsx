import styles from "./testimonials.module.css";

const SecondSection = () => {
  return (
    <div className={styles.second}>
      <div className={`${styles.content} container`}>
        <h1>Client love. </h1>
        <p>
          “We are so thrilled to have found Tammy at Simple Organization! A year
          after our move, we decided to tackle our 2-car garage and separate
          1-car garage last because we were overwhelmed and didn't know how to
          organize them efficiently. Our garages became labyrinths of boxes,
          tools, holiday decorations, tons of storage bins and miscellaneous
          items relating to cleaning, gardening, recreation and home improvement
          and were eye-sores! Before finding Simple Organization, we discovered,
          to our dismay, that some other organizers will only provide
          recommendations and links to products but will not do the work for us.
          We knew that if we were left on our own, we wouldn't know how to start
          and nothing would get done. Tammy at Simple Organization came highly
          recommended to us, and she was so pleasant to work with and highly
          efficient. Tammy helped us sort through what to keep, give and throw
          away and even hauled away all the discards for us. Then, she laid out
          a plan which included hook systems on the walls, garage overhead
          racks, shelving, more storage boxes and garage cabinet storage unit.
          Simple Organization did all the installations and assembly work, and
          Tammy even put labels on all of our storage bins. We were simply
          "WOW-ed" by how great and spacious our garages looked! Now everything
          is easily found and accessible. We will not hesitate to recommend
          Simple Organization to our friends and family and will definitely hire
          them for future work in our home.”
        </p>
        {/* ccc */}
        <div className={styles.text}>
          <div className={styles.one}>
            <h2>— The Cochran Family</h2>
            <p>
              “I met Tammy a few years ago when I was designing a closet for a
              client. Tammy was happily organizing the client’s pantry. I knew
              the moment I met her that she was one of those people who is not
              only creative and linear but has a huge heart. She is truly one of
              those people that everyone wants to be besties with. Recently I
              added a home office and asked her to organize it. Not only did she
              find a place for everything, she staged the entire room in the
              color that I was looking for. I couldn’t be happier. Tammy is
              methodical when it comes to organizing, and she has an added eye
              for design. Perfect combination! Can’t wait for my next project.”
            </p>
            <h2>— Dana N.</h2>
            <p>
              “I loved everything you touched and bought for my home. You made
              everything feel and look perfect. And most importantly, your
              energy is always a breath of fresh air to be around! I love you to
              pieces!”
            </p>
          </div>
          <div className={styles.two}>
            <p>
              “Tammy and her organizational magic have transformed my life, one
              area at a time! I originally hired Tammy to organize my closet and
              bathroom. She did such a beautiful job that now I want to spend my
              time hanging out in these areas, they are my little oasis and
              offer a sense of order and calm. I love how everything is labeled
              as it helps me to stay organized (which is not my strong suit).
              Months later and my closet and bathroom are still organized thanks
              to everything having a proper home. Next Tammy organized our
              pantry and it turned out gorgeous. Again, everything has its own
              home and is clearly labeled. Even my 6 year old daughter can
              easily tell where things belong, and our pantry has stayed
              organized. I ordered school/memory boxes from Tammy for my 2 kids
              and they are so cute! They definitely make keeping special awards,
              report cards, etc. easy to store and find as everything is labeled
              by grade level. I can not recommend Tammy enough! She is so fun to
              work with, responds quickly and allows clients to be as involved
              as they would like. Tammy has organized some beautiful spaces for
              us, and the best part is that we have been able to keep them
              organized.”
            </p>
            <h2>— Jasmine M.</h2>
          </div>
        </div>
        {/* ccc */}
      </div>
    </div>
  );
};

export default SecondSection;
