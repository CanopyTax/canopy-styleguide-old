module.exports = {
	// The standard entry point and output config
	entry: {
		styleguide: "./src/components.less",
		variables:  "./src/external-variables.less",
		app:				"./src/app.jsx"
	},
	output: {
		path: './build',
		filename: "[name].js",
		chunkFilename: "[id].js"
	},
	devtool: "sourcemap",
	module: {
		loaders: [
			// Extract css files
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer"
			},
			// Optionally extract less files
			// or any other compile-to-css language
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!autoprefixer!less-loader"
			},
			{
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
	]
}
