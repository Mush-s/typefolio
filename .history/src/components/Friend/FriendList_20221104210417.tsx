import { List, TextField } from "@mui/material";
import React, { useState } from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendlist.module.css";
import escapeStringRegexp from "escape-string-regexp";

export const friends = [];

const FriendList = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);

  const [enteredName, setEnteredName] = useState<string>("");
  const [filteredFriend, setFilteredFriend] = useState([]);

  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;

  function searchHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setEnteredName(e.target.value);
  }

  const searchKeywords = enteredName
    .trim()
    .toLowerCase()
    .match(/[^\s]+/g);

  const result = friends.filter((friend =>
    searchKeywords.every((kw) => friend.toLowerCase().indexOf(kw) !== -1)
  );

  console.log(friends);
  console.log(filteredFriend);
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
