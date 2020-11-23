const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
  entry: "./src/react.tsx",
  output: {
    // filename: "renderer.js",
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    // contentBase: "./src",
    compress: true,
    open: true,
    host: "hello.dev.com",
    disableHostCheck: true,
    port: 8090,
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    overlay: true,
    // 启用 devServer.quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。
    // 这也意味着来自 webpack 的错误或警告在控制台不可见。
    // quiet: true,
    // noInfo: true,
    // stats: 'minimal'

    // proxy: {
    //   '/api': 'http://localhost:3000'
    // }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    // new CopyPlugin({
    //   patterns: [{ from: '/index.html' }],
    // }),
    new HtmlWebpackPlugin({
      title: "Note",
      // appMountId: 'app',
      // filename: 'index.html',
      template: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "sass-loader", // 将 Sass 编译成 CSS，默认使用 Node Sass
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ]
  }
};
