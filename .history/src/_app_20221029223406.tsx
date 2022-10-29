import Todo from "./components/Todo/Todo";
import React from "react";
import Calendar from "./components/Calendar/calendar";
import Header from "./components/Header/Header";
import FriendList from "./components/Friend/FriendList";
import "./_app.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Header />
        <div className="flex">
          <Calendar />
          <div className="sub">
            <FriendList />
          </div>
        </div>
        <Todo />
      </Route>
    </BrowserRouter>
  );
};

export default App;
