import { Button } from "@mui/material";
import React from "react";

interface Friend {
  friend: {
    name: string;
    link: string;
  };
}
const Friend = (props: Friend) => {
  const { name, link } = props.friendƒ;
  return <Button variant="outlined">{props.friend.name}</Button>;
};

export default Friend;
