const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    entry: {
        app: path.join(__dirname, "./src/index.js")
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[app].bundle.js"
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
        new ExtractTextPlugin("styles.css")
    ]
};