import React, { useRef } from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import womenInTechnology from "../data";
import styles from "../../styling/aspirationoutput.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  const ref = useRef<ShowMoreRef>(null);
  const toggleLines: ShowMoreToggleLinesFn = (e) => {
    ref.current?.toggleLines(e);
  };
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
        <h2 className={styles["area-interest"]}>
          Your Area of Interest: <b>{category}</b>
        </h2>
        <h3>Did you know:</h3>
        <div>
          <ShowMore
            ref={ref}
            lines={3}
            more={
              <IconButton sx={{backgroundColor:'white'}} disableRipple onClick={toggleLines}>
                <KeyboardArrowDownIcon />
              </IconButton>
            }
            less={
              <IconButton sx={{backgroundColor:'white'}} disableRipple onClick={toggleLines}>
                <KeyboardArrowUp />
              </IconButton>
            }
          >
            <p>{engineeringItems[randomNum].details}</p>
          </ShowMore>
        </div>
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
              <p className={styles.title}>
                {engineeringItems[randomNum].category}
              </p>
              <p>
                Learn more about {engineeringItems[randomNum].name}{" "}
                <a href={engineeringItems[randomNum].website}>here</a>
              </p>
            </Typography>
          </CardContent>
        </Card>
      )}

      {category === "Data Science" && (
        <Card className={styles.card}>
        <CardContent className={styles["card-content"]}>
          <Typography variant="body2" color="text.seconday">
            <p id={dataScienceItems[randomNum].id}>
              About {dataScienceItems[randomNum].name}
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
      )}

      {category === "Software Engineering" && (
        <Card className={styles.card}>
        <CardContent className={styles["card-content"]}>
          <Typography variant="body2" color="text.seconday">
            <p id={softwareEngineeringItems[randomNum].id}>
              About {softwareEngineeringItems[randomNum].name}
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
      )}

      {category === "Cybersecurity" && (
        <Card className={styles.card}>
        <CardContent className={styles["card-content"]}>
          <Typography variant="body2" color="text.seconday">
            <p id={cyberSecurityItems[randomNum].id}>
              About {cyberSecurityItems[randomNum].name}
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
      )}

      {category === "Design" && (
        <Card className={styles.card}>
        <CardContent className={styles["card-content"]}>
          <Typography variant="body2" color="text.seconday">
            <p id={designItems[randomNum].id}>
              About {designItems[randomNum].name}
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
      )}

      {category === "Entrepeneurship" && (
       <Card className={styles.card}>
       <CardContent className={styles["card-content"]}>
         <Typography variant="body2" color="text.seconday">
           <p id={entrepeneurshipItems[randomNum].id}>
             About {entrepeneurshipItems[randomNum].name}
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
      )}
      {/* )} */}
    </div>
  );
}

export default AspirationOutput;
