var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	// The standard entry point and output config
	entry: {
		"canopy-styleguide": "./src/styleguide.js",
	},
	output: {
		path: path.resolve(__dirname, "sofe"),
		filename: "[name].js",
		library: "styleguide",
		libraryTarget: "umd",
		chunkFilename: "[id].js"
	},
	externals: {
		"react": "react",
		"react-dom": "react-dom",
		"lodash": "lodash",
		"jquery": "jquery",
	},
	devtool: "sourcemap",
	module: {
		rules: [
			// Extract css files
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: "[name]__[local]--[hash:base64:5]"
						}
					},
					"postcss-loader"
				]
			},
			// Optionally extract less files
			// or any other compile-to-css language
			{
				test: /\.less$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					},
					"postcss-loader",
					"less-loader"
				]
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query: {
					ignore: /(node_modules|bower_components)/,
					presets: [
						"es2015",
						"stage-2"
					],
					plugins: [
						[
							"transform-react-jsx",
							{ "pragma": "h" }
						],
					]
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.woff$/,
				loader: "url-loader",
				query: {
					limit: 6500000,
					mimetype: "application/font-woff"
				}
			},
			{
				test: /\.ttf$/,
				loader: "url-loader",
				query: {
					limit: 6500000,
					mimetype: "application/octet-stream",
					name: "fonts/[name].[ext]"
				}
			},
			{
				test: /\.eot$/,
				loader: "url-loader",
				query: {
					limit: 6500000,
					mimetype: "application/octet-stream",
					name: "fonts/[name].[ext]"
				}
			},
			{
				test: /\.svg$/,
				loader: "url-loader",
				query: {
					limit: 6500000,
					mimetype: "image/svg+xml",
					name: "fonts/[name].[ext]"
				}
			}
		]
	},
}
