const webpack = require("webpack");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const env = require("yargs").argv.env; // use --env with webpack 2
const pkg = require("./package.json");

let libraryName = pkg.name;

let outputFile, mode;

if (env === "build") {
  mode = "production";
  outputFile = "index" + ".min.js";
} else {
  mode = "development";
  outputFile = "index" + ".js";
}

const config = {
  mode: mode,
  entry: __dirname + "/src/index.js",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      exclude: ["node_modules"],
    }),
  ],
  externals: {
    // Don't bundle react or react-dom, obv.
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};

module.exports = config;
