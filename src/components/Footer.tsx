import React from "react";
import styles from "../styling/footer.module.css";
import Logo from "../assets/FooterLogo.png";
function Footer() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="footer-logo" className={styles["footer-logo"]} />
      <p className={styles.copyright}>© 2024 Copyright Elise Frazier </p>
    </div>
  );
}

export default Footer;
