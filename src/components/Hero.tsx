import React from 'react'
import styles from "../styling/hero.module.css";
import HeroImage from "../assets/HeroImage.png";
function Hero() {
  return (
    <div className={styles.background}>
        <div className={styles.content}>
            <img src={HeroImage} alt="hero image"/>
            <h4>What role in tech do you want to pursue or currently have?</h4>
        </div>
    </div>
  )
}

export default Hero