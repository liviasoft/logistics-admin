import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import { version } from "typescript";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...reactRecommended,
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {languageOptions: { 
    ...pluginReact.configs.flat.recommended.languageOptions,
    globals: {...globals.browser, ...globals.node} }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
];