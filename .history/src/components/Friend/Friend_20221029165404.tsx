import { Button } from "@mui/material";
import React from "react";

interface Friend {
  friend: string;
}
const Friend = (props: Friend) => {
  const { friend } = props;
  return (
    <Button variant="outlined" href="#outlined-buttons">
      {friend}
    </Button>
  );
};

export default Friend;
