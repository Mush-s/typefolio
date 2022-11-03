import React from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendmemo.module.css";

export const friends = [];

interface Props {
  postData: {
    length: number;
    date: string;
    title: string;
    content: string;
    color: string;
  }[];
  name: string | string[] | undefined;
}

const FriendMemo = (props: Props) => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;

  const { friends } = data;
  const { postData, name } = props;

  const friend = friends.filter((friend) => friend.name === name);
  const filteredPosts = postData.filter(
    (post) => post.color === friend[0].color
  );

  return (
    <div>
      <ul className={styles.friendmemo}>
        <div className={styles.name}>Name: {name}</div>
        {filteredPosts.map((post) => (
          <li key={post.length} className={styles.block}>
            <div>Date: {post.date}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendMemo;
