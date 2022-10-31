import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { GET_POSTS } from "../../../Prisma/Post";
import { useQuery } from "@apollo/client";
import FriendMemo from "../../../components/Friend/FriendMemo";

const FriendContent = () => {
  const router = useRouter();
  const friendId = router.query.id;
  const { data, error, loading } = useQuery(GET_POSTS);

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;

  const { posts } = data;

  console.log(posts);

  const filteredPosts = posts.filter((post) => post.relation === "high");
  return (
    <div>
      <div>{friendId}</div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.length}>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
      <FriendMemo />
      <Button href="/">back</Button>
    </div>
  );
};

export default FriendContent;
