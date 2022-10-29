import React from "react";
import Friend from "./Friend";

const FriendList = () => {
  const friends = ["veno", "noeg", "foen"];
  return (
    <div>
      {friends.map((friend) => (
        <Friend />
      ))}
    </div>
  );
};

export default FriendList;
