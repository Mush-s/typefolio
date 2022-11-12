import React from "react";
import { useQuery } from "@apollo/client";
import { Checkbox, CircularProgress } from "@mui/material";
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
    (post) => post.color === friend[0].color || "rgb(0,0,0)"
  );

  return (
    <ul className={styles.friendmemo}>
      <div className={styles.name}>{name}</div>
      {filteredPosts.map((post) => (
        <li key={post.length} className={styles.block}>
          <Checkbox />
          <h3 className={styles.title}>{post.title}</h3>
          <h4 className={styles.content}>{post.content}</h4>
          <h6 className={styles.date}>Date: {post.date}</h6>
        </li>
      ))}
    </ul>
  );
};

export default FriendMemo;