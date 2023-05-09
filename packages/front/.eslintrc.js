module.exports = {
  env: {
    amd: true,
    browser: true,
    "react-native/react-native": true
  },
  extends: ["estidlore/react"],
  globals: {
    module: true,
    window: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  plugins: ["react-native"],
  root: true
};
