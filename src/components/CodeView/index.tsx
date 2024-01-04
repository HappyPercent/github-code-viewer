import {Box, CircularProgress, Grid, Paper} from "@mui/material";
import React from "react";
import {TRepoNode} from "../SearchRepo/types";
import {useGetRepoFiles} from "src/graphql/requests/useGetRepoFiles";
import FileTreeView from "./FileTree";

export const SelectedRepoContext = React.createContext<{
  selectedRepo?: TRepoNode | null;
  onFileSelect?: (path: string) => void;
}>({});

const CodeView = ({selectedRepo}: {selectedRepo: TRepoNode | null}) => {
  const [selectedFilePath, setSelectedFilePath] = React.useState<string | null>(
    null
  );
  const {data, loading} = useGetRepoFiles(
    selectedRepo?.owner.login || "",
    selectedRepo?.name || "",
    selectedFilePath
  );

  // if (loading) return <CircularProgress />;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            elevation={1}
            sx={{
              maxHeight: 800,
              overflow: "auto",
            }}
          >
            <SelectedRepoContext.Provider
              value={{
                selectedRepo,
                onFileSelect: (path) => setSelectedFilePath(path),
              }}
            >
              <FileTreeView />
            </SelectedRepoContext.Provider>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>{/* File View */}</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CodeView;
