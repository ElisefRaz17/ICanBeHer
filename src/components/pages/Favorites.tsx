import React, { useEffect, useState } from "react";
import styles from "../../styling/profile.module.css";
import { Avatar, Button, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import { auth, db } from "../../database/firebaseConfig";
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { useGlobalContext } from "../../database/UserContext";

function Favorites() {
  const user = auth.currentUser;
  const {userId} = useGlobalContext();
  const location = useLocation();
  
  const id = user?.uid;
 
  
  // .((querySnapshot) => {
  //   console.log(querySnapshot.docs.map(d => ({id: d.id, ...d.data()})))
  // })
  console.log(user);
  console.log(id);
  console.log(doc(db, "users","favoritesCollection"));
  const [userFavorites, setUserFavorites] = useState({});
  const [selectedFav, setSelectedFav] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    onSnapshot(query(collectionGroup(db,"favoritesCollection")),(snapshot:QuerySnapshot)=>{
      console.log(snapshot.docs.map(d => ({id: d.id, ...d.data()})))
    })
    // onSnapshot(query(collection(db, "users")), (snapshot: QuerySnapshot) => {
    //   snapshot.docs.map((doc) => {
    //     onSnapshot(
    //       collection(db, "favoritesCollection"),
    //       (snapshot: QuerySnapshot) => {
    //         setUserFavorites(
    //           snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             item: doc.data(),
    //           }))
    //         );
    //       }
    //     );
    //   });
    // });
  }, []);
  console.log(userFavorites);
  // useEffect(() => {
  //   const q = doc(db,'users',user?.getIdToken,'favoritesCollection'); // Replace "your_collection_name" with the actual name of your collection
  //   onSnapshot(q, (snapshot) => {
  //   setUserFavorites(
  //       snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() }))
  //     );
  //   });
  // }, [selectedFav]);
  // console.log(userFavorites);
  // interface Favorite {
  //   id: string;
  //   // Add other properties of the favorite object here
  // }
  // fav: Favorite, id:string
  // const selectFav = async ()=> {
  //   setSelectedFav(fav);
  //   await getDoc(
  //     doc(db, `users/${user}/favoritesCollection`, fav.id)
  //   );
  //   await collectionGroup('favoritesCollection',db).get()
  // }
  // const selectFav = async() => {

  // }
  // const tRef = getDoc('uid');

  return (
    <div className={styles.container}>
      <button></button>
    </div>
  );
}

export default Favorites;
