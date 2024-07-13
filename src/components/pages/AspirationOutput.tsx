import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import womenInTechnology from "../data";
function AspirationOutput() {
  const location = useLocation();
  const category = location.state.aspiration;
  const selectedItem = womenInTechnology.find(item=>item.category === category)
    // womenInTechnology[Math.floor(Math.random() * womenInTechnology.length)];
  const engineeringItems = womenInTechnology.filter(item=>item.category === "Engineering")
  const dataScienceItems = womenInTechnology.filter(item=>item.category === "Data Science")
  const softwareEngineeringItems = womenInTechnology.filter(item=>item.category === "Software Engineering")
  const designItems = womenInTechnology.filter(item=>item.category === "Design")
  const cyberSecurityItems = womenInTechnology.filter(item=>item.category === "Cybersecurity")
  const entrepeneurshipItems = womenInTechnology.filter(item=>item.category === "Entrepeneurship")
  
  // console.log(selectedItem);
  // console.log(womenInTechnology.length);
  // console.log(category);
  
  return (
    <div>
      {/* {selectedItem.category === category && ( */}

        {category === "Engineering" && <Card sx={{ maxWidth: 345 }} >
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              {engineeringItems[Math.floor(Math.random()*engineeringItems.length)].name}
            </Typography>
          </CardContent>
        </Card>} 
        
        {category === "Data Science" && <Card sx={{ maxWidth: 345 }} >
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              {dataScienceItems[Math.floor(Math.random()*dataScienceItems.length)].name}
            </Typography>
          </CardContent>
        </Card>}

        {category === "Software Engineering" && <Card sx={{ maxWidth: 345 }} >
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              {softwareEngineeringItems[Math.floor(Math.random()*softwareEngineeringItems.length)].name}
            </Typography>
          </CardContent>
        </Card>}

        {category === "Cybersecurity" && <Card sx={{ maxWidth: 345 }} >
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              {cyberSecurityItems[Math.floor(Math.random()*cyberSecurityItems.length)].name}
            </Typography>
          </CardContent>
        </Card>}

        {category === "Design" && <Card sx={{ maxWidth: 345 }} >
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              {designItems[Math.floor(Math.random()*designItems.length)].name}
            </Typography>
          </CardContent>
        </Card>}

        {category === "Entrepeneurship" && <Card sx={{ maxWidth: 345 }} >
          <CardContent>
            <Typography variant="body2" color="text.seconday">
              {entrepeneurshipItems[Math.floor(Math.random()*entrepeneurshipItems.length)].name}
            </Typography>
          </CardContent>
        </Card>}
       {/* )} */}
    </div>
  );
}

export default AspirationOutput;
