import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";

export const App = () => {
  return (
    <Styled>
      <Headers />
      <Calendar />
      <Todo />
    </Styled>
  );
};
