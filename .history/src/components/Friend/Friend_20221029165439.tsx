import { Button } from "@mui/material";
import React from "react";

interface Friend {
  friend: string;
}
const Friend = (props: Friend) => {
  const { friend, link } = props;
  return (
    <Button variant="outlined" href={ling}>
      {friend}
    </Button>
  );
};

export default Friend;
