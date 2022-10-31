import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { GET_POSTS } from "../../../Prisma/Post";
import { GET_FRIENDS } from "../../../Prisma/Friend";


const FriendContent = () => {
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
