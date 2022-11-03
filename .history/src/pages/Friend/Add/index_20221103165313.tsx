import { useMutation, useQuery } from "@apollo/client";
import { Alert, Button, TextField } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import React, { useEffect, useState } from "react";
import { doReload } from "../../../function/Reload";
import { CREATE_FRIEND } from "../../../Prisma/Friend";
import styles from "../../../../styles/add.module.css";

const AddFriend = () => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("000000");
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [FriendCreate] = useMutation(CREATE_FRIEND);

  useEffect(() => {
    if (alert || errorAlert) {
      setTimeout(() => {
        if (alert) {
          setAlert(false);
        } else {
          setErrorAlert(false);
        }
      }, 3000);
    }
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length >= 1 && color) {
      FriendCreate({
        variables: {
          name,
          color,
        },
      });
      setAlert(true);
      setTimeout(doReload, 1000);
    }
    setErrorAlert(true);
  };

  return (
    <div className={styles.container}>
      {alert && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      {errorAlert && (
        <Alert severity="error">This is a success alert — check it out!</Alert>
      )}
      <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
        <TextField
          sx={{ width: "100%" }}
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <MuiColorInput
          sx={{ width: "100%" }}
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
