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
import { Filter } from "../../function/Filter";
import styles from "../../../styles/drawerfriend.module.css";

const DrawerFriend = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [enteredName, setEnteredName] = useState("");

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  const filteredFriend = Filter(friends, enteredName);

  function searchHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
        />
        <List className={styles.list}>
          {friends.length === 0 && <div>no one</div>}
          {filteredFriend && (
            <div>
              {filteredFriend.map((friend) => (
                <li key={friend.id}>
                  <ListItemButton href={"/Friend/" + friend.name} sx={{backgroundColor:"red"}}>
                    <ListItemText>{friend.name}</ListItemText>
                  </ListItemButton>
                </li>
              ))}
            </div>
          )}
          {!filteredFriend && (
            <div>
              {friends.map((friend) => (
                <li key={friend.id}>
                  <ListItemButton href={"/Friend/" + friend.name}>
                    <ListItemText>{friend.name}</ListItemText>
                  </ListItemButton>
                </li>
              ))}
            </div>
          )}
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
