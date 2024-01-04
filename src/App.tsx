import {Container, Stack} from "@mui/material";
import SearchRepo from "./components/SearchRepo";
import CodeView from "./components/CodeView";
import {useState} from "react";
import {TRepoNode} from "./components/SearchRepo/types";

function App() {
  const [selectedRepo, setSelectedRepo] = useState<TRepoNode | null>(null);

  return (
    <Container fixed>
      <Stack direction="column" gap={3}>
        <SearchRepo onSelect={setSelectedRepo} />
        <CodeView selectedRepo={selectedRepo} />
      </Stack>
    </Container>
  );
}

export default App;
