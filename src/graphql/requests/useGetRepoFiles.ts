import {useQuery} from "@apollo/client";
import {getRepoFiles} from "../queries/getRepoFilesQuery";

export const useGetRepoFiles = (
  owner: string,
  repoName: string,
  path: string | null = ""
) =>
  useQuery(getRepoFiles, {
    variables: {owner, name: repoName, path: "HEAD:" + path},
    skip: !owner || !repoName || typeof path !== "string",
  });
