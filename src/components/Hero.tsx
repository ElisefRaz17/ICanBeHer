import React from 'react'
import styles from "../styling/hero.module.css";
import HeroImage from "../assets/HeroBackground.png";
function Hero() {
  return (
    <div className={styles.background} style={{backgroundImage: `url(${HeroImage})`}}>
    </div>
  )
}

export default Hero