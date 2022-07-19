const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', ['@babel/preset-react', { runtime: 'automatic' }]] },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    static: { directory: path.join(__dirname, 'public/') },
    port: 3000,
    devMiddleware: { publicPath: 'http://localhost:3000/dist/' },
    hot: 'only',
  },
};
