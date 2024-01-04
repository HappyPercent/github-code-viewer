import {graphql} from "../__generated__";

export const getFileContent = graphql(`
  query GetFileContent($owner: String!, $name: String!, $path: String) {
    repository(owner: $owner, name: $name) {
      object(expression: $path) {
        ... on Blob {
          byteSize
          text
          isBinary
        }
      }
    }
  }
`);
