// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      files: [
        'build-webpack-ngJs/ngJsScripts.bundle.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/**/*.spec.js'
      ],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma'),
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      browsers: ['Chrome'],
      restartOnFileChange: true
    });
  };
  