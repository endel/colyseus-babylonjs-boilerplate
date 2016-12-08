const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (function(options) {
  return {
    entry: {
      main: path.resolve('src/index.ts')
    },

    output: {
      path: __dirname + "/dist",
      filename: 'bundle.js'
    },

    devtool: 'cheap-source-map',

    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader" }) },
        { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=1024&name=[name].[ext]' },
      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        BABYLON: "babylonjs"
      }),
      new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin({
        template: path.resolve("src", "index.html")
      }),
    ],

    resolve: {
      extensions: ['.ts', '.js', '.json']
    }

  }
})();
