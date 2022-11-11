import React from "react";
import styles from "../../../../styles/delete.module.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_FRIENDS, DELETE_FRIEND } from "../../../Prisma/Friend";
import { Button } from "@mui/material";
import { doReload } from "../../../function/Reload";

const DeleteFriend = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [DeleteFriend] = useMutation(DELETE_FRIEND);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  const deleteHandler = (id: any) => {
    DeleteFriend({ variables: { id: id } });
    setTimeout(doReload, 1000);
  };
  return (
    <div>
      <ul className={styles.delete}>
        {friends.map((friend) => (
          <li key={friend.id} className={styles.list}>
            <div className={styles.flex}>
              <h2 className={styles.name}>{friend.name}</h2>
              <h4>{friend.color}</h4>
              <Button
                className={styles.button}
                onClick={(e) => deleteHandler(friend.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button href="/">back</Button>
    </div>
  );
};

export default DeleteFriend;
