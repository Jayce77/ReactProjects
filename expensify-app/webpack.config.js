//entry -> output
const path = require('path')

module.exports = {
    //entry: "./src/app.js",
    entry: "./src/playground/redux-101.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
// loader defines how files get transformed when used by web pack
    module: {
        rules:[{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}