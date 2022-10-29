import { Button } from "@mui/material";
import React from "react";
import "./Friend.css";

interface Friend {
  friend: {
    name: string;
    link: string;
  };
}
const Friend = (props: Friend) => {
  const { name, link } = props.friend;
  return (
    <Button className="friend" href={link}>
      <div>{name}</div>
      <div>{link}</div>
    </Button>
  );
};

export default Friend;
