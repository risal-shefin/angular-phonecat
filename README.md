# Instruction Guideline

**Environment:** <br>
    Node Verison: 20.9.0 <br>
    npm Version: 10.2.3 <br>
    Angular Version: 17.0.1 <br>
    Angular JS Version: 1.8.3 <br>
    
**Example Repository:** <br>
      Webpack+Angular Devkit Build:
	https://github.com/risal-shefin/angularJS-phonecat-to-angular/tree/master <br>
      Gulp to Webpack Journey:
	https://github.com/risal-shefin/angularJS-phonecat-to-angular/tree/gulp-to-webpack <br>
      Gulp+Angular Devkit Build: 
https://github.com/risal-shefin/angularJS-phonecat-to-angular/tree/gulp-with-angular-devkit <br>
      Hybrid Unit Testing:
https://github.com/risal-shefin/angularJS-phonecat-to-angular/tree/hybrid-unit-testing-attempt <br>
 
**Note: You can watch the PRs (both open & closed) as well for better understanding**
  
**Instructions:**
<ol>
  <li> First, follow "README-angular-upgrade-basic.md" to learn how to transform an angular js app into an angular js + angular hybrid app. </li>
  <li> To incorporate build tools, move the index.html to the app directory and remove all the scrips and styles references. The build tools will take care of scripts, style bundling & referencing. </li>
  <li>For a hybrid app, the primary mechanism is the following:
      <ul> 
        <li>We will bundle the angular JS files using Webpack or Gulp and store the bundled files in a directory.</li>
        <li>After that, we will include the bundled files in angular.json’s “scripts”, “assets”, or “styles” section where applicable.</li>
        <li>As a result, “ng build”, “ng serve”, etc. commands will include the angular js build files as well.</li>
        <li>For the “ng test” command to work for both angular js and angular tests, we need to use a custom karma config file and include the bundled angular js file in the karma config.</li>
      </ul>
  </li>
  <li>Try to put the angular js section and angular section in separate directories. It will be easier to maintain them.</li>
  <li>To unit test hybrid (angular + angular js) sections, we need to mock the necessary parts. For example: if there is an angular js component using angular service, while testing the angular js component, we need to mock the service in our angular js unit test.
  <ul>
    <li>In js, for injecting mock providers, inject it inside beforeEach() like this: <br>
      
      angular.mock.module(function($provide) {
        $provide.value("phone", mockPhoneService);
      })

  </li>
    <li>If you get “Error: Injector already created, can not register a module!", create an empty object to mock the service at first and inject it into the provider. Implement the mock service later because we shouldn't inject anything before injecting this mock service in the mock module.
    </li>
  </ul>
  </li>
  <li> 
    For testing the directives that extend UpgradeComponent, we can only test component creation using it. 
    <ul>
      <li>
        To bootstrap the angular js, use `TestBed.inject(UpgradeModule).bootstrap(document.documentElement, ['phonecatApp'])`
      </li>
      <li>
        If you get this error: “NullInjectorError: No provider for $scope!”, use “{provide: '$scope', useExisting: '$rootScope'}” under “providers” in TestBed.configureTestingModule({})
      </li>
    </ul> 
  </li>
  <li>If you get errors like this: “Expected to be running in 'ProxyZone'...”, kindly upgrade to Angular v17 and zone.js v0.14.</li>
  <li>If you get any unexpected errors using templateUrl or $templateRequest, use “<ng-include src=”your_url”></ng-include>”. See this error for example: https://github.com/risal-shefin/angularJS-phonecat-to-angular/pull/8 </li>
<li>If you are injecting HTML into $templateCache using gulp, don’t forget to check if your template URL matches with one in the generated script. Leading “/” matters.</li>
<li>If you get “ReferenceError: primordials is not defined”, pin your version of the graceful-fs package to 4.2.11 by adding this in package.json:
  
	"overrides": {
      "graceful-fs": "^4.2.11"
 	}
  </li>
  
</ol>

**Note: If you use webpack instead of gulp, update karma.conf.js, package.json, and angular.json accordingly if needed.**