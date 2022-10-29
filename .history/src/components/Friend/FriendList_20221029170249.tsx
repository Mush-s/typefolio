import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

export const friends = [{ name: "nfeo", link: "nove" }];

const FriendList = () => {
  return (
    <List>
      {friends.map((friend) => (
        <Friend item={friend} />
      ))}
    </List>
  );
};

export default FriendList;
