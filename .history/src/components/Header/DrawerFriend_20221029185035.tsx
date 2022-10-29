import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import React, { useState } from "react";

import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { friends } from "../Friend/FriendList";
const DrawerFriend = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {friends.map((friend) => (
            <li key={friend.name}>
              <ListItemButton href={friend.link}>
                <ListItemIcon>
                  <ListItemText>{friend.name}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </li>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <RecordVoiceOverIcon />
      </IconButton>
    </div>
  );
};

export default DrawerFriend;
