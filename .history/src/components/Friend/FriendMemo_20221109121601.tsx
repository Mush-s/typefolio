import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Checkbox, CircularProgress } from "@mui/material";
import { GET_FRIENDS } from "../../Prisma/Friend";
import styles from "../../../styles/friendmemo.module.css";
import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../../Prisma/Post";
import { doReload } from "../../function/Reload";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

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
  const [check, setCheck] = useState(false);
  if (error) return <div>Error </div>;
  if (loading) return <CircularProgress />;

  const { friends } = data;
  const { postData, name } = props;

  const friend = friends.filter((friend) => friend.name === name);
  console.log(friend);
  const filteredPosts = postData.filter(
    (post) => post.color === friend[0].color || "rgb(0,0,0)"
  );

  console.log(filteredPosts);
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>, id) {
    console.log(id);
    if (filteredPosts[id].done === false) {
      UpdatePost({
        variables: {
          lengthId: id,
          done: true,
        },
      });
      console.log(false);

      // setTimeout(doReload, 1000);
    } else if (filteredPosts[id].done === true) {
      UpdatePost({
        variables: {
          lengthId: id,
          done: false,
        },
      });
      console.log(postData[id].done);
      // setTimeout(doReload, 1000);
    }
  }
  return (
    <ul className={styles.friendmemo}>
      <div className={styles.name}>{name}</div>
      {filteredPosts.map((post) => (
        <li key={post.length} className={styles.block}>
          <h3 className={styles.title}>
            {post.title}
            <Checkbox onChange={(e, id) => changeHandler(e, post.length)} />
          </h3>
          <div className={styles.notcheck}>
            <h4 className={styles.content}>{post.content}</h4>
            <h6 className={styles.date}>Date: {post.date}</h6>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendMemo;
