import React from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

export default function App() {
  return (
    <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
    </div>
  )
}
