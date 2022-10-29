import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

export const friends = [
  { name: "jfoe", link: "nvoe" },
  { name: "enovel", link: "oven" },
];

const FriendList = () => {
  return (
    <List>
      {friends.map((friend) => (
        <Button>
          <Friend friend={friend} />
        </Button>
      ))}
    </List>
  );
};

export default FriendList;
