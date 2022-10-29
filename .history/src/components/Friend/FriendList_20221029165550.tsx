import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

export const friends = [{ name: "fo", link: `link${name}` }];

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
