import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nirmal Aditya</h1>
        <p className={styles.description}>
        I'm passionate about building user-friendly interfaces and excited to learn front-end development. <br></br> <br></br>Reach out if you'd like to learn more!
        </p>
        <a href="mailto:nirmaladitya.personal@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};