import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div  className={styles.text}>
            <h2>Contact</h2><p>Feel free to reach out!
            </p>
            </div>
            <ul  className={styles.links}>
                <li  className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:raul.02.chacon@email.com">raul.02.chacon@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/raul-chacon-45492a299/">www.linkedin.com/in/raulchacon02</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/raulinii">https://github.com/raulinii</a>
                </li>
            </ul>
    </footer>
  )
}
