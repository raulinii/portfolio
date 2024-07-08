
import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/bulbasaur.png")} 
            alt="Me sitting with a laptop" 
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src= {getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                        I have experience building responsive and optimized websites. With a keen eye for detail and a passion for creating user-friendly interfaces, I strive to deliver high-quality web experiences.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src= {getImageUrl("about/serverIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                        I have experience working with various programming languages commonly used in the tech industry. Though I haven't extensively worked with APIs, I am proficient in developing fast and optimized back-end systems. I'm committed to expanding my knowledge and skills in backend development to enhance my full-stack capabilities.
                        </p>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                    <img src= {getImageUrl("about/uiIcon.png")} alt="UI icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and have created design systems as well
                            </p>
                    </div>
            </li>
            </ul>
        </div>
    </section>
  );
};