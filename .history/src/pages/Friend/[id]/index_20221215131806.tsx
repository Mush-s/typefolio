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

  if (error) return <div>Maintenance or Something wrong </div>;
  if (loading) return <div>loading</div>;

  const { posts } = data;

  return (
    <div>
      <FriendMemo postData={posts} name={friendId} />
      <Button href="/">back</Button>
    </div>
  );
};

export default FriendContent;
