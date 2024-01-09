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

  if (!selectedFilePath || data?.repository?.object?.__typename !== "Blob")
    return null;

  const isBinary = data?.repository?.object?.isBinary;

  return (
    <Stack spacing={2} sx={{padding: 2}}>
      <Typography variant="h6">{selectedFilePath}</Typography>
      {isBinary ? (
        <div>
          This is binary file,{" "}
          <a
            href={`https://raw.githubusercontent.com/${selectedRepo?.owner.login}/${selectedRepo?.name}/HEAD/${selectedFilePath}`}
            target="_blank"
            rel="noreferrer"
          >
            view raw on GitHub
          </a>
        </div>
      ) : (
        <pre>
          <code>{data?.repository?.object.text}</code>
        </pre>
      )}
    </Stack>
  );
};
