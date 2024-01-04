import {SearchRepositoriesQuery} from "src/graphql/__generated__/graphql";

export type TSingleEdge = NonNullable<
  SearchRepositoriesQuery["search"]["edges"]
>[number];

export type TRepoNode = Extract<
  NonNullable<TSingleEdge>["node"],
  {name: string}
>;
