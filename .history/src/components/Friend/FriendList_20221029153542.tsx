import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

const FriendList = () => {
  const friends = ["veno", "noeg", "foen"];
  return (
    <List>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </List>
  );
};

export default FriendList;
