import { Button } from "@mui/material";
import React from "react";

interface friend {
  friend: {
    name: string;
    link: string;
  };
}
const Friend = (props: friend) => {
  const { name, link } = props.friend;
  return (
    <Button variant="outlined" href={link}>
      {name}
    </Button>
  );
};

export default Friend;
