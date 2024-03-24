import React from 'react'
import styles from './About.module.css'
import about from '../../../assets/about/aboutImage.png'
import cursor from '../../../assets/about/cursorIcon.png'
import server from '../../../assets/about/serverIcon.png'
import UI from '../../../assets/about/uiIcon.png'


const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img className={styles.aboutImg}  src={about} alt='About-me'></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img  src={cursor}></img>
                <div className={styles.aboutItemText}>
                    <h3>
                        Frontend-Developer
                    </h3>
                    <p>I develop responsive and optimized website in a single go</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={server}></img>
                <div className={styles.aboutItemText}>
                    <h3>
                        Backend-Developer
                    </h3>
                    <p>I develop backedn using multiple API calls as well as not</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={UI}></img>
                <div className={styles.aboutItemText}>
                    <h3>
                        UI-Designer
                    </h3>
                    <p>I a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dicta. </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About