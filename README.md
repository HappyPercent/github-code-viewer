# GitHub Code Viewer
[![CI](https://github.com/HappyPercent/github-code-viewer/actions/workflows/ci.yml/badge.svg)](https://github.com/HappyPercent/github-code-viewer/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Single-page app for searching GitHub repositories and browsing their source in the browser. It uses the GitHub GraphQL API directly, with typed queries generated from the schema.

React 18 · TypeScript · Apollo Client · GraphQL Code Generator · MUI

## Features

- Debounced repository search with autocomplete
- Lazy-loaded file tree: folders load on expand
- File viewer with a link out for binary files
- End-to-end typed GraphQL (queries, variables and results) via `graphql-codegen`

## Run locally

```bash
npm install
cp .env.example .env     # add a GitHub token with public read access
npm start
```

The token is read from `REACT_APP_GITHUB_TOKEN` and sent from the browser. That makes this a local demo: don't deploy a build with a real token in it.

## GraphQL types

Queries live in `src/graphql/queries`. `npm start` and `npm run build` regenerate `src/graphql/__generated__` from `src/graphql/schema/schema.docs.graphql`. Run `npm run codegen` to regenerate on its own.
