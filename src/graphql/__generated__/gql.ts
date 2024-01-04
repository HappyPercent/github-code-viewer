/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetFileContent($owner: String!, $name: String!, $path: String) {\n    repository(owner: $owner, name: $name) {\n      object(expression: $path) {\n        ... on Blob {\n          byteSize\n          text\n          isBinary\n        }\n      }\n    }\n  }\n": types.GetFileContentDocument,
    "\n  query GetRepositoryFiles($owner: String!, $name: String!, $path: String) {\n    repository(owner: $owner, name: $name) {\n      object(expression: $path) {\n        ... on Tree {\n          entries {\n            name\n            type\n            mode\n\n            object {\n              ... on Blob {\n                byteSize\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetRepositoryFilesDocument,
    "\n  query SearchRepositories($query: String!) {\n    search(query: $query, type: REPOSITORY, first: 100) {\n      edges {\n        node {\n          ... on Repository {\n            name\n            owner {\n              login\n            }\n            description\n            stargazerCount\n            url\n            # refs(refPrefix: \"refs/heads/\", first: 100) {\n            #   edges {\n            #     node {\n            #       name\n            #     }\n            #   }\n            # }\n          }\n        }\n      }\n    }\n  }\n": types.SearchRepositoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFileContent($owner: String!, $name: String!, $path: String) {\n    repository(owner: $owner, name: $name) {\n      object(expression: $path) {\n        ... on Blob {\n          byteSize\n          text\n          isBinary\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFileContent($owner: String!, $name: String!, $path: String) {\n    repository(owner: $owner, name: $name) {\n      object(expression: $path) {\n        ... on Blob {\n          byteSize\n          text\n          isBinary\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRepositoryFiles($owner: String!, $name: String!, $path: String) {\n    repository(owner: $owner, name: $name) {\n      object(expression: $path) {\n        ... on Tree {\n          entries {\n            name\n            type\n            mode\n\n            object {\n              ... on Blob {\n                byteSize\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRepositoryFiles($owner: String!, $name: String!, $path: String) {\n    repository(owner: $owner, name: $name) {\n      object(expression: $path) {\n        ... on Tree {\n          entries {\n            name\n            type\n            mode\n\n            object {\n              ... on Blob {\n                byteSize\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchRepositories($query: String!) {\n    search(query: $query, type: REPOSITORY, first: 100) {\n      edges {\n        node {\n          ... on Repository {\n            name\n            owner {\n              login\n            }\n            description\n            stargazerCount\n            url\n            # refs(refPrefix: \"refs/heads/\", first: 100) {\n            #   edges {\n            #     node {\n            #       name\n            #     }\n            #   }\n            # }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchRepositories($query: String!) {\n    search(query: $query, type: REPOSITORY, first: 100) {\n      edges {\n        node {\n          ... on Repository {\n            name\n            owner {\n              login\n            }\n            description\n            stargazerCount\n            url\n            # refs(refPrefix: \"refs/heads/\", first: 100) {\n            #   edges {\n            #     node {\n            #       name\n            #     }\n            #   }\n            # }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;