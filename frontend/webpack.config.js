const path = require ('path');
const autoprefixer = require('autoprefixer');
module.exports =[{
  entry: ['./src/css/main.scss', './src/js/main.js'],
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
            { 
              test:/\.scss$/,
              use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'bundle.css',
                      }
                    },
                    
                    {
                      loader: 'postcss-loader',
                      options: {
                         plugins: () => [autoprefixer()]
                      }
                    },
                    {loader:'extract-loader'},
                    
                    {loader:'css-loader'},
                    {
                      loader:'sass-loader',
                      options: {
                        includePaths: ['./node_modules']
                      }
                  
                  },
                  
                  ]
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015'],
                plugins: ['transform-object-assign']
              },
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
              // test: /\.(jpe?g|png|gif|svg)$/i, 
              // loader: "file-loader?name=./src/icons/[name].[ext]"
            },
    ]
  }
}]
/* module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
      rules:[
          
          { 
            test: /\.css$/, 
            // loader: "style-loader!css-loader"
            include: path.appSrc,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader')
               ],      
           },
           
           {
            test: /\.scss$/,
            loaders: [
              'style-loader',
              'css-loader',
              'resolve-url-loader'
             
            ]
           
          },
          
           
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use:{
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }

            }
            
         
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
            // test: /\.(jpe?g|png|gif|svg)$/i, 
            // loader: "file-loader?name=./src/icons/[name].[ext]"
          }
            
      ]
  }
}; */

