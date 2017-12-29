var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'public/dist/bundle.js',
		sourceMapFilename: 'public/dist/bundle.map.js'
	},
	devtool: '#source-map',
	module: {
		loaders: [{
			loader: 'babel',
			test: /\.js?$/,
			exclude: /(node_modules)/,
			query: {
				presets: ['react', 'es2015']
			}
		}, {
			test: /\.(css|scss|sass)$/,
			loader: 'style-loader!css-loader!postcss-loader!sass-loader',
			include: path.join(__dirname, 'public','assets','scss')
		}, {
			test: /\.(png|jpg)$/,
			loader: 'file-loader',
			include: path.join(__dirname, 'public','assets', 'img')
		}]
	}
}