const webpack = require('webpack');
const path = require('path');

module.exports = () => ({
  entry: './src/embed/embed.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'embed.js',
  },
})