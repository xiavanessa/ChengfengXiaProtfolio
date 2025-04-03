// eslint.config.js
import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import hooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ...reactRecommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": hooks,
    },
    rules: {
      ...hooks.configs.recommended.rules,
      "no-unused-vars": "warn",
    },
  },
];
