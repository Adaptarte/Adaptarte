module.exports = {
  env: {
    amd: true,
    browser: true
  },
  extends: ["estidlore/typescript", "estidlore/jest"],
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
