import React, { useEffect } from "react";
import styles from "../styling/hero.module.css";
import HeroImage from "../assets/HeroImage.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import womenInTechnology from "./data";
function Hero() {
  const [aspiration, setAspiration] = React.useState("");
  const [name, setName] = React.useState({});
  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setAspiration(event.target.value);
  };


  return (
    <>
      <div className={styles.content}>
        <img src={HeroImage} alt="hero image"className={styles.floating}/>
        {/* <Box sx={{ minWidth: 120 }}> */}
        <div className="content-contaienr">
          <div style={{ textAlign: "center", color: "black", fontFamily:'Barlow' }}>
            <p>What role in tech do you want to pursue or currently have?</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label" sx={{fontFamily:'Barlow'}}>Select a role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={aspiration}
                label="Aspiration"
                onChange={handleChange}
                MenuProps={{
                  disableScrollLock: true,
                }}
              >
                <MenuItem value={"Development"}>Development</MenuItem>
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Entrepeneurship"}>Entrepeneurship</MenuItem>
                <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
                <MenuItem value={"Design"}>Design</MenuItem>
                <MenuItem value={"Data Science"}>Data Science</MenuItem>
                <MenuItem value={"Cybersecurity"}>Cybersecurity</MenuItem>
              </Select>
              <Button sx={{backgroundColor:"#9CB2FF",color:"black",marginTop: "10px",":hover":{bgcolor:"#444cf7", color:"white"}}} ><Link to='/aspiration' state={{aspiration}}>Inspire Me!</Link></Button>
            </FormControl>
          </div>
          
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  );
}

export default Hero;
