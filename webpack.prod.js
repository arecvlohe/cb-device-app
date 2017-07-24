const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    alias: {
      Urls: path.resolve(__dirname, "src", "urls"),
      Store: path.resolve(__dirname, "src", "store"),
      Helpers: path.resolve(__dirname, "src", "helpers")
    }
  },
  entry: path.resolve(__dirname, "src", "index"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/static/"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
