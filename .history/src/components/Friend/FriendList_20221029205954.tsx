import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";

export const friends = [
  { id: "nkve", name: "jfoe", link: "nvoe" },
  { id: "fkev", name: "enovel", link: "oven" },
];

const FriendList = () => {
  return (
    <div>
      <List className="friendlist">
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
