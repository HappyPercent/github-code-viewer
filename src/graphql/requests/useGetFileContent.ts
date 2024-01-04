import {useQuery} from "@apollo/client";
import {getFileContent} from "../queries/getFileContent";

export const useGetFileContent = (
  owner: string,
  repoName: string,
  path: string | null = ""
) =>
  useQuery(getFileContent, {
    variables: {owner, name: repoName, path: "HEAD:" + path},
    skip: !owner || !repoName || typeof path !== "string",
  });
