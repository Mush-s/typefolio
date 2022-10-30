import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "./Friend";

const dataFriends = () => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const { dataFriends } = data;
  return dataFriends;
};
