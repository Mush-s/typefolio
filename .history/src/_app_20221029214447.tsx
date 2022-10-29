import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";
import Header from "./components/Header/Header";
import FriendList from "./components/Friend/FriendList";
import { useMediaQuery, useTheme } from "@mui/material";
import "./_app.css";

const App = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Styled>
      <Header />
      <div className="flex">
        <div className="mai">
        <Calendar />
        </div>
        <div className="sub">
        <FriendList />
        </div>
      </div>
      <Todo />
    </Styled>
  );
};

export default App;
