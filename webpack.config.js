var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const path = require('path');
module.exports={
     entry: './src/app.js',
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
     },
     module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader','sass-loader']},
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
     },
     externals: {
         fs: '{}',
         tls: '{}',
         net: '{}',
         console: '{}',
     },
     devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        stats: "errors-only",
        hot: true,
        open: true
     },
     plugins: [new HtmlWebpackPlugin({
        title: 'elections project',
        minify: {
            collapseWhitespace: true
        },
        //hash: true,
        template: './src/index.html',
     }),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NamedModulesPlugin()
     ]
};
