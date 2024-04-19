import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FileManagerPlugin  from "filemanager-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name].[hash][ext]",
  },

  

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      //SASS Loader
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //CSS Loader
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      //Images
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new Dotenv(),

    //HTML
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./public/favicon.png",
    }),
    //FileManager
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),

    //CSS
    new MiniCssExtractPlugin({
      filename: "build.[contenthash].css",
    }),
  ],

  devServer: {
    watchFiles: "./src",
    port: 9000,
  },
};
