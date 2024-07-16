import React from "react";
import womenInTechnology from "../data";
import { useLocation, useNavigate } from "react-router-dom";
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

function Dashboard(props: any) {
  const location = useLocation();
  const selected = location.state.category;
  const [liked, setLiked] = React.useState(false);
  const [favs,setFavs] = React.useState({});
  const  [list, setList] = React.useState(womenInTechnology);
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
  const designItems = list.filter(
    (item) => item.category === "Design"
  );
  const cyberSecurityItems = list.filter(
    (item) => item.category === "Cybersecurity"
  );
  const entrepeneurshipItems = list.filter(
    (item) => item.category === "Entrepeneurship"
  );
  const handleChange = (id:string) => {
    const newList = list.map((item)=>{
        if(item.id === id){
            const updateItem = {
                ...item,
                liked:!item.liked
            };
            return updateItem;
        }
        return item;
    })
   console.log(id);
   setList(newList);
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
            <Card sx={{ width: "300px", height: "350px" }}>
              <CardContent>
                <Typography variant="body2" color="text.seconday">
                  <p id={item.id}>
                    {item.name}

                    <IconButton onClick={()=> handleChange(item.id)} type="button">
                      {item.liked ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderOutlinedIcon />
                      )}
                    </IconButton>
                  </p>
                  <img
                    src={item.image_path}
                    key={item.name}
                    alt="engineering image"
                  />
                  <p>
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
