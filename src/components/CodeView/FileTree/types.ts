import {GetRepositoryFilesQuery} from "src/graphql/__generated__/graphql";

export interface IFileTreeProps {
  path?: string;
}

export type TFileNode = NonNullable<
  Extract<
    NonNullable<GetRepositoryFilesQuery["repository"]>["object"],
    {__typename?: "Tree"}
  >["entries"]
>[number];
