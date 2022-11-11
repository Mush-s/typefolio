import React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../../styles/global.css";
function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "hhttps://typefolo-backend.vercel.app ",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

https://typefolo-backend.vercel.app
