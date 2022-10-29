import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";
import Header from "./components/Header/Header";

export const App = () => {
  return (
    <Styled>
      <Header />
      <Calendar />
      <Todo />
    </Styled>
  );
};
