import {useQuery} from "@apollo/client";
import {searchRepoQuery} from "../queries/searchRepoQuery";

export const useSearchRepo = (search: string) =>
  useQuery(searchRepoQuery, {variables: {query: search}, skip: !search});
