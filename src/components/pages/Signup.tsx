import React, { MouseEventHandler, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  getAuth
} from "firebase/auth";
import { setUser } from "../../features/user/UserSlice";
// import { auth } from "../../database/firebaseConfig";
import styles from "../../styling/signupform.module.css";
import { useAuthValue } from "../../database/AuthContext";
import Form from "../Form";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


 const handleRegister = (email:string,password:string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then(({user})=>{
    console.log(user);
    user.getIdToken().then((token) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: token,
        })
      );
    });
    navigate("/");
  }).catch(()=> alert("Incorrect Data Entered!"))
 }

  return (
    <Form handleRegister={handleRegister}/>
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
