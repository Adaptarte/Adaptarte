module.exports = {
  env: {
    amd: true,
    browser: true
  },
  extends: ["estidlore/typescript"],
  globals: {
    module: true,
    window: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  root: true
};
