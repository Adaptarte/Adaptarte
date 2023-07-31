module.exports = {
  extends: ["estidlore/react", "estidlore/jest"],
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  root: false,
  settings: {
    jest: {
      version: 29
    }
  }
};
