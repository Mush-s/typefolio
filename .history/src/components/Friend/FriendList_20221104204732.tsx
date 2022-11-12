import { List, TextField } from "@mui/material";
import React, { useState } from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendlist.module.css";

export const friends = [];

const FriendList = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [enteredName, setEnteredName] = useState<string>("");
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;

  function searchHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setEnteredName(e.target.value);
  }

  const filteredFriend = friends.filter(
    (friend) => friend.name === enteredName
  );

  return (
    <div className={styles.center}>
      <TextField
        onChange={(e) => searchHandler(e)}
        value={enteredName}
        label="Search for name"
        variant="standard"
        className={styles.input}
      ></TextField>
      <List className={styles.friendlist}>
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
        {enteredName.length < 1 && (
          <div>
            {friends.map((friend) => (
              <li key={friend.id}>
                <Friend friend={friend} />
              </li>
            ))}
          </div>
        )}

        {enteredName.length >= 1 && (
          <div>
            {filteredFriend.map((friend) => (
              <li key={friend.id}>
                <Friend friend={friend} />
              </li>
            ))}
          </div>
        )}
      </List>
    </div>
  );
};

export default FriendList;