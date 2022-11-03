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
      <div>💘FRIEND LIST</div>
      {friends.length === 0 && (
        <ul>
          <li>A</li>
          <li>D</li>
          <li>D</li>
          <p></p>
          <li>F</li>
          <li>R</li>
          <li>I</li>
          <li>E</li>
          <li>N</li>
          <li>D</li>
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
