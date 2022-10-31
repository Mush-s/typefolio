import React from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";

export const friends = [];

interface Props {
  postData: {
    length: number;
    title: string;
    content: string;
    relation: string;
  }[];
  name: string | undefined;
}

const FriendMemo = (props: Props) => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;
  const { friends } = data;
  const { postData, name } = props;

  const friend = friends.filter((friend) => friend.name === name);
  const filteredPosts = postData.filter(
    (post) => post.relation === friend[0].relation
  );

  return (
    <div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.length}>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendMemo;
