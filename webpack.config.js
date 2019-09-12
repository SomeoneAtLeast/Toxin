let path = require("path");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
	entry: {
		app: "./src/js/index.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "main.js",
		publicPath: "dist/"
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			}, {
				test: /\.scss$/,
				use: [ 
				"style-loader",
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader"
				},
				{
					loader: "sass-loader"
				}
				]
			}, {
				test: /\.css$/,
				use: [ 
				MiniCssExtractPlugin.loader,
				"css-loader"
				]
			}
		]
	},
	 plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
   ]
};

module.exports = (env, options) => {
	let production = options.mode === "production";

	conf.devtool = production
					? "source-map"
					: "eval-sourcemap";

	return conf;
}