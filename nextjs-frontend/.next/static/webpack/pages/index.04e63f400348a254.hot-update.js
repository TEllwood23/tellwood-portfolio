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

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import React, { ReactNode } from 'react';\n// interface ContainerProps {\n//   children: ReactNode;\n//   bgColor?: string;\n//   maxWidth?: string;\n//   backgroundImage?: string;\n//   backgroundOpacity?: number; // Add a prop to control background opacity\n// }\n// const Container: React.FC<ContainerProps> = ({ children, bgColor = 'bg-white', maxWidth = 'max-w-1440', backgroundImage, backgroundOpacity = 0.8 }) => {\n//   return (\n//     <div className={`relative ${bgColor} ${maxWidth} mx-auto p-4`}>\n//       {backgroundImage && (\n//         <div\n//           className=\"container-absolute container-inset-0 container-bg-cover container-bg-center container-z-0\"\n//           style={{\n//             backgroundImage: `url(${backgroundImage})`,\n//             opacity: backgroundOpacity,\n//           }}\n//         />\n//       )}\n//       <div className=\"container-relative container-z-10\">\n//         {children}\n//       </div>\n//     </div>\n//   );\n// };\n// export default Container;\n// components/Container.tsx\n\n\nconst Container = (param)=>{\n    let { children, bgColor = \"bg-white\", maxWidth = \"max-w-1440\", backgroundImage, backgroundOpacity = 0.8 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative \".concat(bgColor, \" \").concat(maxWidth, \" mx-auto p-4\"),\n        children: [\n            backgroundImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-cover bg-center z-0\",\n                style: {\n                    backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                    opacity: backgroundOpacity\n                }\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/Container.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/Container.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/Container.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNENBQTRDO0FBRTVDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsNEVBQTRFO0FBQzVFLElBQUk7QUFFSiwySkFBMko7QUFDM0osYUFBYTtBQUNiLHNFQUFzRTtBQUN0RSw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLGtIQUFrSDtBQUNsSCxxQkFBcUI7QUFDckIsMERBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWCw0REFBNEQ7QUFDNUQscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixhQUFhO0FBQ2IsT0FBTztBQUNQLEtBQUs7QUFFTCw0QkFBNEI7QUFHNUIsMkJBQTJCOztBQUNjO0FBVXpDLE1BQU1DLFlBQXNDO1FBQUMsRUFDM0NDLFFBQVEsRUFDUkMsVUFBVSxVQUFVLEVBQ3BCQyxXQUFXLFlBQVksRUFDdkJDLGVBQWUsRUFDZkMsb0JBQW9CLEdBQUcsRUFDeEI7SUFDQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxZQUF1QkosT0FBWEQsU0FBUSxLQUFZLE9BQVRDLFVBQVM7O1lBQzdDQyxpQ0FDQyw4REFBQ0U7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xKLGlCQUFpQixPQUF1QixPQUFoQkEsaUJBQWdCO29CQUN4Q0ssU0FBU0o7Z0JBQ1g7Ozs7OzswQkFHSiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1pOOzs7Ozs7Ozs7Ozs7QUFJVDtLQXZCTUQ7QUF5Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeD9iMzNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGludGVyZmFjZSBDb250YWluZXJQcm9wcyB7XG4vLyAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4vLyAgIGJnQ29sb3I/OiBzdHJpbmc7XG4vLyAgIG1heFdpZHRoPzogc3RyaW5nO1xuLy8gICBiYWNrZ3JvdW5kSW1hZ2U/OiBzdHJpbmc7XG4vLyAgIGJhY2tncm91bmRPcGFjaXR5PzogbnVtYmVyOyAvLyBBZGQgYSBwcm9wIHRvIGNvbnRyb2wgYmFja2dyb3VuZCBvcGFjaXR5XG4vLyB9XG5cbi8vIGNvbnN0IENvbnRhaW5lcjogUmVhY3QuRkM8Q29udGFpbmVyUHJvcHM+ID0gKHsgY2hpbGRyZW4sIGJnQ29sb3IgPSAnYmctd2hpdGUnLCBtYXhXaWR0aCA9ICdtYXgtdy0xNDQwJywgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kT3BhY2l0eSA9IDAuOCB9KSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2JnQ29sb3J9ICR7bWF4V2lkdGh9IG14LWF1dG8gcC00YH0+XG4vLyAgICAgICB7YmFja2dyb3VuZEltYWdlICYmIChcbi8vICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1hYnNvbHV0ZSBjb250YWluZXItaW5zZXQtMCBjb250YWluZXItYmctY292ZXIgY29udGFpbmVyLWJnLWNlbnRlciBjb250YWluZXItei0wXCJcbi8vICAgICAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxuLy8gICAgICAgICAgICAgb3BhY2l0eTogYmFja2dyb3VuZE9wYWNpdHksXG4vLyAgICAgICAgICAgfX1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICl9XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yZWxhdGl2ZSBjb250YWluZXItei0xMFwiPlxuLy8gICAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG4vLyBjb21wb25lbnRzL0NvbnRhaW5lci50c3hcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBDb250YWluZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIG1heFdpZHRoPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kSW1hZ2U/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRPcGFjaXR5PzogbnVtYmVyO1xufVxuXG5jb25zdCBDb250YWluZXI6IFJlYWN0LkZDPENvbnRhaW5lclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBiZ0NvbG9yID0gJ2JnLXdoaXRlJyxcbiAgbWF4V2lkdGggPSAnbWF4LXctMTQ0MCcsXG4gIGJhY2tncm91bmRJbWFnZSxcbiAgYmFja2dyb3VuZE9wYWNpdHkgPSAwLjgsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2JnQ29sb3J9ICR7bWF4V2lkdGh9IG14LWF1dG8gcC00YH0+XG4gICAgICB7YmFja2dyb3VuZEltYWdlICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctY292ZXIgYmctY2VudGVyIHotMFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcbiAgICAgICAgICAgIG9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJiZ0NvbG9yIiwibWF4V2lkdGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kT3BhY2l0eSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Container.tsx\n"));

/***/ })

});