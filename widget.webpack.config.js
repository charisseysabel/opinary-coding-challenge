const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = (env) => ({
  entry: './src/widget/widget.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',
    scriptType: 'text/javascript',
  },
  resolve: {
    extensions: [".ts"]
  },
})