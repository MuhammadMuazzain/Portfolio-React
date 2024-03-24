import React from 'react'
import myImg from '../../../assets/hero/heroImage.png'
import myrealImg from '../../../assets/hero/profile.jpeg'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>I am full stack developer</h1>
            <p className={styles.description} >With over 5 years of experiecne in developing web apps using ract and Nodejs</p>
            <a href='mailto:muhammadmuazzain07@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        {/* <img src={myImg} className={styles.heroImg}></img> */}
        <img src={myrealImg} className={styles.heroImg} ></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        </section>
  )
}

export default Hero