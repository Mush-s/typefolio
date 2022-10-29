import { Button } from "@mui/material";
import React from "react";

interface Friend {
  name: string;
  link: string;
}
const Friend = (props: Friend) => {
  const { friend, link } = props;
  return (
    <Button variant="outlined" href={link}>
      {friend}
    </Button>
  );
};

export default Friend;
