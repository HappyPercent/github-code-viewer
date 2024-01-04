import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  watch: true,
  schema: "src/graphql/schema/schema.docs.graphql",
  documents: ["src/graphql/queries/*.{ts,tsx}"],
  generates: {
    "src/graphql/__generated__/": {
      preset: "client",
    },
  },
};

export default config;
