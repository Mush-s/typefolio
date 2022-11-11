import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Checkbox, CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendmemo.module.css";
import { style } from "@mui/system";

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
  const [check, setCheck] = useState(false);
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
          <h3 className={styles.title}>
            {post.title}
            <Checkbox value={check} onChange={() => setCheck(!check)} />
          </h3>

          <div className={check ? styles.check : styles.notcheck}>
            <h4 className={styles.content}>{post.content}</h4>
            <h6 className={styles.date}>Date: {post.date}</h6>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendMemo;
