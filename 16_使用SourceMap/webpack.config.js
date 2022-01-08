const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
	'eval',
	'eval-cheap-source-map',
	'eval-cheap-module-source-map',
	'eval-source-map',
	'nosources-source-map',
].map(devtool => ({
	mode: "development",
	entry: './src/js/index.js',
	output: {
		path: `${__dirname}/dist`,
		filename: `${devtool}.js`,
	},
	devtool,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.m?js$/i,
        exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader?cacheDirectory=true',
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: `${devtool}.html`,
		})
	]
}));