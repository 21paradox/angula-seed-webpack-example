var webpack = require("webpack");


module.exports = function (config) {
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],
    
    preprocessors: {
        // add webpack as preprocessor
        '**/*.js': ['webpack']
    },

    browsers : ['Chrome'],

    plugins: [
            require('karma-chrome-launcher'),
            require('karma-jasmine'),
            require('karma-junit-reporter'),
            require("karma-webpack")
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
