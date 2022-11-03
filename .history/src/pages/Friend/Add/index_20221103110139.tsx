import { useMutation, useQuery } from "@apollo/client";
import { Alert, Button, TextField } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import React, { useEffect, useState } from "react";
import { doReload } from "../../../function/Reload";
import { CREATE_FRIEND } from "../../../Prisma/Friend";

const AddFriend = () => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("000000");
  const [alert, setAlert] = useState(false);
  const [FriendCreate] = useMutation(CREATE_FRIEND);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (alert) {
          setAlert(false);
        }
      }, 3000);
    }
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FriendCreate({
      variables: {
        name,
        color,
      },
    });
    setTimeout(doReload, 1000);
    setAlert(true);
  };

  return (
    <div>
      {alert && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      <form onSubmit={(e) => submitHandler(e)}>
        <TextField
          value={name}
          label="Name"
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
