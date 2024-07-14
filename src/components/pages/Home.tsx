// import React, { useState, useEffect } from "react";
// import Hero from "../Hero";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../database/firebaseConfig";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import { Button } from "@mui/material";

// function Home() {
//   // const navigate = useNavigate();
//   // const handleLogout = () => {
//   //   signOut(auth)
//   //     .then(() => {
//   //       // Sign-out successful.
//   //       navigate("/");
//   //       console.log("Signed out successfully");
//   //     })
//   //     .catch((error) => {
//   //       // An error happened.
//   //     });
//   // };
//   // useEffect(() => {
//   //   onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       // User is signed in, see docs for a list of available properties
//   //       // https://firebase.google.com/docs/reference/js/firebase.User
//   //       const uid = user.uid;
//   //       // ...
//   //       console.log("uid", uid);
//   //     } else {
//   //       // User is signed out
//   //       // ...
//   //       console.log("user is logged out");
//   //     }
//   //   });
//   // }, []);
//   return (
//     <>
//       {/* <nav>
//         <div>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </nav> */}
//       <Hero />
//     </>
//   );
// }

// export default Home;
