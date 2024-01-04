import {ApolloProvider} from "@apollo/client";
import client from "./client";
import {Container, Stack} from "@mui/material";
import SearchRepo from "./components/SerachRepo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Container fixed>
        <Stack direction="column" gap={3}>
          <SearchRepo />
          <h1>repo</h1>
        </Stack>
      </Container>
    </ApolloProvider>
  );
}

export default App;
