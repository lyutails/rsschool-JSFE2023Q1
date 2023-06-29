const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { DefinePlugin } = require('webpack');
const EslintPlugin = require('eslint-webpack-plugin');

require('dotenv').config();
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const plugins = [
  new DefinePlugin({
    'process.env': JSON.stringify(process.env)
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    favicon: './refs/seasons/seasons_tree.png',
    minify: {
      collapseWhitespace: !isDev,
      removeComments: !isDev
    }
  }),
  new MiniCssExtractPlugin({
    filename: isDev ? 'name.css' : '[name].[contenthash].css',
    chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
  }),
  new EslintPlugin({ extensions: 'ts' }),
]
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode,
  entry: './index.ts',
  output: {
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'public/[name].[contenthash][ext][query]',
    clean: true,
  },
  resolve: {
    extensions: ['.js','.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/')
    }
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 9600,
    hot: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:7]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /^((?!\.module).)*s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      }
    ]
  }
}
