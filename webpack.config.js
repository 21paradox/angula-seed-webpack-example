var path = require('path');
var webpack = require('webpack');

// needed to generate the CSS bundle file. https://github.com/webpack/extract-text-webpack-plugin
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Move the shared parts of the files into shared.js.
// Try taking this out to see the difference...
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var bowerPlugin = new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"]);


module.exports = {
	entry: './app/app.js',

	output: {
		// where the bundle actually lives
		path: path.resolve('build/asset'), // save the generated files in /build/js/ on the server
		// where the bundle will be served up from on the server
		publicPath: '/asset/', // serve that file up at /assets/ on the server
		filename: "bundle.js",
		chunkFilename: "[id].bundle.[hash].js" //add hash here to refresh cache
	},

	plugins: [
        new ExtractTextPlugin("bundle.css"), // define output css file
		new webpack.ResolverPlugin(bowerPlugin), // 
		new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({	//global namespace for legacy module
            $: "jquery",
            jQuery: "jquery",
			"window.jQuery": "jquery"
        })
    ],

	devServer: {
		// load index.html from /public
		contentBase: 'build'
	},
	
	// turn on source maps
	devtool: 'source-map',

	// Loaders apply transformations before a file is added to bundle.js
	module: {
		loaders: [
			// CSS loader
			{
				test: /\.css$/,
				//exclude: /node_modules/, //not exclude we need boostrap here
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			// SCSS loader
			{
				test: /\.scss/,
				exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
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
		],
		
		preLoaders: [
		]
	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6', '.scss'],
		//root: [path.resolve("app/bower_components")]
		modulesDirectories: ['node_modules', path.resolve("app/bower_components")],
	}
};
