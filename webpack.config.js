var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

var config = {
    entry: './src/app.js',
    module: {
        loaders: [{
            test: /\.(sass|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.js$/,
            use: [
                'babel-loader'
            ],
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            use: [
                'babel-loader'
            ],
            exclude: /node_modules/
        },
        {
                test: /\.(css)$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            }]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;