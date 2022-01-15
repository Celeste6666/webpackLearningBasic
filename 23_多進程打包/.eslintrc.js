module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
