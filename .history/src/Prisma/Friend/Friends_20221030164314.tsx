import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "./Friend";

const { data, error, loading } = useQuery(GET_FRIENDS);

export const { dataFriends } = data;
