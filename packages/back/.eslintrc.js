module.exports = {
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname
  },
  root: false,
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports
          ["^\\u0000"],
          // Node.js builtins
          ["^node:"],
          // External packages
          ["^@?\\w"],
          // Internal packages
          ["^(config|controllers|middleware|models|routes|services|utils)"],
          // Relative imports
          ["^\\."]
        ]
      }
    ]
  }
};
