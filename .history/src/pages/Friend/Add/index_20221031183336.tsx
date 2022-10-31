import { useMutation, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { CREATE_FRIEND } from "../../../Prisma/Friend";

const AddFriend = () => {
  const [name, setName] = useState<string>("");

  const [color, setColor] = useState<string>("000000");
  const [FriendCreate] = useMutation(CREATE_FRIEND);

  const submitHandler = () => {
    FriendCreate({
      variables: {
        name,
        color,
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
          className="input-color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
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
