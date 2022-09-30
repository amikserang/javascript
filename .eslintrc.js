/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {}
};
