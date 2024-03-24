import React from 'react';
import emailIcon from '../../../assets/contact/emailIcon.png';
import linkedinIcon from '../../../assets/contact/linkedinIcon.png';
import githubIcon from '../../../assets/contact/githubIcon.png';
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel Free To Reach Out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email" />
          <a href='mailto:Myemail@gmail.com'>MyGmail</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn" />
          <a href='https://www.linkedin.com/myname'>Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub" />
          <a href='mailto:Myemail@gmail.com'>GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
