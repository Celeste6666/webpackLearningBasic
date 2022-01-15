/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calculate.js":
/*!*****************************!*\
  !*** ./src/js/calculate.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"plus\": function() { return /* binding */ plus; },\n/* harmony export */   \"multiple\": function() { return /* binding */ multiple; }\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction plus(a, b) {\n  const test = new Promise((resolve) => {\n    setTimeout(() => { resolve(lodash__WEBPACK_IMPORTED_MODULE_0___default().add(a, b)); }, 1000);\n  });\n\n  test.then((res) => {\n    console.log(res);\n    return res;\n  });\n}\n\nfunction multiple(a, b) {\n  const test = new Promise((resolve) => {\n    setTimeout(() => { resolve(lodash__WEBPACK_IMPORTED_MODULE_0___default().multiply(a, b)); }, 1000);\n  });\n\n  test.then((res) => {\n    console.log(res);\n    return res;\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/calculate.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate */ \"./src/js/calculate.js\");\n\n\n\nconsole.log('index plus', lodash__WEBPACK_IMPORTED_MODULE_0___default().add(3, 2));\nconsole.log('index multiple', lodash__WEBPACK_IMPORTED_MODULE_0___default().multiply(2, 4));\n\nconsole.log('calculate plus', (0,_calculate__WEBPACK_IMPORTED_MODULE_1__.plus)(5, 2));\nconsole.log('calculate multiple',(0,_calculate__WEBPACK_IMPORTED_MODULE_1__.multiple)(6, 4));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "../node_modules/lodash/lodash.js":
/*!*************************************************************************************************!*\
  !*** delegated ../node_modules/lodash/lodash.js from dll-reference lodash_2cd6f9395fb670197d3e ***!
  \*************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference lodash_2cd6f9395fb670197d3e */ \"dll-reference lodash_2cd6f9395fb670197d3e\"))(\"../node_modules/lodash/lodash.js\");\n\n//# sourceURL=webpack:///delegated_../node_modules/lodash/lodash.js_from_dll-reference_lodash_2cd6f9395fb670197d3e?");

/***/ }),

/***/ "dll-reference lodash_2cd6f9395fb670197d3e":
/*!**********************************************!*\
  !*** external "lodash_2cd6f9395fb670197d3e" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = lodash_2cd6f9395fb670197d3e;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;