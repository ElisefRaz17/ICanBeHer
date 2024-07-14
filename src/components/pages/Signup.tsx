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