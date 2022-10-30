import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import React, { useState } from "react";
import { GET_FRIENDS } from "../../Prisma/Friend";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { friends } from "../Friend/FriendList";
import { useQuery } from "@apollo/client";
const DrawerFriend = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data, error, loading } = useQuery(GET_FRIENDS);

  if (loading) return <div>loading...</div>;
  if (error) {
    return <div>error</div>;
  }
  const { friends } = data;
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {friends.map((friend) => (
            <li key={friend.id}>
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
