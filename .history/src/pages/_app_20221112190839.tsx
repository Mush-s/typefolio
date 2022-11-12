import React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../../styles/global.css";
function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://typefolo-backend.vercel.app",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

// https://typefolo-backend.vercel.app
