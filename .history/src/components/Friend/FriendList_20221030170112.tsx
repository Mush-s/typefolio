import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import { dataFriends } from "../../Prisma/Friend/Friends";
export const friends = [];

const FriendList = () => {
  
  const { data, error, loading } = useQuery(GET_FRIENDS);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;
 
  return (
    <div>
      <List>
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
