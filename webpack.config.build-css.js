var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	// The standard entry point and output config
	entry: {
		'styleguide': "./src/components.less",
	},
	output: {
		path: './build',
		filename: "[name].js",
		chunkFilename: "[id].js"
	},
	module: {
		loaders: [
			// Extract css files
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")
			},
			// Optionally extract less files
			// or any other compile-to-css language
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer!less-loader")
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.woff$/,
				loader: "url?limit=6500000&mimetype=application/font-woff"
			},
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
}
