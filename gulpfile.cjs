const gulp = require('gulp');

const minifyHtml = require('gulp-minify-html');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const autoprefix = require('gulp-autoprefixer');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const jsonMinify = require('gulp-json-minify');
const image = require('gulp-image');
const templateCache = require('gulp-angular-templatecache');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

// Define paths
const paths = {
    src: {
        ngJsLibs: [
            'node_modules/angular/angular.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-route/angular-route.js'
        ],
        ngJsModules: [
            'app/**/*module.*js',
            '!app/lib/**',
            '!app/**/*spec.*js',
            '!app/angular-area/**'
        ],
        ngJsServices: [
            'app/**/*service.*js',
            '!app/lib/**',
            '!app/**/*spec.*js',
            '!app/angular-area/**'
        ],
        ngJsOthers: [
            'app/**/*.js',
            '!app/**/*module.*js',
            '!app/**/*spec.*js',
            '!app/**/*service.*js',
            '!app/lib/**',
            '!app/angular-area/**'
        ],
        ngJsBuildScripts: [ // order is important
            'build-temp/ngJsScripts.bundle.min.libs.js',
            'build-temp/ngJsScripts.bundle.min.modules.js',
            'build-temp/ngJsScripts.bundle.min.services.js',
            'build-temp/ngJsScripts.bundle.min.others.js',
        ],
        ngJsAll: [
            'app/**/*.js',
            '!app/angular-area/**'
        ],
        css: [
            'app/**/*.css',
            '!app/angular-area/**'
        ],
        html: [
            'app/**/*.html', 
            '!app/lib/**',
            '!app/angular-area/**'
        ],
    },
    dest: 'build-ngJs',
    temp_dest: 'build-temp',
    bundledScriptName: 'ngJsScripts.bundle.min.js'
};

// Task to clean the build directory
gulp.task('clean', function () {
    return del([paths.dest, paths.temp_dest]);
});

gulp.task('clean-temp', function () {
    return del([paths.temp_dest]);
});

// minify new or changed HTML pages
gulp.task('minify-html', function () {
    var opts = {
        empty: true, 
        quotes: true
    };

    return gulp.src(paths.src.html)
        .pipe(changed(paths.dest))
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest(paths.dest));
});

// CSS concat, auto prefix, minify, then rename output file
gulp.task('minify-css', function() {
    return gulp.src(paths.src.css)
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('bundle-ng-js-libs', function() {
    return gulp.src(paths.src.ngJsLibs)
        .pipe(sourcemaps.init())
        .pipe(concat(paths.bundledScriptName))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.libs' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp_dest));
});

gulp.task('bundle-ng-js-modules', function() {
    return gulp.src(paths.src.ngJsModules)
        .pipe(sourcemaps.init())
        .pipe(concat(paths.bundledScriptName))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.modules' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp_dest));
});

gulp.task('bundle-ng-js-services', function() {
    return gulp.src(paths.src.ngJsServices)
        .pipe(sourcemaps.init())
        .pipe(concat(paths.bundledScriptName))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.services' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp_dest));
});

gulp.task('bundle-ng-js-others', function() {
    return gulp.src(paths.src.ngJsOthers)
        .pipe(sourcemaps.init())
        .pipe(concat(paths.bundledScriptName))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.others' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp_dest));
});

// Concatenate all build scripts
gulp.task('concat-build-scripts', function () {
    return gulp.src(paths.src.ngJsBuildScripts, {"allowEmpty": true})
        .pipe(sourcemaps.init())
        .pipe(concat(paths.bundledScriptName))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest));
});

// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', gulp.series(
    gulp.parallel(
        'bundle-ng-js-libs', 
        'bundle-ng-js-modules',
        'bundle-ng-js-services',
        'bundle-ng-js-others'
    ),
    'concat-build-scripts'
));

gulp.task('default', gulp.series(
    'clean',
    'bundle-scripts',
    'clean-temp'
));

// Watch for changes
gulp.task('watch', function () {
  gulp.watch(paths.src.ngJsAll, gulp.series('bundle-scripts'));
});
