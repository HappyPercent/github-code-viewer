import {useContext} from "react";
import {SelectedRepoContext} from "..";
import {useGetFileContent} from "src/graphql/requests/useGetFileContent";
import {CircularProgress, Stack, Typography} from "@mui/material";

export const FileView = () => {
  const {selectedRepo, selectedFilePath} = useContext(SelectedRepoContext);
  const {data, loading} = useGetFileContent(
    selectedRepo?.owner.login || "",
    selectedRepo?.name || "",
    selectedFilePath
  );

  if (loading) return <CircularProgress />;

  if (!selectedFilePath) return null;

  return (
    <Stack spacing={2} sx={{padding: 2}}>
      <Typography variant="h6">{selectedFilePath}</Typography>
      <pre>
        <code>
          {data?.repository?.object?.__typename === "Blob"
            ? data?.repository?.object.text
            : ""}
        </code>
      </pre>
    </Stack>
  );
};
