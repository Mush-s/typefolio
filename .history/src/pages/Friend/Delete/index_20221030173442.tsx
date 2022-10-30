import React from "react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_FRIENDS, DELETE_FRIEND } from "../../../Prisma/Friend";
import { Button } from "@mui/material";

const DeleteFriend = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [DeleteFriend] = useMutation(DELETE_FRIEND);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  DeletePost({
    variables: {
      lengthId: id,
    },
  });
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <div>{friend.id}</div>
          <div>{friend.name}</div>
          <Button
            onClick={(e) => DeleteFriend({ variables: { id: friend.id } })}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default DeleteFriend;
