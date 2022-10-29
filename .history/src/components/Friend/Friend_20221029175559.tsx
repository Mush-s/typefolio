import { Button } from "@mui/material";
import React from "react";
import * as style from "./Friend.module.css"

interface Friend {
  friend: {
    name: string;
    link: string;
  };
}
const Friend = (props: Friend) => {
  const { name, link } = props.friend;
  return (
    <div className={style.friend}>
      <Button variant="outlined" href={link}>
        {name}
      </Button>
    </div>
  );
};

export default Friend;
