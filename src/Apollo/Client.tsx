import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

// export const link = createHttpLink({
//   uri: "http://localhost:4010"
// });

export const Client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4010"
      : "https://noteitblog-server-2bf8f48232.herokuapp.com/noteit/prod",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
