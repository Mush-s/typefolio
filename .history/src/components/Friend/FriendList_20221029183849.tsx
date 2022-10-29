import { Button, List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

export const friends = [
  { name: "jfoe", link: "nvoe" },
  { name: "enovel", link: "oven" },
];

const FriendList = () => {
  return (
    <List>
      <Button>
        {friends.map((friend) => (
          <Friend friend={friend} />
        ))}
      </Button>
    </List>
  );
};

export default FriendList;
