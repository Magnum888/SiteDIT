const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const common = {
  entry: PATHS.src + '/app.js',
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      template: './src/test.html'
    })
  ]
};
const productionConfig = {
  mode: 'production'
};
const developmentConfig = {
  mode: 'development'
};


module.exports = function(env){
  if(env === 'production'){
    return merge([
      common,
      productionConfig
    ])
  }
  if(env === 'development'){
    return merge([
      common,
      developmentConfig,
      devserver()
    ])
  }
};
