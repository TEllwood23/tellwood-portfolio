/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/about"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Ftellwood23%2Fcode%2FTEllwood23%2Ftellwood-portfolio%2Fnextjs-frontend%2Fsrc%2Fpages%2Fabout.tsx&page=%2Fabout!":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Ftellwood23%2Fcode%2FTEllwood23%2Ftellwood-portfolio%2Fnextjs-frontend%2Fsrc%2Fpages%2Fabout.tsx&page=%2Fabout! ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/about\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/about.tsx */ \"./src/pages/about.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/about\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGdGVsbHdvb2QyMyUyRmNvZGUlMkZURWxsd29vZDIzJTJGdGVsbHdvb2QtcG9ydGZvbGlvJTJGbmV4dGpzLWZyb250ZW5kJTJGc3JjJTJGcGFnZXMlMkZhYm91dC50c3gmcGFnZT0lMkZhYm91dCEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvREFBdUI7QUFDOUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzUzMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9hYm91dFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL2Fib3V0LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvYWJvdXRcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Ftellwood23%2Fcode%2FTEllwood23%2Ftellwood-portfolio%2Fnextjs-frontend%2Fsrc%2Fpages%2Fabout.tsx&page=%2Fabout!\n"));

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Container = (param)=>{\n    let { children, bgColor = \"bg-white\", maxWidth = \"max-w-1440\", backgroundImage, backgroundOpacity = 0.8 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative \".concat(bgColor, \" \").concat(maxWidth, \" mx-auto p-4\"),\n        children: [\n            backgroundImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-cover bg-center z-0\",\n                style: {\n                    backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                    opacity: backgroundOpacity\n                }\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/Container.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 justify-center\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/Container.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/Container.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQVV6QyxNQUFNQyxZQUFzQztRQUFDLEVBQzNDQyxRQUFRLEVBQ1JDLFVBQVUsVUFBVSxFQUNwQkMsV0FBVyxZQUFZLEVBQ3ZCQyxlQUFlLEVBQ2ZDLG9CQUFvQixHQUFHLEVBQ3hCO0lBQ0MscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVcsWUFBdUJKLE9BQVhELFNBQVEsS0FBWSxPQUFUQyxVQUFTOztZQUM3Q0MsaUNBQ0MsOERBQUNFO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNMSixpQkFBaUIsT0FBdUIsT0FBaEJBLGlCQUFnQjtvQkFDeENLLFNBQVNKO2dCQUNYOzs7Ozs7MEJBR0osOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNaTjs7Ozs7Ozs7Ozs7O0FBSVQ7S0F2Qk1EO0FBeUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci50c3g/YjMzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQ29udGFpbmVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBiZ0NvbG9yPzogc3RyaW5nO1xuICBtYXhXaWR0aD86IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kT3BhY2l0eT86IG51bWJlcjtcbn1cblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GQzxDb250YWluZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgYmdDb2xvciA9ICdiZy13aGl0ZScsXG4gIG1heFdpZHRoID0gJ21heC13LTE0NDAnLFxuICBiYWNrZ3JvdW5kSW1hZ2UsXG4gIGJhY2tncm91bmRPcGFjaXR5ID0gMC44LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtiZ0NvbG9yfSAke21heFdpZHRofSBteC1hdXRvIHAtNGB9PlxuICAgICAge2JhY2tncm91bmRJbWFnZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWNvdmVyIGJnLWNlbnRlciB6LTBcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXG4gICAgICAgICAgICBvcGFjaXR5OiBiYWNrZ3JvdW5kT3BhY2l0eSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiYmdDb2xvciIsIm1heFdpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZE9wYWNpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Container.tsx\n"));

/***/ }),

/***/ "./src/pages/about.tsx":
/*!*****************************!*\
  !*** ./src/pages/about.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n\n\nconst AboutPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        bgColor: \"bg-blue-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to My Next.js App\"\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/about.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"This is the about page.\"\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/about.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/about.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AboutPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutPage);\nvar _c;\n$RefreshReg$(_c, \"AboutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEO0FBSWhELE1BQU1DLFlBQVk7SUFDaEIscUJBQ0UsOERBQUNELDZEQUFTQTtRQUFDRSxTQUFROzswQkFDakIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFTVDtLQWJNSDtBQWVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC50c3g/NzNmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0Nhcm91c2VsJztcbmltcG9ydCBPbmx5Q2xpZW50IGZyb20gJy4uL2NvbXBvbmVudHMvT25seUNsaWVudCc7XG5cbmNvbnN0IEFib3V0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGJnQ29sb3I9XCJiZy1ibHVlLTEwMFwiPlxuICAgICAgPGgxPldlbGNvbWUgdG8gTXkgTmV4dC5qcyBBcHA8L2gxPlxuICAgICAgPHA+VGhpcyBpcyB0aGUgYWJvdXQgcGFnZS48L3A+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICAvL1JlbmRlcmluZyBDYXJvdXNlbCBoZXJlIHdoaWxlIEkgdHJ5IHRvIGdldCB0aGlzIGZlYXR1cmUgdG8gd29ya1xuICAgIC8vV3JhcHBlZCBpbiBcIk9ubHlDbGllbnRcIiBjb21wb25lbnQgYXMgcGFydCBmbyBlZmZvcnQgdG8gZGUtYnVnXG4gICAgLy8gPE9ubHlDbGllbnQ+XG4gICAgLy8gICB7LyogPENhcm91c2VsIC8+ICovfVxuICAgIC8vIDwvT25seUNsaWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJBYm91dFBhZ2UiLCJiZ0NvbG9yIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Ftellwood23%2Fcode%2FTEllwood23%2Ftellwood-portfolio%2Fnextjs-frontend%2Fsrc%2Fpages%2Fabout.tsx&page=%2Fabout!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);