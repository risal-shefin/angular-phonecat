## Guideline:

**Environment:** <br>
    Node Verison: 16.15.0 <br>
    npm Version: 8.5.5 <br>
    Angular Version: 14.3.0 <br>
    Angular JS Project: https://github.com/angular/angular-phonecat/tree/master ,
	Last commit: [Click here](https://github.com/angular/angular-phonecat/commit/ef6f6eb672ded472b4e442d598f5df40d0e0642c) <br>
 
**Base Guideline:** <br>
      Link: https://angular.io/guide/upgrade#phonecat-upgrade-tutorial 

**Instructions:**
<ol>
  <li>Use the package.json, tsconfig.json, systemjs.config.js from the bottom of this doc and put them in the root folder of the project.</li>
  <li>At first, only work on the app module, main.ts, and hybrid bootstrapping (they reside between the beginning and the “Bootstrapping a hybrid PhoneCat” section). This is to test if the skeleton is working.</li>
  <li>For the dependency injection, use @Inject(type) before declaring them in the constructor. For example, 
"constructor(@Inject(HttpClient) private http: HttpClient) { }" </li>
  <li>Wherever a parameter is extracted from the URL, perform it like this: "routeParams[“phoneId”]instead of routeParams.phoneId" </li>
  <li>In the “Upgrading the Phone service” section, after upgrading the service, don’t modify the components like the angular docs. It will produce errors. Only modify the subscribe part to process observables.</li>
  <li>For others, follow the base guideline accurately.</li>
</ol>


**Example Project:** <br>
    Link: https://github.com/risal-shefin/angularJS-phonecat-to-angular/tree/angular14-upgrade <br>
    Webpack+Angular CLI integration (working npm start & npm build commands): <br>
    https://github.com/risal-shefin/angularJS-phonecat-to-angular/tree/gulp-to-webpack <br>
    
**Files:**<br>
```
package.json:

{
  "name": "angular-phonecat",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "description": "A tutorial application for AngularJS",
  "repository": "https://github.com/angular/angular-phonecat",
  "license": "MIT",
  "devDependencies": {
    "@types/angular": "^1.8.9",
    "@types/angular-animate": "^1.5.14",
    "@types/angular-aria": "^1.7.5",
    "@types/angular-cookies": "^1.8.4",
    "@types/angular-mocks": "^1.7.4",
    "@types/angular-resource": "^1.5.20",
    "@types/angular-route": "^1.7.6",
    "@types/angular-sanitize": "^1.8.4",
    "@types/jasmine": "^5.1.4",
    "bower": "^1.7.7",
    "http-server": "^0.9.0",
    "jasmine-core": "^2.4.1",
    "karma": "^6.4.2",
    "karma-chrome-launcher": "^0.2.3",
    "karma-firefox-launcher": "^0.1.7",
    "karma-jasmine": "^0.3.8",
    "protractor": "^4.0.9",
    "typescript": "^5.3.3"
  },
  "scripts": {
    "prestart": "npm install",
    "pretest": "npm install",
    "preprotractor": "npm run update-webdriver",
    "preupdate-webdriver": "npm install",
    "protractor": "protractor e2e-tests/protractor.conf.js",
    "start": "http-server ./ -a localhost -p 8000 -c-1",
    "test": "karma start karma.conf.js",
    "test-single-run": "karma start karma.conf.js --single-run",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "update-webdriver": "webdriver-manager update",
    "update-index-async": "node -e \"var fs=require('fs'),indexFile='app/index-async.html',loaderFile='app/bower_components/angular-loader/angular-loader.min.js',loaderText=fs.readFileSync(loaderFile,'utf-8').split(/sourceMappingURL=angular-loader.min.js.map/).join('sourceMappingURL=bower_components/angular-loader/angular-loader.min.js.map'),indexText=fs.readFileSync(indexFile,'utf-8').split(/\\/\\/@@NG_LOADER_START@@[\\s\\S]*\\/\\/@@NG_LOADER_END@@/).join('//@@NG_LOADER_START@@\\n'+loaderText+'    //@@NG_LOADER_END@@');fs.writeFileSync(indexFile,indexText);\""
  },
  "dependencies": {
    "@angular/common": "^14.3.0",
    "@angular/compiler": "^14.3.0",
    "@angular/core": "^14.3.0",
    "@angular/forms": "^14.3.0",
    "@angular/platform-browser": "^14.3.0",
    "@angular/platform-browser-dynamic": "^14.3.0",
    "@angular/router": "^14.3.0",
    "@angular/upgrade": "^14.3.0",
    "rxjs": "^7.8.1",
    "systemjs": "0.21.6",
    "systemjs-plugin-babel": "^0.0.25",
    "zone.js": "^0.12.0"
  }
}

tsconfig.json:

/* To learn more about this file see: https://angular.io/guide/typescript-configuration. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "baseUrl": "./",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2015",
    "module": "ES2015",
    "useDefineForClassFields": false,
    "lib": ["ES2015", "dom"],
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true
  },
  "angularCompilerOptions": {
    "disableTypeScriptVersionCheck": true,
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

systemjs.config.js:

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      'npm:': '/node_modules/',
    },
    map: {
      'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
      'ng-loader': './systemjs-angular-loader.js',
      app: '/app',
      '@angular/core': 'npm:@angular/core/fesm2015/core.mjs',
      '@angular/common': 'npm:@angular/common/fesm2015/common.mjs',
      '@angular/common/http': 'npm:@angular/common/fesm2015/http.mjs',
      '@angular/compiler': 'npm:@angular/compiler/fesm2015/compiler.mjs',
      '@angular/platform-browser': 'npm:@angular/platform-browser/fesm2015/platform-browser.mjs',
      '@angular/platform-browser-dynamic':
        'npm:@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.mjs',
      '@angular/router': 'npm:@angular/router/fesm2015/router.mjs',
      '@angular/router/upgrade': 'npm:@angular/router/fesm2015/upgrade.mjs',
      '@angular/forms': 'npm:@angular/forms/fesm2015/forms.mjs',
      '@angular/upgrade': 'npm:@angular/upgrade/fesm2015/upgrade.mjs',
      '@angular/upgrade/static': 'npm:@angular/upgrade/fesm2015/static.mjs',

      rxjs: 'npm:rxjs/dist/cjs',
      'rxjs/operators': 'npm:rxjs/dist/cjs/operators',
      tslib: 'npm:tslib/tslib.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',

      'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    },

    transpiler: 'plugin-babel',
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        // defaultExtension: 'js',
        // meta: {
        //   './*.js': {
        //     loader: 'ng-loader',
        //   },
        // },
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js',
      },
      rxjs: {
        defaultExtension: 'js',
        format: 'cjs',
        main: 'index.js',
      },
      'rxjs/operators': {
        defaultExtension: 'js',
        format: 'cjs',
        main: 'index.js',
      },
      meta: {
        '*.mjs': {
          babelOptions: {
            es2015: false,
          },
        },
      },
    },
  });
})(this);
```