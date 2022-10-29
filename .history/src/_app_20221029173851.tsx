import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";
import Header from "./components/Header/Header";
import FriendList from "./components/Friend/FriendList";

export const App = () => {
  return (
    <Styled>
      <Header />
      <Calendar />
      <Todo />
      <FriendList />
    </Styled>
  );
};
