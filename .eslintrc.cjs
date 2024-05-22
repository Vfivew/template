module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", ".env"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh","prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: ["error", "always"],
    "max-params": ["error", 3],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": ["error"],
    "no-duplicate-imports": ["error"],
    "no-nested-ternary": ["error"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "no-warning-comments": [
      "warn",
      { terms: ["todo", "fixme", "any other term"], location: "anywhere" },
    ],
    "prefer-const": ["error"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    "no-trailing-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
    "no-useless-rename": ["error"],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "require-await": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-var-requires": ["error"],
      },
    },
  ],
};
