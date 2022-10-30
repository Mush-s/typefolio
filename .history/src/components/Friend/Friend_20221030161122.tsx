import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/friend.module.css";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
interface Friend {
  friend: {
    id: string;
    name: string;
    relation: string;
  };
}

const Friend = (props: Friend) => {
  const { name } = props.friend;
  return (

      <Button className={styles.friend} href={`/Friend/${name}`}>
        <AccessibilityNewIcon />
        <div>{name}</div>
      </Button>

  );
};

export default Friend;
