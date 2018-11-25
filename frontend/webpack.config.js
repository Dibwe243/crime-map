const path = require('path');
//const murderIncon= require (path.resolve(__dirname, 'src/icons/Murder.svg'));

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
      rules:[
          {
            test:/\.css$/,
            loader:"style-loader!css-loader"
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {loader: "babel-loader"},
            
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
            // test: /\.(jpe?g|png|gif|svg)$/i, 
            // loader: "file-loader?name=./src/icons/[name].[ext]"
          }
            
      ]
  }
};

