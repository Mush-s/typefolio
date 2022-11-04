import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "../../Prisma/Friend";

const DrawerFriend = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [enteredName, setEnteredName] = useState("");

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  const filteredFriend = Filter(friends, enteredName);

  function searchHandler(e) {
    setEnteredName(e.target.value);
  }
  return (
    <div>
      <Drawer
        PaperProps={{ style: { width: "30%" } }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <TextField
          onChange={(e) => searchHandler(e)}
          value={enteredName}
          label="Search for name"
          variant="standard"
          className={styles.input}
        />
        <List>
          {friends.length === 0 && <div>no one</div>}
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
