import {graphql} from "../__generated__";

export const getRepoFiles = graphql(`
  query GetRepositoryFiles($owner: String!, $name: String!, $path: String) {
    repository(owner: $owner, name: $name) {
      object(expression: $path) {
        ... on Tree {
          entries {
            name
            type
            mode

            object {
              ... on Blob {
                byteSize
              }
            }
          }
        }
      }
    }
  }
`);
