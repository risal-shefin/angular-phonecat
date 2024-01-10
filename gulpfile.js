var gulp = require('gulp');

var minifyHtml = require('gulp-minify-html');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var jsonMinify = require('gulp-json-minify');
var image = require('gulp-image');

// minify new or changed HTML pages
gulp.task('minify-html', function () {
    var opts = {
        empty: true, 
        quotes: true
    };

    var htmlPath = {
        htmlSrc: ['./app/**/*.html', '!./app/lib/**/*.html'], 
        htmlDest: './build_prod/'
    };

    return gulp.src(htmlPath.htmlSrc)
        .pipe(changed(htmlPath.htmlDest))
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest(htmlPath.htmlDest));
});

// CSS concat, auto prefix, minify, then rename output file
gulp.task('minify-css', function() {
    var cssPath = {
        cssSrc:['./app/**/*.css'],
        cssDest:'./build_prod/'
    };
     
    return gulp.src(cssPath.cssSrc)
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(cssPath.cssDest));
});

gulp.task('bundle-angular-modules', function() {
    var jsPath = {
        jsSrc:['./app/**/*module.js', '!./app/lib/**/*.js'],
        jsDest:'./build_prod/'
    };

    return gulp.src(jsPath.jsSrc)
        .pipe(concat('ng-modules.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsPath.jsDest));
});

gulp.task('bundle-angular-non-modules', function() {
    var jsPath = {
        jsSrc:['./app/**/*.js', '!./app/**/*module.js', '!./app/**/*spec.js', '!./app/lib/**/*.js'],
        jsDest:'./build_prod/'
    };

    return gulp.src(jsPath.jsSrc)
        .pipe(concat('ng-non-modules.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsPath.jsDest));
});

gulp.task('bundle-lib-scripts', function() {
    var jsPath = {
        jsSrc: [
            './node_modules/jquery/dist/jquery.js', 
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/angular-route/angular-route.js'
        ],
        jsDest:'./build_prod/'
    };

    return gulp.src(jsPath.jsSrc)
        .pipe(concat('libs.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsPath.jsDest));
});
 
// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', gulp.parallel('bundle-angular-modules', 'bundle-angular-non-modules', 'bundle-lib-scripts'));

// Json
gulp.task('minify-json', function() {
    var jsonPath = {
        jsonSrc:['./app/**/*.json'],
        jsonDest:'./build_prod/'
    };
     
    return gulp.src(jsonPath.jsonSrc)
        .pipe(jsonMinify())
        .pipe(gulp.dest(jsonPath.jsonDest));
});

// Image copy
gulp.task('copy-img', function() {
    var imgPath = {
        imgSrc:['./app/img/**/*'],
        imgDest:'./build_prod/img/'
    };
     
    return gulp.src(imgPath.imgSrc)
        .pipe(image())
        .pipe(gulp.dest(imgPath.imgDest));
});

gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'bundle-scripts', 'minify-json', 'copy-img'));
