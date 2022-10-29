import { Button } from "@mui/material";
import React from "react";
import styles from "./Friend.module.css"

interface Friend {
  friend: {
    name: string;
    link: string;
  };
}
const Friend = (props: Friend) => {
  const { name, link } = props.friend;
  return (
    <div className={styles.friend}>
      <Button variant="outlined" href={link}>
        {name}
      </Button>
    </div>
  );
};

export default Friend;
