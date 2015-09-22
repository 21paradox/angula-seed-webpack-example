var webpack = require("webpack");
var path = require('path');
var webpackConfig = require("./webpack.config.js");
var bowerPlugin = new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"]);

module.exports = function (config) {
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/build/angular-ui-router.js',
      'app/**/*_test.js', //add all test files inside app/
      'app/**/*_spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],
    
    preprocessors: {
        // add webpack as preprocessor
        'app/**/*.js': ['webpack'],
    },
    
     // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    browsers : ['Chrome'],

    plugins: [
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-jasmine'),
            require('karma-mocha-reporter'),
            require("karma-webpack")
            ],

    
    webpack: {

      module: {
        loaders: [
          // CSS loader
          {
            test: /\.css$/,
            //exclude: /node_modules/, //not exclude we need boostrap here
            loader: "style-loader!css-loader"
          },
          // SCSS loader
          {
            test: /\.scss/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!sass-loader"
          },
			
          // Babel loader. Transforms .es6 file from es6->es5 before it's added to bundle.js
          {
            test: /\.js$/, // include .es6 files
            exclude: /(node_modules|bower_components)/, // exclude node_modules and bower_components
            loader: "babel-loader"
          },
          // html loader
          {
            test: /\.html/,
            loader: 'raw'
          },
			
          // img/fonts loader
          {
            test: /\.(png|jpg|gif|eot|ttf|svg|woff|woff2)/,
            loader: 'url-loader?limit=1000'
          },
			
          // {
          // 	test: /bootstrap\/js\//, 
          // 	loader: 'imports?jQuery=jquery'
          // },
        ]
      },
      
      plugins:[
        new webpack.ResolverPlugin(bowerPlugin)
      ],
      
      resolve: {
        modulesDirectories: ['node_modules', path.resolve("app/bower_components")],
      }
    }

  });
};
