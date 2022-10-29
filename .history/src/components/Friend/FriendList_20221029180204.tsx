import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend.module";

export const friends = [{ name: "jfoe" ,link:"nvoe"}, { name: "enovel" ,link:"oven"}];

const FriendList = () => {
  return (
    <List>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </List>
  );
};

export default FriendList;
