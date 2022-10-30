import { useRouter } from "next/router";
import React from "react";
const FriendContent = () => {
  const router = useRouter();
  const friendId = router.query.id;

  return (
    <div>
      <div>{friendId}</div>
    </div>
  );
};

export default FriendContent;
