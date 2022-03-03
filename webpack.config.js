const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.html$/i, use: 'html-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: './src',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: env.production ? './public/index.html' : './src/index.html' }],
    }),
    new webpack.DefinePlugin({
      __CONFIG: JSON.stringify(env.config)
    })
  ]
})