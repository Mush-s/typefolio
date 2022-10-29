import { Button } from "@mui/material";
import React from "react";
import "./Friend.css";
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
    <div className="friends">
      <Button className="friend" href={link}>
        <AccessibilityNewIcon />
        <div>{name}</div>
      </Button>
    </div>
  );
};

export default Friend;
