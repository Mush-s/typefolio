import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "./Friend";

const getFriends = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const { dataFriends } = data;
  return dataFriends;
};

export const dataFriends = "" + getFriends;

console.log(dataFriends)
