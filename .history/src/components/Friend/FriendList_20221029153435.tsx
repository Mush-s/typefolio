import React from "react";
import Friend from "./Friend";

const FriendList = () => {
  const friends = ["veno", "noeg", "foen"];
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
