import React, { useCallback, useRef } from "react";
import { Button, Card, CardContent, IconButton, SelectChangeEvent, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import womenInTechnology from "../data";
import styles from "../../styling/aspirationoutput.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {
  ShowMore,
  type ShowMoreRef,
  type ShowMoreToggleLinesFn,
} from "@re-dev/react-truncate";
import { KeyboardArrowUp } from "@mui/icons-material";
function AspirationOutput() {
  const location = useLocation();
  const category = location.state.aspiration;
  const [randomNum, setRandomNum] = React.useState(0);
  const [selected, setSelected] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.focus(); /** used to stop rerendering when Like button is clicked */
    setLiked(true);
  }
  
  const ref = useRef<ShowMoreRef>(null);
  const toggleLines: ShowMoreToggleLinesFn = (e) => {
    ref.current?.toggleLines(e);
  };
  const selectedItem = womenInTechnology.find(
    (item) => item.category === category
  );

  // const generateRandomNum = () => {
  //   const randomNum = Math.floor(Math.random() * womenInTechnology.length);
  //   setRandomNum(randomNum);
  //   console.log(randomNum);
  // };
  // womenInTechnology[Math.floor(Math.random() * womenInTechnology.length)];
  const engineeringItems = womenInTechnology.filter(
    (item) => item.category === "Engineering"
  );
  const dataScienceItems = womenInTechnology.filter(
    (item) => item.category === "Data Science"
  );
  const softwareEngineeringItems = womenInTechnology.filter(
    (item) => item.category === "Software Engineering"
  );
  const designItems = womenInTechnology.filter(
    (item) => item.category === "Design"
  );
  const cyberSecurityItems = womenInTechnology.filter(
    (item) => item.category === "Cybersecurity"
  );
  const entrepeneurshipItems = womenInTechnology.filter(
    (item) => item.category === "Entrepeneurship"
  );
  const  [list, setList] = React.useState(womenInTechnology);
  const handleChange = async(id:string) => {
    const newList = list.map((item)=>{
        if(item.id === id){
            const updateItem = {
                ...item,
                liked:!item.liked
            };
            return updateItem;
        }
        console.log(`Current item: ${item.id}`);
        return item;
    })
   console.log(id);
   
   setList(newList);
  //  setRandomNum(Math.floor(Math.random()*(womenInTechnology.length - 0) + 0));
   
  };

  const item = engineeringItems
    .sort(() => Math.random() - Math.random())
    .find(() => true);
  // console.log(selectedItem);
  // console.log(womenInTechnology.length);
  // console.log(category);
  
  return (
    <div className={styles.container}>
      {category === "Engineering" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{category}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{engineeringItems[randomNum].details}</p>
              </ShowMore>
            </div>
            {/* <IconButton >{engineeringItems[randomNum].liked ? <FavoriteIcon sx={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>}</IconButton> */}
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p id={engineeringItems[randomNum].id}>
                  About {engineeringItems[randomNum].name}
                </p>
                <img
                  src={engineeringItems[randomNum].image_path}
                  key={engineeringItems[randomNum].name}
                  alt="engineering image"
                />
                <p className={styles.title}>
                  {engineeringItems[randomNum].category}
                </p>
                {/* <IconButton onClick={()=>{setLiked(true)}}>{liked ? <FavoriteIcon sx={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>}</IconButton> */}
                <p>
                  Learn more about {engineeringItems[randomNum].name}{" "}
                  <a href={engineeringItems[randomNum].website}>here</a>
                </p>
                <Button onClick={handleClick} className={styles.moreBtn} sx={{backgroundColor:"#9CB2FF"}}type="button">
                    <Link to="/dashboard" state={{category}}>
                     View more Engineers
                     </Link>
                  </Button>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {category === "Data Science" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{category}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{dataScienceItems[randomNum].details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p id={dataScienceItems[randomNum].id}>
                  About {dataScienceItems[randomNum].name}
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </p>
                <img
                  src={dataScienceItems[randomNum].image_path}
                  key={dataScienceItems[randomNum].name}
                  alt="datascience image"
                />
                <p className={styles.title}>
                  {dataScienceItems[randomNum].category}
                </p>
                <p>
                  Learn more about {dataScienceItems[randomNum].name}{" "}
                  <a href={dataScienceItems[randomNum].website}>here</a>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {category === "Software Engineering" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{category}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{softwareEngineeringItems[randomNum].details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p id={softwareEngineeringItems[randomNum].id}>
                  About {softwareEngineeringItems[randomNum].name}
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </p>
                <img
                  src={softwareEngineeringItems[randomNum].image_path}
                  key={softwareEngineeringItems[randomNum].name}
                  alt="software engineering image"
                />
                <p className={styles.title}>
                  {softwareEngineeringItems[randomNum].category}
                </p>
                <p>
                  Learn more about {softwareEngineeringItems[randomNum].name}{" "}
                  <a href={softwareEngineeringItems[randomNum].website}>here</a>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {category === "Cybersecurity" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{category}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{cyberSecurityItems[randomNum].details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p id={cyberSecurityItems[randomNum].id}>
                  About {cyberSecurityItems[randomNum].name}
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </p>
                <img
                  src={cyberSecurityItems[randomNum].image_path}
                  key={cyberSecurityItems[randomNum].name}
                  alt="cybersecurity image"
                />
                <p className={styles.title}>
                  {cyberSecurityItems[randomNum].category}
                </p>
                <p>
                  Learn more about {cyberSecurityItems[randomNum].name}{" "}
                  <a href={cyberSecurityItems[randomNum].website}>here</a>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {category === "Design" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{category}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{designItems[randomNum].details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p id={designItems[randomNum].id}>
                  About {designItems[randomNum].name}
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </p>
                <img
                  src={designItems[randomNum].image_path}
                  key={designItems[randomNum].name}
                  alt="design image"
                />
                <p className={styles.title}>
                  {designItems[randomNum].category}
                </p>
                <p>
                  Learn more about {designItems[randomNum].name}{" "}
                  <a href={designItems[randomNum].website}>here</a>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {category === "Entrepeneurship" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{category}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{entrepeneurshipItems[randomNum].details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p id={entrepeneurshipItems[randomNum].id}>
                  About {entrepeneurshipItems[randomNum].name}
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </p>
                <img
                  src={entrepeneurshipItems[randomNum].image_path}
                  key={entrepeneurshipItems[randomNum].name}
                  alt="entrepeneurship image"
                />
                <p className={styles.title}>
                  {entrepeneurshipItems[randomNum].category}
                </p>
                <p>
                  Learn more about {entrepeneurshipItems[randomNum].name}{" "}
                  <a href={entrepeneurshipItems[randomNum].website}>here</a>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
      {/* )} */}
    </div>
  );
}

export default AspirationOutput;
