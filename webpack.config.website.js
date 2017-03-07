var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	// The standard entry point and output config
	entry: {
		"styleguide": "./src/components.less",
		app: "./src/app.jsx",
		variables: "./src/external-variables.less",
	},
	output: {
		path: __dirname + "/website",
		filename: "[name].js",
		chunkFilename: "[id].js"
	},
	module: {
		rules: [
			// Extract css files
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					loader: "css-loader"
				})
			},
			// Optionally extract less files
			// or any other compile-to-css language
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						"less-loader",
					]
				})
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				options: {
					ignore: /(node_modules|bower_components)/
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.woff$/,
				loader: "url-loader",
				options: {
					limit: 6500000,
					mimetype: "application/font-woff"
				}
			},
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
}
