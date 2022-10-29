import { Button } from "@mui/material";
import React from "react";

interface Friend {
  friend: {
    name: string;
  };
}
const Friend = (props: Friend) => {
  return <Button variant="outlined">{props.friend.name}</Button>;
};

export default Friend;
