import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "env": {
        "browser": true,
        "es2021": true,
        "node": true
      },
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
      },
      "plugins": [
        "typescript-eslint"
      ],
      "rules": {
        "indent": [
          "warn",
          2
        ],
        "line-break-style": ["error", "windows"],
        "semi": ["error", "always"],
        "array-bracket-spacing": ["error", "always", { "objectsInArrays": false, "arraysInArrays": false }],
        "func-call-spacing": ["error", "never"],
        "max-len": ["error", { "code": 99, "ignoreTemplateLiterals": true, "ignoreComments": true, "ignoreUrls": true }],
        "max-lines": ["error", { "max": 399, "skipBlankLines": true, "skipComments": true }],
        "max-lines-per-funcion": ["error", { "max": 75, "skipBlankLines": true, "skipComments": true }],
        "no-console": "error"
      }
    }
  }
];