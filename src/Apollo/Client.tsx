import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

// export const link = createHttpLink({
//   uri: "http://localhost:4010"
// });

export const Client = new ApolloClient({
  uri: "http://localhost:4010",
  clientState: {
    defaults,
    resolvers
  }
});
