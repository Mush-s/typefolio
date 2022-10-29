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
    <div className="friend">
      <Button variant="outlined" href={link}>
        {name}
      </Button>
    </div>
  );
};

export default Friend;
