const webpack = require('webpack');
const path = require('path');

module.exports = () => ({
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