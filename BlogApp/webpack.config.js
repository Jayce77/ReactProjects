const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}