import React from "react";

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

  const deleteHandler = (e, id) => {
    DeleteFriend({ variables: { id: id } });
    setTimeout(doReload(), 1000);
  };
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <div>{friend.id}</div>
          <div>{friend.name}</div>
          <Button onClick={(e) => deleteHandler(e, id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default DeleteFriend;
