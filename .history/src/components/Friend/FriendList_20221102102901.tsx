import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendlist.module.css";

export const friends = [];

const FriendList = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;

  return (
    <List className={styles.friendlist}>
      {friends.length === 0 && (
        <ul className="noone">
          <li>N</li>
          <li>O</li>
          <p></p>
          <li>O</li>
          <li>N</li>
          <li>E</li>
        </ul>
      )}

      {friends.map((friend) => (
        <li key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </List>
  );
};

export default FriendList;
