import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typesafe from 'eslint-plugin-typesafe'
import airbnbConfig from 'eslint-config-airbnb-base';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      'typesafe': typesafe,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      }
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...js.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "max-params": ["error", 3],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prefer-const': 'error',
      'prettier/prettier': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-lines': ['warn', { max: 124 }],
      "no-console": "error",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignoreEnums: true,
          ignoreReadonlyClassProperties: true,
          ignoreNumericLiteralTypes: true,
        },
      ],
      "eqeqeq": ["error", "always", { "null": "ignore" }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      "typesafe/no-await-without-trycatch": "error",
      '@typescript-eslint/no-explicit-any': 'error',
      "no-warning-comments": ["warn", { "terms": ["todo", "fixme", "xxx"], "location": "anywhere" }],
      "no-restricted-syntax": [
        "error",
        {
          "selector": "CommentBlock:not(:matches(CommentBlock > :matches(JSDocBlock, JSDocComment)))",
          "message": "Unexpected block comment found; expected JSDoc comment."
        }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "@typescript-eslint/no-explicit-any": "error",
      "typesafe/no-throw-sync-func": "warn",
      "typesafe/promise-catch": "error",
      "@typescript-eslint/return-await": ["error", "always"],
      "prefer-destructuring": [
        "warn",
        {
          "object": true,
          "array": false
        }
      ],
      "react/no-unstable-nested-components": [
        "warn",
        {
          "allowAsProps": true
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "none"
        }
      ],
      "react/jsx-no-duplicate-props": [
        "warn",
        {
          "ignoreCase": false
        }
      ]
    },
  },
);