import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Button, Checkbox, CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendmemo.module.css";
import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../../Prisma/Post";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const friends = [];

interface Props {
  postData: {
    length: number;
    date: string;
    title: string;
    content: string;
    color: string;
    done: boolean;
  }[];
  name: string | string[] | undefined;
}

const FriendMemo = (props: Props) => {
  const { data, error, loading } = useQuery(GET_FRIENDS);
  const [UpdatePost] = useMutation(UPDATE_POST);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;

  const { friends } = data;
  const { postData, name } = props;

  const friend = friends.filter((friend) => friend.name === name);
  const filteredPosts = postData.filter(
    (post) => post.color === friend[0].color
  );

  const filteredAllPosts = filteredPosts.concat(
    postData.filter((post) => post.color === "#2196f3")
  );

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const Post: any = postData.find((post) => post.length === id);
  }
  return (
    <div>
      <h1>{name}</h1>
      <ul className={styles.friendmemo}>
        {filteredAllPosts.map((post) => (
          <li key={post.length} className={styles.block}>
            <h2>
              <CoPresentIcon />
              {post.title}
            </h2>
            <h4 className={styles.content}>{post.content}</h4>
            <h6 className={styles.date}>Date: {post.date}</h6>
            <Button />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendMemo;
