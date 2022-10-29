import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

interface Friend {
  friend: string;
}
const Friend = (props: Friend) => {
  return (
    <div>
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>{props.friend}</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </div>
  );
};

export default Friend;
