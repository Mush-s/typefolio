import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/friend.module.css";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
interface Friend {
  friend: {
    id: string;
    name: string;
    link: string;
  };
}

const Friend = (props: Friend) => {
  const { name, link } = props.friend;
  return (
    <div>
      <Button className={styles.friend} href={link}>
        <AccessibilityNewIcon />
        <div>{name}</div>
      </Button>
    </div>
  );
};

export default Friend;
