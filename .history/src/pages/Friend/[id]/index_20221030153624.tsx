import { useRouter } from "next/router";
import React from "react";
const FriendContent = () => {
  const router = useRouter();
  const friendId = router.query.id;

  return <div>n foe</div>;
};

export default FriendContent;
