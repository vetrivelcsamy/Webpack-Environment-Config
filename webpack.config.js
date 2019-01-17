const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return merge({
            mode,
            output: {
                filename: "bundle.js"
            },
            //dev server
            devServer: {
                historyApiFallback: true,
                contentBase: './',
                host: process.env.IP,
                //https: true,
                port: process.env.PORT,
                "public": "npm-world-vetrivelcsamy.c9users.io" //no trailing slash
            },
            plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
        },
        modeConfig(mode)
    );
};
