import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { auth, app } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styles from "../styling/navbar.module.css";
import { Link } from "react-router-dom";
const Authentication = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [isActive, setIsActive] = React.useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
      })
      .catch((err) => console.log("error"));
  };
  useEffect(() => {
    const listenAuth = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setAuthenticatedUser(user);
        } else {
          setAuthenticatedUser(null);
        }
        return () => {
          listenAuth();
        };
      },
      []
    );
  });
  return (
    <>
      {authenticatedUser === null ? (
        <>
          <li onClick={removeActive}>
            <Link to="/sign-in" className={`${styles.navLink}`}>
              Login
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/register" className={`${styles.navLink}`}>
              Regiser
            </Link>
          </li>
        </>
      ) : (
        <>
          <li onClick={removeActive}>
            <Link to="/" className={`${styles.navLink}`} onClick={userSignOut}>
              Sign Out
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default Authentication;
