import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import styles from "../../../../styles/friendList.module.css";

export const friends = [{ id: "nkve", name: "jfoe"}];

const FriendList = () => {
  return (
    <div>
      <List sx={{ maxHeight: "50px" }}>
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
