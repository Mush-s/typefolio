import { useMutation } from "@apollo/client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { UPDATE_POST, DELETE_POST } from "../../Prisma/Post";
import { doReload } from "../../function/Reload";

interface Props {
  id: number;
  relation: string | undefined;
  title: string | undefined;
  content: string | undefined;
  date: string | undefined;
}
const EventLists = (props: Props) => {
  const { title, content, date, id, relation } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newRelation, setNewRelation] = useState(relation);
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
          relation: newRelation,
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
              <div>{newRelation}</div>
            </div>
          )}
        </div>
      )}
      {edit && (
        <form>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <input
            type="text"
            value={newRelation}
            onChange={(e) => setNewRelation(e.target.value)}
          />
          <input type="color" value="white" list="data1"/>
          <datalist id="data1">
            <option value="black"></option>
            <option value="red"></option>
            <option value="blue"></option>

          </datalist>

          <Button onClick={editHandler}>finish</Button>
          <Button onClick={deleteHandler}>DELETE</Button>
        </form>
      )}
    </div>
  );
};

export default EventLists;
