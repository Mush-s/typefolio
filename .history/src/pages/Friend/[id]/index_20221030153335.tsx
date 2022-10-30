import { useRouter } from "next/router";
import React from "react";

export const FriendContent = () => {
  const router = useRouter();
  const friendId = router.query.friendId;

  return <div>nfoe</div>;
};
