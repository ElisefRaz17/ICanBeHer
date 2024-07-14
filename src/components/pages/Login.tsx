import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../styling/loginform.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
      <h3 className={styles.header}>Log In</h3>
        <div className="mb-3" style={{display:'flex', gap:'1rem', flexDirection:"column"}}>
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3" style={{display:'flex', gap:'1rem', flexDirection:"column"}}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={onLogin}
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#9CB2FF" }}
          >
            Login
          </button>
        </div>
      </form>

      <p className="text-sm text-right">
        No account yet? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
