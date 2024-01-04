import {ApolloClient, InMemoryCache} from "@apollo/client";

const token = process.env.REACT_APP_GITHUB_TOKEN;

if (!token) {
  throw new Error(
    "You forgot to provide a GitHub token!\nPlease add it to your .env file"
  );
}
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  cache: new InMemoryCache(),
});

export default client;
