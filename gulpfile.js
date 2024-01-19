const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const autoprefix = require('gulp-autoprefixer');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const templateCache = require('gulp-angular-templatecache');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');

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
            'build-temp/ngJsScripts.bundle.min.templates.js',
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
            '!app/index.html',
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

// Bundle AngularJS templates into a single JavaScript file
gulp.task('bundle-ng-js-templates', function () {
    return gulp.src(paths.src.html)
        .pipe(sourcemaps.init())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(templateCache({ 
            module: 'templates',
            standalone: true
         }))
        .pipe(concat(paths.bundledScriptName))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.templates' }))
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
gulp.task('default', function() {
    return runSequence(
        'clean',
        'bundle-ng-js-libs', 
        'bundle-ng-js-modules',
        'bundle-ng-js-services',
        'bundle-ng-js-others',
        'bundle-ng-js-templates',
        'concat-build-scripts',
        'clean-temp'
    );
});

// Watch for changes
gulp.task('watch', function () {
  gulp.watch(paths.src.ngJsAll, ['default']);
  gulp.watch(paths.src.html, ['default']);
});