import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import styles from "../../../../styles/FriendList.moduel.css"

export const friends = [
  { id: "nkve", name: "jfoe", link: "nvoe" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },
  { id: "fkev", name: "enovel", link: "oven" },

];

const FriendList = () => {
  return (
    <div className={styles.friendlist}>
      <List sx={{maxHeight:"50px"}}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <Friend friend={friend} />
          </li>
        ))}
      </List>
    </div>
  );
};

export default FriendList;
