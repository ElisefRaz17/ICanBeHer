import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import womenInTechnology from "../data";
import styles from "../../styling/aspirationoutput.module.css";
function AspirationOutput() {
  const location = useLocation();
  const category = location.state.aspiration;
  const [randomNum, setRandomNum] = React.useState(0);
  const selectedItem = womenInTechnology.find(
    (item) => item.category === category
  );

  const generateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * womenInTechnology.length);
    setRandomNum(randomNum);
  };
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

  const item = engineeringItems
    .sort(() => Math.random() - Math.random())
    .find(() => true);
  // console.log(selectedItem);
  // console.log(womenInTechnology.length);
  // console.log(category);

  return (
    <div className={styles.container}>
      <div className={styles.details}>
      <h2 style={{paddingLeft:'20px'}}>Your Area of Interest: {category}</h2>
      </div>
      {category === "Engineering" && (
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
              <p className={styles.title}>{engineeringItems[randomNum].category}</p>
              <p>Learn more about {engineeringItems[randomNum].name} <a href={engineeringItems[randomNum].website}>here</a></p>
            </Typography>
          </CardContent>
        </Card>
      )}

      {category === "Data Science" && (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              <p> {dataScienceItems[randomNum].name}</p>
              <img
                src={dataScienceItems[randomNum].image_path}
                alt="data science picture"
              />
            </Typography>
          </CardContent>
        </Card>
      )}

      {category === "Software Engineering" && (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              <p> {softwareEngineeringItems[randomNum].name}</p>
              <img
                src={softwareEngineeringItems[randomNum].image_path}
                alt="software engineering picture"
              />
            </Typography>
          </CardContent>
        </Card>
      )}

      {category === "Cybersecurity" && (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              <p> {cyberSecurityItems[randomNum].name}</p>
              <img
                src={cyberSecurityItems[randomNum].image_path}
                alt="cybersecurity picture"
              />
            </Typography>
          </CardContent>
        </Card>
      )}

      {category === "Design" && (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              <p> {designItems[randomNum].name}</p>
              <img
                src={designItems[randomNum].image_path}
                alt="design picture"
              />
            </Typography>
          </CardContent>
        </Card>
      )}

      {category === "Entrepeneurship" && (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              <p> {entrepeneurshipItems[randomNum].name}</p>
              <img
                src={entrepeneurshipItems[randomNum].image_path}
                alt="entrepeneur picture"
              />
            </Typography>
          </CardContent>
        </Card>
      )}
      {/* )} */}
    </div>
  );
}

export default AspirationOutput;
