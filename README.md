# Simple SPA for GitHub repo search and code view.

### to run locally:
1. Clone repo, install modules.
2. Create `.env` in the root directory.
3. Add `REACT_APP_GITHUB_TOKEN` to `.env` with your GitHub token (don't forget the read access). [How to manage your tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
4. Run `npm start`.

### GQL schema
This app uses GQL codegen to generate typings, so to change GQL types you have to update file in `src/graphql/schema` and run `yarn graphql-codegen` or rerun the build.
