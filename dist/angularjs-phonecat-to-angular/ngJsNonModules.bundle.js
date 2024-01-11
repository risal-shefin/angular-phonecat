/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.animations.js":
/*!*******************************!*\
  !*** ./app/app.animations.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nangular.\r\n  module('phonecatApp').\r\n  animation('.phone', function phoneAnimationFactory() {\r\n    return {\r\n      addClass: animateIn,\r\n      removeClass: animateOut\r\n    };\r\n\r\n    function animateIn(element, className, done) {\r\n      if (className !== 'selected') return;\r\n\r\n      element.css({\r\n        display: 'block',\r\n        position: 'absolute',\r\n        top: 500,\r\n        left: 0\r\n      }).animate({\r\n        top: 0\r\n      }, done);\r\n\r\n      return function animateInEnd(wasCanceled) {\r\n        if (wasCanceled) element.stop();\r\n      };\r\n    }\r\n\r\n    function animateOut(element, className, done) {\r\n      if (className !== 'selected') return;\r\n\r\n      element.css({\r\n        position: 'absolute',\r\n        top: 0,\r\n        left: 0\r\n      }).animate({\r\n        top: -500\r\n      }, done);\r\n\r\n      return function animateOutEnd(wasCanceled) {\r\n        if (wasCanceled) element.stop();\r\n      };\r\n    }\r\n  });\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/app.animations.js?");

/***/ }),

/***/ "./app/app.config.js":
/*!***************************!*\
  !*** ./app/app.config.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nangular.\r\n  module('phonecatApp').\r\n  config(['$routeProvider',\r\n    function config($routeProvider) {\r\n      $routeProvider.\r\n        when('/phones', {\r\n          template: '<phone-list></phone-list>'\r\n        }).\r\n        when('/phones/:phoneId', {\r\n          template: '<phone-detail></phone-detail>'\r\n        }).\r\n        otherwise('/phones');\r\n    }\r\n  ]);\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/app.config.js?");

/***/ }),

/***/ "./app/core/checkmark/checkmark.filter.js":
/*!************************************************!*\
  !*** ./app/core/checkmark/checkmark.filter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nangular.\r\n  module('core').\r\n  filter('checkmark', function() {\r\n    return function(input) {\r\n      return input ? '\\u2713' : '\\u2718';\r\n    };\r\n  });\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/core/checkmark/checkmark.filter.js?");

/***/ }),

/***/ "./app/core/phone/phone.service.js":
/*!*****************************************!*\
  !*** ./app/core/phone/phone.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nangular.\r\n  module('core.phone').\r\n  factory('Phone', ['$resource',\r\n    function($resource) {\r\n      return $resource('phones/:phoneId.json', {}, {\r\n        query: {\r\n          method: 'GET',\r\n          params: {phoneId: 'phones'},\r\n          isArray: true\r\n        }\r\n      });\r\n    }\r\n  ]);\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/core/phone/phone.service.js?");

/***/ }),

/***/ "./app/phone-detail/phone-detail.component.js":
/*!****************************************************!*\
  !*** ./app/phone-detail/phone-detail.component.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Register `phoneDetail` component, along with its associated controller and template\r\nangular.\r\n  module('phoneDetail').\r\n  component('phoneDetail', {\r\n    templateUrl: 'phone-detail/phone-detail.template.html',\r\n    controller: ['$routeParams', 'Phone',\r\n      function PhoneDetailController($routeParams, Phone) {\r\n        var self = this;\r\n        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {\r\n          self.setImage(phone.images[0]);\r\n        });\r\n\r\n        self.setImage = function setImage(imageUrl) {\r\n          self.mainImageUrl = imageUrl;\r\n        };\r\n      }\r\n    ]\r\n  });\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/phone-detail/phone-detail.component.js?");

/***/ }),

/***/ "./app/phone-list/phone-list.component.js":
/*!************************************************!*\
  !*** ./app/phone-list/phone-list.component.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Register `phoneList` component, along with its associated controller and template\r\nangular.\r\n  module('phoneList').\r\n  component('phoneList', {\r\n    templateUrl: 'phone-list/phone-list.template.html',\r\n    controller: ['Phone',\r\n      function PhoneListController(Phone) {\r\n        this.phones = Phone.query();\r\n        this.orderProp = 'age';\r\n      }\r\n    ]\r\n  });\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/phone-list/phone-list.component.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./app/app.config.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/app.animations.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/phone-list/phone-list.component.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/phone-detail/phone-detail.component.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/core/phone/phone.service.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/core/checkmark/checkmark.filter.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;