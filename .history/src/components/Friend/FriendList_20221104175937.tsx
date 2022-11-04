import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendlist.module.css";
import InputUnstyled from "@mui/base/InputUnstyled";

export const friends = [];

const FriendList = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;

  return (
    <div className={styles.friendlist}>
      <InputUnstyled component="aside" />
      <List>
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
    </div>
  );
};

export default FriendList;
