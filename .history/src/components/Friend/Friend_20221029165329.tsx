import { Button} from "@mui/material";
import React from "react";

interface Friend {
  friend: string;
}
const Friend = (props: Friend) => {
  return (
    <Button variant="outlined" href="#outlined-buttons">
      Link
    </Button>
  );
};

export default Friend;
