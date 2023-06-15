module.exports = {
  env: {
    "react-native/react-native": true
  },
  extends: ["estidlore/react"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname
  },
  plugins: ["react-native"],
  root: false,
  settings: {
    "import/ignore": ["react-native"]
  }
};
