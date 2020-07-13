const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "index.js",
  output: {
    file: "out/index.js",
    format: "cjs",
  },
  plugins: [
    commonjs({ ignore: ["mongodb-client-encryption"] }),
  ],
};