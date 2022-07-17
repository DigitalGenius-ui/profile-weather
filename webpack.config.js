const path  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // for building the app 
    mode : "development",
    // the root of the app 
    entry : {
        main : path.resolve(__dirname, "src/index.ts"),
    },
    // the output of the app
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js",
        clean : true
    },
    // loaders 
    module : {
        rules : [
            // css loader 
            {
                test : /\.(css|scss)$/,
                use : [
                    "style-loader",
                    "css-loader", 
                    "sass-loader"
                ]
            },
            // image loader 
            {
                test: /\.(png|jpe?g|gif|svg|)$/i,
                use: ['file-loader'],
            },
            // typescript
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, 
            // babel to handle the older browsers 
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    // devtool
    devServer: {
        watchFiles : ["src/**/*"],
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open : true,
        hot : true,
    },
    // typescript resolve 
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // plugins 
    plugins : [
        new HtmlWebpackPlugin({
            filename : "index.html", 
            template : path.resolve(__dirname, "src/index.html"),
        })
    ]
}