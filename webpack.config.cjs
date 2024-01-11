// import path from "path";
// import { fileURLToPath } from "url";
// import TerserPlugin from "terser-webpack-plugin";
// import ConcatPlugin from "concat-webpack-plugin";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const { ConcatWebpackPlugin } = require("concat-webpack-plugin");
const glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        angularScripts: './app/angular-area/main.js',
        ngJsModules: glob.sync('./app/**/*module.*js', {
            ignore: [
                'app/lib/**',
                'app/angular-area/**'
            ]
        }),
        ngJsNonModules: glob.sync('./app/**/*.js', {
            ignore: [
                'app/**/*module.*js',
                'app/**/*spec.*js',
                'app/lib/**',
                'app/angular-area/**'
            ]
        }),
        libs: glob.sync([
            './node_modules/jquery/dist/jquery.js', 
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/angular-route/angular-route.js'
        ])
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build-webpack")
    },
    optimization: {

    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: ["html-loader"]
            // },
            {
                test: /\.js$/,
                resolve: {
                    fullySpecified: false,
                },
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //       "style-loader", //2. Inject styles into DOM
            //       "css-loader", //1. Turns css into commonjs
            //     ]
            // },
            // {
            //     test: /\.(svg|png|jpg|gif)$/,
            //     use: {
            //       loader: "file-loader",
            //       options: {
            //         name: "[name].[hash].[ext]",
            //         outputPath: "imgs"
            //       }
            //     }
            // }
        ]
    },
    plugins: [
        //new ConcatWebpackPlugin('./build-webpack/merged.js'),
        // new HtmlWebpackPlugin({
        //     template: "./index.html"
        // })
    ],
    resolve: {
        preferRelative: true
    },
};