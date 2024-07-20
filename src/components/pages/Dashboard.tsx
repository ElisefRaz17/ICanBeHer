import React, { useEffect } from "react";
import womenInTechnology from "../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "../../styling/dashboard.module.css";
import { auth, db } from "../../database/firebaseConfig";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";

// Import the 'firestore' module from 'firebase/app'

// ...

// ...

function Dashboard(props: any) {
  const location = useLocation();
  const [favorites, setFavorites] = React.useState<any[]>([]);
  const history = useNavigate();
  // var favorites = await addDoc(collection(db,"favoritesCollection"),{favorite:})
  const selected = location.state.category;
  const user = auth.currentUser?.uid;
  console.log(user);
  // const user = auth.currentUser?.uid;
  // var favorites = firestore.collection("favoritesCollection");
  // Access the 'collection' property on the 'firestore' object]
  // const doc = async function(){
  //   const docRef = await addDoc(collection(db,"favoritesCollection"),{
  //     id:"",
  //     name:""
  //   })
  // }
  // const addLike = async(id:string) => {
  //   // try{
  //   //   const womenInTechnology = list.filter((person)=>person.id === id);
  //   //   const data = {...womenInTechnology[0],createdAt: Timestamp.now()};
  //   //   await setDoc(
  //   //     doc(db, `users/${user?.uid}/favoritesCollection`,id)
  //   //   )
  //   // }
  // }

  // const addFav =(props:any)=>{

  // }
  const [list, setList] = React.useState(womenInTechnology);
  //   const selected = location.state.category;
  const engineeringItems = list.filter(
    (item) => item.category === "Engineering"
  );
  const dataScienceItems = list.filter(
    (item) => item.category === "Data Science"
  );
  const softwareEngineeringItems = list.filter(
    (item) => item.category === "Software Engineering"
  );
  const designItems = list.filter((item) => item.category === "Design");
  const cyberSecurityItems = list.filter(
    (item) => item.category === "Cybersecurity"
  );
  const entrepeneurshipItems = list.filter(
    (item) => item.category === "Entrepeneurship"
  );
  // useEffect(() => {
  //   setFavorites(womenInTechnology);
  // }, []);
  // useEffect(() => {
  //   console.log(favorites);
  // }, [favorites]);
  const handleChange = async (id: string) => {
    setFavorites([...favorites, womenInTechnology.find(item => item.id === id)]);
    const newList = list.map((item) => {
      if (item.id === id) {
        const updateItem = {
          ...item,
          liked: !item.liked,
        };
        return updateItem;
      }
     
      return item;
    });
    setList(newList);
    await setDoc(
      doc(db, `users/${user}/favoritesCollection`, id),
      {favorites}
    );
    
    // setFavorites([...newList,])
    // if (!favorites.includes(id)) setFavorites(newList);
    // console.log(id);
    //  console.log(id);
    // setList(newList);
    // const newFavorites = favorites.map((item) => {
    //   if (item.id === id) {
    //     const theitem = { ...item, liked: !item.liked };
    //     return theitem;
    //   };
    //  return item;
    // });
    // const data = newList.find((item) => item.id === id);
    // setFavorites(newList);
    console.log(favorites);
  };
  //   console.log(selected);
  // useEffect(()=>{
  //     setFavs(...newList)
  // })
  return (
    <>
      {selected === "Engineering" && (
        <div className={styles["responsive-two-column-grid"]}>
          {engineeringItems.map((item) => (
            <Card sx={{ width: "300px", height: "450px" }}>
              <CardContent>
                <Typography variant="body2" color="text.seconday">
                  <p id={item.id}>
                    {item.name}

                    <IconButton
                      onClick={() => handleChange(item.id)}
                      type="button"
                    >
                      {item.liked  ? (
                        <FavoriteIcon sx={{ color: "red" }} />
                      ) : (
                        <FavoriteBorderOutlinedIcon />
                      )}
                    </IconButton>
                  </p>
                  <img
                    src={item.image_path}
                    key={item.name}
                    alt="engineering image"
                    id={item.id}
                  />
                  <p key={item.id}>
                    Learn more about {item.name} <a href={item.website}>here</a>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default Dashboard;

