import React from 'react'
import Firebase from "firebase/app";
import { db } from '../../database/firebaseConfig';
import {getDatabase, ref, onValue} from "firebase/database";
import {useFormik} from "formik";
function Signup() {
  const formik = useFormik({
    initialValues:{ 
      firstName:'', 
      lastName:'',
      username:'', 
      email:'',
      password:'',
      github:'',
      linkedin:'',
      education:'',
      job:'',
      interests:[]
    }, 
    onSubmit: values =>{
      const {firstName, username,email} = values;
    },
  });
  return (
    <div>Signup</div>
  )
}

export default Signup