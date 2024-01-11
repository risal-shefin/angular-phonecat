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

/***/ "./app/app.module.ajs.js":
/*!*******************************!*\
  !*** ./app/app.module.ajs.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n// Define the `phonecatApp` AngularJS module\r\nangular.module('phonecatApp', [\r\n    'ngAnimate',\r\n    'ngRoute',\r\n    'core',\r\n    'phoneDetail',\r\n    'phoneList',\r\n]);\r\n//# sourceMappingURL=app.module.ajs.js.map\n\n//# sourceURL=webpack://angular-phonecat/./app/app.module.ajs.js?");

/***/ }),

/***/ "./app/core/core.module.js":
/*!*********************************!*\
  !*** ./app/core/core.module.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Define the `core` module\r\nangular.module('core', ['core.phone']);\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/core/core.module.js?");

/***/ }),

/***/ "./app/core/phone/phone.module.js":
/*!****************************************!*\
  !*** ./app/core/phone/phone.module.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Define the `core.phone` module\r\nangular.module('core.phone', ['ngResource']);\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/core/phone/phone.module.js?");

/***/ }),

/***/ "./app/phone-detail/phone-detail.module.js":
/*!*************************************************!*\
  !*** ./app/phone-detail/phone-detail.module.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Define the `phoneDetail` module\r\nangular.module('phoneDetail', [\r\n  'ngRoute',\r\n  'core.phone'\r\n]);\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/phone-detail/phone-detail.module.js?");

/***/ }),

/***/ "./app/phone-list/phone-list.module.js":
/*!*********************************************!*\
  !*** ./app/phone-list/phone-list.module.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Define the `phoneList` module\r\nangular.module('phoneList', ['core.phone']);\r\n\n\n//# sourceURL=webpack://angular-phonecat/./app/phone-list/phone-list.module.js?");

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
/******/ 	__webpack_modules__["./app/app.module.ajs.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/phone-list/phone-list.module.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/phone-detail/phone-detail.module.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./app/core/core.module.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/core/phone/phone.module.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;