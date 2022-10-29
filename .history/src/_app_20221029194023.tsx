import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";
import Header from "./components/Header/Header";
import FriendList from "./components/Friend/FriendList";
import { useMediaQuery, useTheme } from "@mui/material";

const App = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Styled>
      <Header />

      {isMatch ? (
        <Calendar />
      ) : (
        <div className="flex">
          <div className="main">
            <Calendar />
          </div>
          <div className="side">
            <FriendList />
          </div>
          <div className="side">
            <FriendList />
          </div>
        </div>
      )}
      <Todo />
    </Styled>
  );
};

export default App;
