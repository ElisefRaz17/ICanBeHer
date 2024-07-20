import React from "react";
import styles from "../../styling/profile.module.css";
import { Avatar, Button, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import { Edit } from "@mui/icons-material";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles["edit-container"]}>
          <Edit sx={{ color: "#9CB2FF" }} />
        </div>
        <Avatar
          sx={{
            bgcolor: "hotpink",
            width: "256px",
            height: "256px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/broken-image.jpg"
        />
        <div className={styles.bio}>
          <p className={styles.subheading}>Name:</p>
          <p>Areas of interest:</p>
          <div className={styles.deleteContainer}>
            <button className={styles.deleteBtn}>Delete Button</button>
          </div>
        </div>
      </div>
      <div className={styles.favoritesContainer}>
        <h5>Favorite Profiles</h5>
        <Card>
          <CardContent>ABC</CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
