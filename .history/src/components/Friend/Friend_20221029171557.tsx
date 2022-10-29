import { Button } from "@mui/material";
import React from "react";

interface Friend {
  friend: {
    name: string;
    link: string;
  };
}
const Friend = (props: Friend) => {
  const { name, link } = props.friend;
  return (
    <Button variant="outlined" href={link}>
      {name}
    </Button>
  );
};

export default Friend;
