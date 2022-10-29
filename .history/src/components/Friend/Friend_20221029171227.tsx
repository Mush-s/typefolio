import { Button } from "@mui/material";
import React from "react";

interface Friend {
  name: string;
  link: string;
}
const Friend = (props: Friend) => {
  return (
    <Button variant="outlined" href={link}>
      {name}
    </Button>
  );
};

export default Friend;
