import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/friend.module.css";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
interface Friend {
  friend: {
    id: string;
    name: string;
  };
}

const Friend = (props: Friend) => {
  const { name } = props.friend;
  return (
    <div>
      <Button className={styles.friend} href={`/friend/${name}`}>
        <AccessibilityNewIcon />
        <div>{name}</div>
      </Button>
    </div>
  );
};

export default Friend;
