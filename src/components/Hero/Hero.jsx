import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Raul</h1>
        <p className={styles.description}>
            I'm currently a student at UCSD studying Computer Science. I have a passion for programming and solving complex problems using current technologies. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:raul.02.chacon@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/pikachu2.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
}
