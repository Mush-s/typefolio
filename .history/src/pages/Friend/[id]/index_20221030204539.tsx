import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { GET_POSTS } from "../../../Prisma/Post";
import { GET_FRIENDS } from "../../../Prisma/Friend";
import { useQuery } from "@apollo/client";

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
      <div>
        {filteredPosts.map((post) => (
          <div>{post.relation}</div>
        ))}
      </div>
      <Button href="/">back</Button>
    </div>
  );
};

export default FriendContent;
