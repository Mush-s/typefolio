import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Styled from "./style/Styled";
import Header from "./components/Header/Header";
import FriendList from "./components/Friend/FriendList";
import "./_app.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex">
        <Calendar />
        <div className="sub">
          <FriendList />
        </div>
      </div>
      <Todo />
    </BrowserRouter>
  );
};

export default App;
