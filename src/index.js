import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Create the link to connect the ApolloCLient to the GraphQL API
// running on port 4000
const httpLink = new HttpLink({ uri: "http://localhost:4000" });

// INstantiate the ApolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// Render the root component wrapped in the HOC
// ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
