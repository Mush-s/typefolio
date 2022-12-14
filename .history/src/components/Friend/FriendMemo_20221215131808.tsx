import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Button, Checkbox, CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendmemo.module.css";
import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../../Prisma/Post";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { doReload } from "../../function/Reload";

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
  if (error) return <div>Maintenance or Something wrong </div>;
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

  const NotDonePosts = filteredAllPosts.filter((post) => post.done === false);
  const DonePosts = filteredAllPosts.filter((post) => post.done === true);

  function changeHandler(id: number) {
    const Post: any = postData.find((post) => post.length === id);

    UpdatePost({
      variables: {
        lengthId: id,
        done: !Post.done,
      },
    });
    setTimeout(doReload, 1000);
  }
  return (
    <div>
      <h1 className={styles.center}>{name}</h1>
      <ul className={styles.friendmemo}>
        {NotDonePosts.map((post) => (
          <li key={post.length} className={styles.block}>
            <h2 className={styles.center}>
              <Button onClick={(e) => changeHandler(post.length)}>
                <CoPresentIcon />
                {post.title}
              </Button>
            </h2>
            <h4 className={styles.content}>{post.content}</h4>
            <h6 className={styles.date}>Date: {post.date}</h6>
          </li>
        ))}
        {DonePosts.map((post) => (
          <li key={post.length} className={styles.done}>
            <h2 className={styles.center}>
              <Button onClick={(e) => changeHandler(post.length)}>
                <CoPresentIcon />
                {post.title}
              </Button>
            </h2>
            <h4 className={styles.content}>{post.content}</h4>
            <h6 className={styles.date}>Date: {post.date}</h6>
          </li>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};

export default FriendMemo;
