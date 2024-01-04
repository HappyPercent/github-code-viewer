import {CircularProgress, List} from "@mui/material";
import {useContext} from "react";
import {IFileTreeProps} from "./types";
import {File} from "./File";
import {SelectedRepoContext} from "..";
import {useGetRepoFiles} from "src/graphql/requests/useGetRepoFiles";

const FileTreeView = ({path = ""}: IFileTreeProps) => {
  const {selectedRepo} = useContext(SelectedRepoContext);
  const {data, loading} = useGetRepoFiles(
    selectedRepo?.owner.login || "",
    selectedRepo?.name || "",
    path
  );

  if (loading) return <CircularProgress />;

  return (
    <List
      disablePadding
      sx={{
        paddingLeft: `${path ? 10 : 0}px`,
      }}
    >
      {(data?.repository?.object?.__typename === "Tree"
        ? data?.repository?.object.entries
        : []
      )?.map((file) => (
        <File key={file.name} fileNode={file} path={path || ""} />
      ))}
    </List>
  );
};

export default FileTreeView;
