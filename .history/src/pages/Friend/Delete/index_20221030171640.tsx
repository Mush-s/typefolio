import React from "react";

import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "../../../Prisma/Friend";
import { Button } from "@mui/material";

const DeleteFriend = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;

  function deleteHandler(){
    
  }
  return (
    <ul>
      {friends.map((friend) => (
        <li>
            <div>{friend.name}</div>
            <Button onClick={deleteHandler}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default DeleteFriend;
