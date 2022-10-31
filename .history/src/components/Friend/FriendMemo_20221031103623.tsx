import { List } from "@mui/material";
import React from "react";
import Friend from "./Friend";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";

export const friends = [];

interface postData {
  postData: {
    title: string;
    content: string;
    relation: string;
  };
}
const FriendMemo = (props: postData) => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;

  console.log(friends);
  return <div></div>;
};

export default FriendMemo;
