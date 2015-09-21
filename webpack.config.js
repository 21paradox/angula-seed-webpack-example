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
		filename: "bundle.js"
	},

	// needed for CSS bundle
	plugins: [
		// define the name of the output css file.
        new ExtractTextPlugin("bundle.css"),
		new webpack.ResolverPlugin(bowerPlugin),
		new webpack.optimize.DedupePlugin(),
    ],

	devServer: {
		// load index.html from /public
		contentBase: 'app'
	},
	
	// turn on source maps
	devtool: 'source-map',

	// Loaders apply transformations before a file is added to bundle.js
	module: {
		loaders: [
			// CSS loader loads css file with resolved imports and returns css code
			// because we are using the plugin, it's
			{
				test: /\.css$/,
				exclude: /node_modules/,
				// when chaining loaders (via the '!'), loaders are applied from right to left
				// loader: "style-loader!css-loader"
				// first param is only used when NOT extracting CSS to a file.
				// second param is always used.
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			
			// Babel loader. Transforms .es6 file from es6->es5 before it's added to bundle.js
			// {
			// 	test: /\.js$/, // include .es6 files
			// 	exclude: /node_modules/, // exclude node_modules
			// 	loader: "babel-loader"
			// },
			
			{
				test: /\.html/,
				loader: 'raw'
			}
			
			
			
		],
		
		preLoaders: [
		]
		
	},


	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6'],
		//root: [path.resolve("app/bower_components")]
		modulesDirectories: ['node_modules', path.resolve("app/bower_components")],
	}
};
