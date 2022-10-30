import React from "react";

import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "../../../Prisma/Friend";

const DeleteFriend = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  const { friends } = data;
  return;
};

export default DeleteFriend;
