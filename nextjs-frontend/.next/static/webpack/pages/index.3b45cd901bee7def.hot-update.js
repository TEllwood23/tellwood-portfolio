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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_ScrollDownMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ScrollDownMessage */ \"./src/components/ScrollDownMessage.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getData = async ()=>{\n            try {\n                const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_5__.fetchData)();\n                setData(data);\n            } catch (error) {\n                setError(error.message);\n                console.error(\"Error fetching data:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        getData();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        bgColor: \"bg-blue-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollDownMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Fetched Data:\"\n                    }, void 0, false, {\n                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    Array.isArray(data) && data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, item.id, false, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"C4fiAW6C7RZgaKDoEXQgZpbuUZg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0k7QUFDTjtBQUNzQjtBQUVwQjtBQVE1QyxNQUFNTSxXQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFhLEVBQUU7SUFDL0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsVUFBVTtZQUNkLElBQUk7Z0JBQ0YsTUFBTU4sT0FBTyxNQUFNRix3REFBU0E7Z0JBQzVCRyxRQUFRRDtZQUNWLEVBQUUsT0FBT0ksT0FBWTtnQkFDbkJDLFNBQVNELE1BQU1HLE9BQU87Z0JBQ3RCQyxRQUFRSixLQUFLLENBQUMsd0JBQXdCQTtZQUN4QyxTQUFVO2dCQUNSRCxXQUFXO1lBQ2I7UUFDRjtRQUVBRztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlKLFNBQVMscUJBQU8sOERBQUNPO2tCQUFFOzs7Ozs7SUFDdkIsSUFBSUwsT0FBTyxxQkFBTyw4REFBQ0s7O1lBQUU7WUFBUUw7Ozs7Ozs7SUFFN0IscUJBQ0UsOERBQUNULDZEQUFTQTtRQUFDZSxTQUFROzswQkFDakIsOERBQUNkLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLHFFQUFpQkE7Ozs7OzBCQUNsQiw4REFBQ2M7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O29CQUNIQyxNQUFNQyxPQUFPLENBQUNkLFNBQVNBLEtBQUtlLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEMsOERBQUNMO3NDQUNDLDRFQUFDRjswQ0FBR08sS0FBS0MsSUFBSTs7Ozs7OzJCQURMRCxLQUFLRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVEzQjtHQXZDTW5CO0tBQUFBO0FBeUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBTY3JvbGxEb3duTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbERvd25NZXNzYWdlJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL01haW5Db250ZW50JztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5cbmludGVyZmFjZSBEYXRhSXRlbSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgLy8gQWRkIG90aGVyIGZpZWxkcyBhcyBuZWVkZWRcbn1cblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3J9PC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYmdDb2xvcj1cImJnLWJsdWUtMTAwXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8U2Nyb2xsRG93bk1lc3NhZ2UgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5GZXRjaGVkIERhdGE6PC9oMj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgIHsvKiBEaXNwbGF5IG90aGVyIGZpZWxkcyBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkhlYWRlciIsIlNjcm9sbERvd25NZXNzYWdlIiwiZmV0Y2hEYXRhIiwiSG9tZVBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldERhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsInAiLCJiZ0NvbG9yIiwiZGl2IiwiaDIiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});