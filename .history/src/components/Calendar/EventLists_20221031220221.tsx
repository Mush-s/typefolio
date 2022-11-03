import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { UPDATE_POST, DELETE_POST } from "../../Prisma/Post";
import { doReload } from "../../function/Reload";
import { MuiColorInput } from "mui-color-input";

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
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [UpdatePost] = useMutation(UPDATE_POST);
  const [DeletePost] = useMutation(DELETE_POST);

  function editHandler() {
    if (edit) {
      UpdatePost({
        variables: {
          lengthId: id,
          title: newTitle,
          content: newContent,
          color: newColor,
        },
      });
    }
  }

  function deleteHandler() {
    DeletePost({
      variables: {
        lengthId: id,
      },
    });
    setTimeout(doReload, 1000);
  }
  return (
    <div>
      <form>
        <TextField
          type="text"
          sx={{ width: "15%" }}
          label="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <TextField
          type="text"
          sx={{ width: "45%" }}
          label="Context"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />

        <MuiColorInput
          sx={{ width: "10%" }}
          value={newColor}
          color={newColor ? "primary" : "error"}
          variant="outlined"
          label="Color"
          onChange={(color) => setNewColor(color)}
        />
        <TextField
          sx={{ width: "15%" }}
          type="submit"
          value="FINISH"
          onClick={editHandler}
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
