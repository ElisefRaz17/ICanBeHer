import React from "react";
import styles from "../styling/hero.module.css";
import HeroImage from "../assets/HeroImage.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function Hero() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
                value={age}
                label="Algorithm"
                onChange={handleChange}
              >
                <MenuItem value={1}>Developer</MenuItem>
                <MenuItem value={2}>Entrepeneur</MenuItem>
                <MenuItem value={3}>Engineer</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  );
}

export default Hero;
