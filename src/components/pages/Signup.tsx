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
import { db } from "../../database/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
const Signup = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

//  const writeUserData = (uid:string,interests:string,github:string,linkedin:string, education:string, job:string) => {

//  }
 const handleRegister =  async (email:string,password:string, firstName:string,lastName:string) => {
  const auth = getAuth();
  const fullName = firstName + "" + lastName;
  createUserWithEmailAndPassword(auth, email, password)
  .then(({user})=>{
    // navigate("/");
    console.log(user);
    user.getIdToken().then(async (token) => {
      // dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: token,
        });
     
        // let id = user.uid;
        // let dbRef = collection(db,`users/details`);
        // await setDoc(doc(dbRef,user.uid),{
        //   name: fullName,
        //   _password:password
        // })
        // await setDoc(doc(db, dbRef,id),
        // {})

        
        
        
      // );
      // navigate("/");
    });
    navigate("/sign-in");
    console.log('You are back from registeration page')
  }).catch(()=> alert("Incorrect Data Entered!"))
 }

  return (
    
    <Form handleRegister={handleRegister}/>
  );
};

export default Signup;