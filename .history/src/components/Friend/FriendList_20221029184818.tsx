import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

export const friends = [
  { id: 1, name: "jfoe", link: "nvoe" },
  { id: 2, name: "enovel", link: "oven" },
];

const FriendList = () => {
  return (
    <List>
      {friends.map((friend) => (
        <li key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </List>
  );
};

export default FriendList;
