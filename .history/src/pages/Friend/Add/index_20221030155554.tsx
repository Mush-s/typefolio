import { useMutation, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { CREATE_FRIEND } from "../../Prisma/Friend";

const AddFriend = () => {
  const [name, setName] = useState<string>();
  const [relation, setRelation] = useState<string>();
  const [FriendCreate] = useMutation(CREATE_FRIEND);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeRelation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelation(e.target.value);
  };

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
      <input type="text" value={name} onChange={(e) => changeName(e)} />
      <input type="text" value={relation} onChange={(e) => changeRelation(e)} />
      <input type="submit" />
    </form>
    <Button href="/">back</Button>
    </div>
  );
};

export default AddFriend;
