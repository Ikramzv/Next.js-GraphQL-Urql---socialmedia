
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./graphql/**/*.graphql",
  generates: {
    "./generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-urql"
      ]
    }
  }
};

export default config;
