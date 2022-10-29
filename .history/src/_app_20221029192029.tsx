import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";
import Header from "./components/Header/Header";
import FriendList from "./components/Friend/FriendList";
import { useMediaQuery, useTheme } from "@mui/material";

const theme = useTheme();
const isMatch = useMediaQuery(theme.breakpoints.down("md"));
const App = () => {
  return (
    <Styled>
      <Header />

      {isMatch ? (
        <Calendar />
      ) : (
        <div>
          <Calendar />
          <FriendList />
        </div>
      )}
      <Todo />
    </Styled>
  );
};

export default App;
