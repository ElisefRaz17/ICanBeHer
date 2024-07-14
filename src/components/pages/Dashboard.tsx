import React from "react";
import womenInTechnology from "../data";
import { useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import styles from "../../styling/footer.module.css";

function Dashboard() {
  const location = useLocation();
  const selected = location.state.selected;
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
   console.log(selected);
  return <>{selected === "engineering" && <Card></Card>}</>;
}

export default Dashboard;
