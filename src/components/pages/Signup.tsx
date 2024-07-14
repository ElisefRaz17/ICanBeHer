import React, { MouseEventHandler, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../database/firebaseConfig";
import styles from "../../styling/signupform.module.css";
import { useAuthValue } from "../../database/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGitHub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [education, setEducation] = useState("");
  const [job, setJob] = useState("");
  const [interests, setInterest] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.header}>Sign Up</h3>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className="mb-3">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="First Name"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="Last Name"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email-address">Email address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#9CB2FF" }}
              >
                Create Account
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </div>
          <div className={styles.column}>
            <div className="mb-3">
              <label>Github(optional)</label>
              <input
                type="url"
                className="form-control"
                placeholder="Github Link"
                name="Github"
                value={github}
              />
            </div>
            <div className="mb-3">
              <label>LinkedIn(optional)</label>
              <input
                type="url"
                className="form-control"
                placeholder="LinkedIn Link"
                name="LinkedIn"
                value={linkedin}
              />
            </div>
            <div className="mb-3">
              <label>Education(optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: University of Southern California"
                name="Education"
                value={education}
              />
            </div>
            <div className="mb-3">
              <label>Job(optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Software Engineer at Microsoft"
                name="Job"
                value={job}
              />
            </div>
            <div className="mb-3">
              <label>Interests</label>
              <textarea
                className="form-control"
                placeholder="Interests"
                name="Interests"
                value={interests}
              />
            </div>
          </div>
        </div>

        {/* <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#9CB2FF" }}
          >
            Create Account
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
      </form>
    </div>
  );
};

export default Signup;

// import React, {useState} from "react";
// import Firebase from "firebase/app";
// import { db } from "../../database/firebaseConfig";
// import { getDatabase, ref, onValue } from "firebase/database";
// import {useAuthValue} from '../../database/AuthContext'
// import { auth } from "../../database/firebaseConfig";
// import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
// import { useFormik } from "formik";
// import { useNavigate, Link } from "react-router-dom";
// import styles from "../../styling/signupform.module.css";

// function Signup() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [error, setError] = useState('')
//   const navigate = useNavigate()
//   const {setTimeActive} = useAuthValue()
//   const validatePassword = () => {
//     let isValid = true
//     if (password !== '' && confirmPassword !== ''){
//       if (password !== confirmPassword) {
//         isValid = false
//         setError('Passwords does not match')
//       }
//     }
//     return isValid
//   }
//   const register = e => {
//     e.preventDefault()
//     setError('')
//     if(validatePassword()) {
//       // Create a new user with email and password using firebase
//         createUserWithEmailAndPassword(auth, email, password)
//         .then(() => {
//           sendEmailVerification(auth.currentUser:User)
//           .then(() => {
//             setTimeActive(true)
//             navigate('/verify-email')
//           }).catch((err) => alert(err.message))
//         })
//         .catch(err => setError(err.message))
//     }
//     setEmail('')
//     setPassword('')
//     setConfirmPassword('')
//   }
//   return (
<></>;
// <form onSubmit={formik.handleSubmit}>
//   <label htmlFor="firstName">First Name</label>
//   <input
//     id="firstName"
//     name="firstName"
//     type="text"
//     required
//     onChange={formik.handleChange}
//     value={formik.values.firstName}
//   />

//   <label htmlFor="lastName">Last Name</label>
//   <input
//     id="lastName"
//     name="lastName"
//     type="text"
//     required
//     onChange={formik.handleChange}
//     value={formik.values.lastName}
//   />

//   <label htmlFor="email">Email Address</label>
//   <input
//     id="email"
//     name="email"
//     type="email"
//     required
//     onChange={formik.handleChange}
//     value={formik.values.email}
//   />
//   <label>Password</label>
//   <input
//     id="password"
//     name="password"
//     type="password"
//     required
//     onChange={formik.handleChange}
//     value={formik.values.password}
//   />
//   <label>Github</label>
//   <input
//     id="github"
//     name="github"
//     type="url"
//     onChange={formik.handleChange}
//     value={formik.values.github}
//   />
//   <label>LinkedIn</label>
//   <input
//     id="linkedin"
//     name="linkedin"
//     type="url"
//     onChange={formik.handleChange}
//     value={formik.values.linkedin}
//   />
//   <label>Work/Occupation</label>
//   <input
//     id="job"
//     name="job"
//     type="text"
//     onChange={formik.handleChange}
//     value={formik.values.job}
//   />
//   <label>Areas of Interest</label>
//   <input
//     id="interest"
//     name="interest"
//     type="text"
//     onChange={formik.handleChange}
//     value={formik.values.interests}
//   />
//   <label>Education</label>
//   <input
//     id="education"
//     name="education"
//     type="text"
//     onChange={formik.handleChange}
//     value={formik.values.education}
//   />

//   <button type="submit">Submit</button>
// </form>
//   );
// }

// export default Signup;
