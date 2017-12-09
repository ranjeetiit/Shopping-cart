const webpack = require('webpack');
const path = require('path');
const paths = require("./paths");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body',
	minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
    }
})

module.exports = {
	devtool: "cheap-module-eval-source-map",
  	entry: './src/index.jsx',
  	output: {
    	path: path.resolve('dist'),
   		filename: 'index_bundle.js'
  	},
	module: {
		loaders: [
		  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
		  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
  	plugins: [
  		HtmlWebpackPluginConfig,
	  	new webpack.DefinePlugin({
			"process.env": { 
		     	NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') 
		   	}
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false,
		        screw_ie8: true,
		        conditionals: true,
		        unused: true,
		        comparisons: true,
		        sequences: true,
		        dead_code: true,
		        evaluate: true,
		        if_return: true,
		        join_vars: true
		    },
		    output: {
		        comments: false
		    }
		})
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
   resolve: {
    extensions: [".js", ".jsx"],
    modules: [paths.appSrc, "node_modules"],
    alias: {
      Lib: path.resolve(paths.appSrc, "lib/"),
      Components: path.resolve(paths.appSrc, "components/"),
      Constants: path.resolve(paths.appSrc, "constants/"),
      Containers: path.resolve(paths.appSrc, "containers/"),
      Pages: path.resolve(paths.appSrc, "pages/"),
      Reducers: path.resolve(paths.appSrc, "reducers/"),
      Store: path.resolve(paths.appSrc, "store/"),
      Styles: path.resolve(paths.appSrc, "styles/"),
      Root: path.resolve(paths.appRoot)
    }
  }
}