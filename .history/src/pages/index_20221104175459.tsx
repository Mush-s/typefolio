import React from "react";
import Todo from "../components/Todo/Todo";
import Calendar from "../components/Calendar/calendar";
import Header from "../components/Header/Header";
import FriendList from "../components/Friend/FriendList";
import styles from "../../styles/_app.module.css";

export default function Home() {
  return (
    <React.StrictMode>
      <div className={styles.home}>
        <Header />
        <div className={styles.flex}>
          <Calendar />
          <div className={styles.sub}>
            <FriendList />
          </div>
        </div>
        {/* <Todo /> */}
      </div>
    </React.StrictMode>
  );
}
