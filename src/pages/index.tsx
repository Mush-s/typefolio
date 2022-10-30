import React from "react";
import Todo from "../components/Todo/Todo";
import Calendar from "../components/Calendar/calendar";
import Header from "../components/Header/Header";
import FriendList from "../components/Friend/FriendList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import styles from "../../styles/_app.module.css"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Header />
        <div className={styles.flex}>
          <Calendar />
          <div className={styles.sub}>
            <FriendList />
          </div>
        </div>
        <Todo />
      </ApolloProvider>
    </React.StrictMode>
  );
}
