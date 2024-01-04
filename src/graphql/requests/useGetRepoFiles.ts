import {useQuery} from "@apollo/client";
import {getRepoFiles} from "../queries/getRepoFilesQuery";

export const useGetBranches = (
  owner: string,
  repoName: string,
  branch: string
) => useQuery(getRepoFiles, {variables: {owner, name: repoName, branch}});
