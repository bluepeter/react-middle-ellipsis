const webpack = require("webpack");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const pkg = require("./package.json");

let libraryName = pkg.name;

module.exports = (env, argv) => {
  const isProduction = env && env.build;

  const outputFile = isProduction ? "index.min.js" : "index.js";
  const mode = isProduction ? "production" : "development";

  return {
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
};
