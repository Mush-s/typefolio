import { useRouter } from "next/router";
import React from "react";
const FriendContent = () => {
  const router = useRouter();
  const friendId = router.query.id;


const friend = 
  return <div>{friendId}</div>;
};

export default FriendContent;
