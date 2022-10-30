import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "../../Prisma/Friend";

const DrawerFriend = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data, error, loading } = useQuery(GET_FRIENDS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {(friends = [] && <div>No one</div>)}

          {friends.map((friend) => (
            <li key={friend.id}>
              <ListItemButton href={"/Friend/" + friend.name}>
                <ListItemText>{friend.name}</ListItemText>
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
