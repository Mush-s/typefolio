import { Button } from "@mui/material";
import React from "react";

interface Friend {
  name: string;
  link: string;
}
const Friend: React.FC<Friend> = () => {
  const { name, link } = props;
  return (
    <Button variant="outlined" href={link}>
      {name}
    </Button>
  );
};

export default Friend;
