import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { UPDATE_POST, DELETE_POST } from "../../Prisma/Post";
import { doReload } from "../../function/Reload";

interface Props {
  id: number;
  title: string | undefined;
  content: string | undefined;
  date: string | undefined;
  color: string | undefined;
}
const EventLists = (props: Props) => {
  const { title, content, date, id, color } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const [newColor, setNewColor] = useState(color);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [UpdatePost] = useMutation(UPDATE_POST);
  const [DeletePost] = useMutation(DELETE_POST);

  function editHandler() {
    setEdit(!edit);
    if (edit) {
      UpdatePost({
        variables: {
          lengthId: id,
          title: newTitle,
          content: newContent,
          color: newColor,
        },
      });
      setTimeout(doReload, 1000);
    }
  }
  function openHandler() {
    setOpen(!open);
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
      {!edit && (
        <div>
          <div>
            {newTitle}
            <Button onClick={openHandler}>Content</Button>
            <Button onClick={editHandler}>Edit</Button>
          </div>
          {open && (
            <div>
              <div>{newContent}</div>
            </div>
          )}
        </div>
      )}
      {edit && (
        <form>
          <TextField
            type="text"
            label="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <TextField
            type="text"
            label="Context"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />

          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            list="data"
          />
          <datalist id="data"></datalist>

          <Button onClick={editHandler}>finish</Button>
          <Button onClick={deleteHandler}>DELETE</Button>
        </form>
      )}
    </div>
  );
};

export default EventLists;