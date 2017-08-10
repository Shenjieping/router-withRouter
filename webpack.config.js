var path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.build.js',
		publicPath: '/build/',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.join(__dirname, 'src'),
			loader: 'babel',
		}],
	},
}