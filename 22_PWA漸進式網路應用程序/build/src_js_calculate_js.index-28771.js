"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_js_calculate_js"],{

/***/ "./src/js/calculate.js":
/*!*****************************!*\
  !*** ./src/js/calculate.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"plus\": function() { return /* binding */ plus; },\n/* harmony export */   \"multiple\": function() { return /* binding */ multiple; }\n/* harmony export */ });\nfunction plus(a, b) {\n  const test = new Promise((resolve) => {\n    setTimeout(() => { resolve(a + b); }, 1000);\n  });\n\n  test.then((res) =>{\n    console.log('plus', res)  \n    return res\n  });\n}\n\nfunction multiple(a, b) {\n  const test = new Promise((resolve) => {\n    setTimeout(() => { resolve(a * b); }, 1000);\n  });\n\n  test.then((res) => {\n    console.log('multiple', res)  \n    return res\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/calculate.js?");

/***/ })

}]);