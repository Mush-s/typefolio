import { useMutation, useQuery } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import React, { useState } from "react";
import { CREATE_FRIEND } from "../../../Prisma/Friend";

const AddFriend = () => {
  const [name, setName] = useState<string>("");

  const [color, setColor] = useState<string>("");
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
        <TextField
          value={name}
          label="Context"
          onChange={(e) => setName(e.target.value)}
        />
        <MuiColorInput
          variant="outlined"
          label="Color"
          value={color}
          onChange={(color) => setColor(color)}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Button href="/">back</Button>
    </div>
  );
};

export default AddFriend;
