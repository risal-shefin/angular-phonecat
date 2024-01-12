import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ngJsLibs = glob.sync([
    'node_modules/angular/angular.js',
    'node_modules/angular-animate/angular-animate.js',
    'node_modules/angular-resource/angular-resource.js',
    'node_modules/angular-route/angular-route.js'
]);

const ngJsModules = glob.sync('app/**/*module.*js', {
    ignore: [
        'app/lib/**',
        'app/**/*spec.*js',
        'app/angular-area/**'
    ]
});

const ngJsServices = glob.sync('app/**/*service.*js', {
    ignore: [
        'app/lib/**',
        'app/**/*spec.*js',
        'app/angular-area/**'
    ]
});

const ngJsOthers = glob.sync('app/**/*.js', {
    ignore: [
        'app/**/*module.*js',
        'app/**/*spec.*js',
        'app/**/*service.*js',
        'app/lib/**',
        'app/angular-area/**'
    ]
});

// the order is important to maintain angular js dependency.
const ngJsScriptsSrc = ngJsLibs.concat(ngJsModules).concat(ngJsServices).concat(ngJsOthers);

let webpackConfig = {
    mode: "development",
    entry: {
        ngJsScripts: ngJsScriptsSrc
    },
    output: {
        filename: "[name].bundle.min.js",
        path: path.resolve(__dirname, "build-webpack-ngJs")
    },
    optimization: {

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ]
    },
    resolve: {
        preferRelative: true
    },
};

export default webpackConfig;