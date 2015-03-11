var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	// The standard entry point and output config
	entry: {
		styleguide: "./src/components.less",
		app:				"./src/app.jsx"
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
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
}
