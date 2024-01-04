import {Box, Grid, Paper} from "@mui/material";
import React from "react";
import {TRepoNode} from "../SearchRepo/types";
import FileTreeView from "./FileTree";
import {FileView} from "./FileView";

export const SelectedRepoContext = React.createContext<{
  selectedRepo?: TRepoNode | null;
  onFileSelect?: (path: string) => void;
  selectedFilePath?: string | null;
}>({});

const CodeView = ({selectedRepo}: {selectedRepo: TRepoNode | null}) => {
  const [selectedFilePath, setSelectedFilePath] = React.useState<string | null>(
    null
  );

  return (
    <Box>
      <Grid container spacing={2}>
        <SelectedRepoContext.Provider
          value={{
            selectedFilePath,
            selectedRepo,
            onFileSelect: setSelectedFilePath,
          }}
        >
          <Grid item xs={3}>
            <Paper
              elevation={1}
              sx={{
                overflow: "auto",
              }}
            >
              <FileTreeView />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper
              elevation={1}
              sx={{
                overflow: "auto",
              }}
            >
              <FileView />
            </Paper>
          </Grid>
        </SelectedRepoContext.Provider>
      </Grid>
    </Box>
  );
};

export default CodeView;
