import { Button } from "@mui/material";
import React from "react";

interface Friend {
  friend: string;
}
const Friend = (props: Friend) => {
  return (
    <Button variant="outlined" href="#outlined-buttons">
      {props.friend}
    </Button>
  );
};

export default Friend;
