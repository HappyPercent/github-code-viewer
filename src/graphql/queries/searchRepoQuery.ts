import {graphql} from "../__generated__";

export const searchRepoQuery = graphql(`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            description
            stargazerCount
            url
            # refs(refPrefix: "refs/heads/", first: 100) {
            #   edges {
            #     node {
            #       name
            #     }
            #   }
            # }
          }
        }
      }
    }
  }
`);
