"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ScrollDownMessage.tsx":
/*!**********************************************!*\
  !*** ./src/components/ScrollDownMessage.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ScrollDownMessage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex row space-x-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-outline-1 text-white text-xl mt-4 animate-bounce\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#about-me-card\",\n                    children: \"Meet Me\"\n                }, void 0, false, {\n                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ScrollDownMessage.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ScrollDownMessage.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-outline-1 text-white text-xl mt-4 animate-bounce\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ScrollDownMessage.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-outline-1 text-white text-xl mt-4 animate-bounce\",\n                children: \"Contact Me\"\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ScrollDownMessage.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ScrollDownMessage.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ScrollDownMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollDownMessage);\nvar _c;\n$RefreshReg$(_c, \"ScrollDownMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGxEb3duTWVzc2FnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLG9CQUE4QjtJQUNsQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVzs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBRUMsTUFBSzs4QkFBaUI7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQXdEOzs7Ozs7MEJBR3ZFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBd0Q7Ozs7Ozs7Ozs7OztBQUs3RTtLQWhCTUY7QUFrQk4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TY3JvbGxEb3duTWVzc2FnZS50c3g/Yjk4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JvbGxEb3duTWVzc2FnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9IFwiZmxleCByb3cgc3BhY2UteC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW91dGxpbmUtMSB0ZXh0LXdoaXRlIHRleHQteGwgbXQtNCBhbmltYXRlLWJvdW5jZVwiPlxuICAgICAgICA8YSBocmVmPVwiI2Fib3V0LW1lLWNhcmRcIj5cbiAgICAgICAgICBNZWV0IE1lXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW91dGxpbmUtMSB0ZXh0LXdoaXRlIHRleHQteGwgbXQtNCBhbmltYXRlLWJvdW5jZVwiPlxuICAgICAgUG9ydGZvbGlvXG4gICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtb3V0bGluZS0xIHRleHQtd2hpdGUgdGV4dC14bCBtdC00IGFuaW1hdGUtYm91bmNlXCI+XG4gICAgICBDb250YWN0IE1lXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxEb3duTWVzc2FnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNjcm9sbERvd25NZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ScrollDownMessage.tsx\n"));

/***/ })

});