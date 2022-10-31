import { useMutation, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { CREATE_FRIEND } from "../../../Prisma/Friend";

const AddFriend = () => {
  const [name, setName] = useState<string>("");
  const [relation, setRelation] = useState<string>("");
  const [friendColor, setFriendColor] = useState<string>("");
  const [FriendCreate] = useMutation(CREATE_FRIEND);

  const submitHandler = () => {
    FriendCreate({
      variables: {
        name,
        relation,
      },
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />
        <input
          type="color"
          value={friendColor}
          onChange={(e) => setFriendColor(e.target.value)}
          list="data"
        />
        <datalist id="data"></datalist>
        <input type="submit" />
      </form>
      <Button href="/">back</Button>
    </div>
  );
};

export default AddFriend;
