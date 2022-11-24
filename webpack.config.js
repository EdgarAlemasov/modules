const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtraPlugin = require("mini-css-extract-plugin");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtraPlugin.loader, css.loader
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            'template': "./src/index.html",
            'filename': "./index.html"
        }),
        new MiniCssExtraPlugin({
            "filename": "style.css"
        }),
        new CleanWebpackPlugin()
    ],
};