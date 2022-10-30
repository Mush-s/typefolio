import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../../styles/friendList.module.css";

export const friends = [{ id: "nkve", name: "jfoe" }];

const FriendList = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);

  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;
  console.log(friends);
  return (
    <div>
      <List sx={{ maxHeight: "50px" }}>
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
