import {useContext, useState} from "react";
import {TFileNode} from "./types";
import {SelectedRepoContext} from "..";
import FileTreeView from ".";
import {Collapse, ListItemButton, Typography} from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

export const File = ({fileNode, path}: {fileNode: TFileNode; path: string}) => {
  if (fileNode.type === "blob") {
    return <Blob file={fileNode} path={path} />;
  }
  return <Folder file={fileNode} path={path} />;
};

const Blob = ({file, path}: {file: TFileNode; path: string}) => {
  const {onFileSelect} = useContext(SelectedRepoContext);
  return (
    <ListItemButton
      onClick={() => onFileSelect?.(path)}
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <InsertDriveFileOutlinedIcon />
      {file.name}
      {file.object?.__typename === "Blob" ? (
        <Typography variant="caption">{file.object.byteSize}byte</Typography>
      ) : null}
    </ListItemButton>
  );
};

const Folder = ({file, path}: {file: TFileNode; path: string}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <>
      <ListItemButton
        onClick={handleToggle}
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <FolderOutlinedIcon />
        <span>{file.name}</span>
      </ListItemButton>
      <Collapse in={isExpanded} timeout="auto" mountOnEnter>
        <FileTreeView path={path + file.name + "/"} />
      </Collapse>
    </>
  );
};
