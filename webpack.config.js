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
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "src", "index")
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/static/"
  },
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    stats: "minimal",
    historyApiFallback: true,
    hot: true
  }
};
