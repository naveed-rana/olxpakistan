const path = require('path');
// var copyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
//   plugins:[new copyPlugin(
//     [{
//     from:'./src/index.html',
//     to:'index.html'
// }]
// )],
  resolve: {
    extensions: ['.js', '.jsx']
}
  ,
  module: {
    loaders: [
      {
        test: /.jpg$/,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }

    ],
  }

};
