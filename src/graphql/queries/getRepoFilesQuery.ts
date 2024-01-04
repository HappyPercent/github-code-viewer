import {graphql} from "../__generated__";

export const getRepoFiles = graphql(`
  query GetRepositoryFiles($owner: String!, $name: String!, $branch: String!) {
    repository(owner: $owner, name: $name) {
      object(expression: $branch) {
        ... on Commit {
          tree {
            entries {
              name
              type
              object {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`);
