//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var fs = require('fs');

const ENTRY_DIR = './assets/js/containers';
var files = fs.readdirSync(path.resolve(ENTRY_DIR));
var entries = {};

files.forEach(fileName => {
  var extRegExp = /\.jsx/;
  if(extRegExp.test(fileName)){
    var entryName = fileName.split('.')[0];
    entries[entryName] = ENTRY_DIR + '/' + fileName;
  }
});

module.exports = {
    context: __dirname,
    entry: entries,

    output: {
      path: path.resolve('./assets/bundles/'), 
      filename: '[name]-[hash].js', 
    },
    
    plugins: [
      new BundleTracker({filename: './webpack-stats.json'}), 
    ],
    
    module: {
      loaders: [
        {test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader', 
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        },
        {
          test: /\.(scss)$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:6]'
          }, {
            loader: 'resolve-url-loader'
          }, {
            loader: 'sass-loader'
          }]
        }
      ]
    },
    
    resolve: {
      extensions: ['.js', '.jsx'] 
    }   
}