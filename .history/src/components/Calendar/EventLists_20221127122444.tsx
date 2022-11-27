import { useMutation } from "@apollo/client";
import { Alert, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UPDATE_POST, DELETE_POST } from "../../Prisma/Post";
import { doReload } from "../../function/Reload";
import { MuiColorInput } from "mui-color-input";
import styles from "../../../styles/calendar.module.css";

interface Props {
  id: number;
  title: string;
  content: string;
  date: string;
  color: string;
}
const EventLists = (props: Props) => {
  const { title, content, id, color } = props;
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newContent, setNewContent] = useState<string>(content);
  const [newColor, setNewColor] = useState<string>(color);
  const [alert, setAlert] = useState<boolean>(false);
  const [UpdatePost] = useMutation(UPDATE_POST);
  const [DeletePost] = useMutation(DELETE_POST);

  useEffect(() => {
    setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 1000);
  });
  function editHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    UpdatePost({
      variables: {
        lengthId: id,
        title: newTitle,
        content: newContent,
        color: newColor,
      },
    });
    setAlert(true);
    setTimeout(doReload, 1000);
  }

  function deleteHandler() {
    DeletePost({
      variables: {
        lengthId: id,
      },
    });
    setAlert(true);
    setTimeout(doReload, 1000);
  }

  return (
    <div className={styles.eventList}>
      {alert && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      <form>
        <TextField
          type="text"
          sx={{ width: "10%", "&:hover": { width: "100%" } }}
          label="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <TextField
          type="text"
          sx={{ width: "40%" , "&:hover": { width: "80%" }}}
          label="Context"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        {/* 
        <MuiColorInput
          sx={{ width: "10%" }}
          value={newColor}
          color={newColor ? "primary" : "error"}
          variant="outlined"
          label="Color"
          onChange={(color) => setNewColor(color)}
        /> */}

        <input
          type="color"
          value={newColor}
          color={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />

        <TextField
          sx={{ width: "20%"}}
          type="submit"
          value="CHANGE"
          onClick={(e) => editHandler(e)}
        >
          finish
        </TextField>
        <TextField
          onClick={deleteHandler}
          value="DELETE"
          sx={{ width: "15%" }}
        ></TextField>
      </form>
    </div>
  );
};

export default EventLists;
