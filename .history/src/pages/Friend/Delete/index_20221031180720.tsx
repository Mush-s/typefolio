import React from "react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_FRIENDS, DELETE_FRIEND } from "../../../Prisma/Friend";
import { Button } from "@mui/material";
import { doReload } from "../../../function/Reload";
import OutlinedInput from "@mui/material/OutlinedInput";

const DeleteFriend = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [DeleteFriend] = useMutation(DELETE_FRIEND);

  // or

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  const deleteHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: any
  ) => {
    DeleteFriend({ variables: { id: id } });
    setTimeout(doReload, 1000);
  };
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <div>{friend.id}</div>
            <div>{friend.name}</div>
            <Button onClick={(e) => deleteHandler(e, friend.id)}>Delete</Button>
          </li>
        ))}
      </ul>
      <Button href="/">back</Button>
      <OutlinedInput value="hi"></OutlinedInput>
    </div>
  );
};

export default DeleteFriend;
