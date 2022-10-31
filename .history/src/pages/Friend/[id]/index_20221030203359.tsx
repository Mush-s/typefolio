import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { GET_POSTS } from "../../../Prisma/Post";
import { GET_FRIENDS } from "../../../Prisma/Friend";
import { useQuery } from "@apollo/client";

const FriendContent = () => {
  const { data, error, loading } = useQuery(GET_POSTS);
  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;

  const { posts } = data;

  const router = useRouter();
  const friendId = router.query.id;

  return (
    <div>
      <div>{friendId}</div>
      <Button href="/">back</Button>
    </div>
  );
};

export default FriendContent;
