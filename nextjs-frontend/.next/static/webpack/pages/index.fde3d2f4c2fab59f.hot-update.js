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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_ScrollDownMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ScrollDownMessage */ \"./src/components/ScrollDownMessage.tsx\");\n/* harmony import */ var _components_MainContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainContent */ \"./src/components/MainContent.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n// import { useEffect, useState } from 'react';\n// import Container from '../components/Container';\n// import Header from '../components/Header';\n// import ScrollDownMessage from '../components/ScrollDownMessage';\n// import MainContent from '../components/MainContent';\n// import { fetchData } from '../services/api';\n// interface DataItem {\n//   id: number;\n//   name: string;\n//   // Add other fields as needed\n// }\n// const HomePage: React.FC = () => {\n//   const [data, setData] = useState<DataItem[]>([]);\n//   const [loading, setLoading] = useState<boolean>(true);\n//   const [error, setError] = useState<string | null>(null);\n//   useEffect(() => {\n//     const getData = async () => {\n//       try {\n//         const data = await fetchData();\n//         setData(data);\n//       } catch (error: any) {\n//         setError(error.message);\n//         console.error('Error fetching data:', error);\n//       } finally {\n//         setLoading(false);\n//       }\n//     };\n//     getData();\n//   }, []);\n//   if (loading) return <p>Loading...</p>;\n//   if (error) return <p>Error: {error}</p>;\n//   return (\n//     <Container maxWidth=\"max-w-3xl\" backgroundImage=\"/images/Background-image.jpg\">\n//       <div className=\"flex flex-col items-center justify-center h-screen\">\n//         <Header />\n//         <ScrollDownMessage />\n//       </div>\n//       <MainContent />\n//       <div>\n//         <h2>Fetched Data:</h2>\n//         {Array.isArray(data) && data.map((item) => (\n//           <div key={item.id}>\n//             <p>{item.name}</p>\n//             {/* Display other fields as needed */}\n//           </div>\n//         ))}\n//       </div>\n//     </Container>\n//   );\n// };\n// export default HomePage;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getData = async ()=>{\n            try {\n                const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_6__.fetchData)();\n                setData(data);\n            } catch (error) {\n                setError(error.message);\n                console.error(\"Error fetching data:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        getData();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n        lineNumber: 93,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n        lineNumber: 94,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            maxWidth: \"max-w-3xl\",\n            backgroundImage: \"/images/Background-image.jpg\",\n            backgroundOpacity: 0.5,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center h-screen\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollDownMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Fetched Data:\"\n                        }, void 0, false, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        Array.isArray(data) && data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/pages/index.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"C4fiAW6C7RZgaKDoEXQgZpbuUZg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsbURBQW1EO0FBQ25ELDZDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsdURBQXVEO0FBQ3ZELCtDQUErQztBQUUvQyx1QkFBdUI7QUFDdkIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQ0FBa0M7QUFDbEMsSUFBSTtBQUVKLHFDQUFxQztBQUNyQyxzREFBc0Q7QUFDdEQsMkRBQTJEO0FBQzNELDZEQUE2RDtBQUU3RCxzQkFBc0I7QUFDdEIsb0NBQW9DO0FBQ3BDLGNBQWM7QUFDZCwwQ0FBMEM7QUFDMUMseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQixtQ0FBbUM7QUFDbkMsd0RBQXdEO0FBQ3hELG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDN0IsVUFBVTtBQUNWLFNBQVM7QUFFVCxpQkFBaUI7QUFDakIsWUFBWTtBQUVaLDJDQUEyQztBQUMzQyw2Q0FBNkM7QUFFN0MsYUFBYTtBQUNiLHNGQUFzRjtBQUN0Riw2RUFBNkU7QUFDN0UscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyxlQUFlO0FBQ2Ysd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZCxpQ0FBaUM7QUFDakMsdURBQXVEO0FBQ3ZELGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMscURBQXFEO0FBQ3JELG1CQUFtQjtBQUNuQixjQUFjO0FBQ2QsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1AsS0FBSztBQUVMLDJCQUEyQjs7O0FBRWlCO0FBQ0k7QUFDTjtBQUNzQjtBQUNaO0FBQ1I7QUFPNUMsTUFBTU8sV0FBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBYSxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQWdCO0lBRWxERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFVBQVU7WUFDZCxJQUFJO2dCQUNGLE1BQU1OLE9BQU8sTUFBTUYsd0RBQVNBO2dCQUM1QkcsUUFBUUQ7WUFDVixFQUFFLE9BQU9JLE9BQVk7Z0JBQ25CQyxTQUFTRCxNQUFNRyxPQUFPO2dCQUN0QkMsUUFBUUosS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEMsU0FBVTtnQkFDUkQsV0FBVztZQUNiO1FBQ0Y7UUFFQUc7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJSixTQUFTLHFCQUFPLDhEQUFDTztrQkFBRTs7Ozs7O0lBQ3ZCLElBQUlMLE9BQU8scUJBQU8sOERBQUNLOztZQUFFO1lBQVFMOzs7Ozs7O0lBRTdCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDakIsNkRBQVNBO1lBQUNrQixVQUFTO1lBQVlDLGlCQUFnQjtZQUErQkMsbUJBQW1COzs4QkFDaEcsOERBQUNKO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2hCLDBEQUFNQTs7Ozs7c0NBQ1AsOERBQUNDLHFFQUFpQkE7Ozs7Ozs7Ozs7OzhCQUVwQiw4REFBQ0MsK0RBQVdBOzs7Ozs4QkFDWiw4REFBQ2E7O3NDQUNDLDhEQUFDSztzQ0FBRzs7Ozs7O3dCQUNIQyxNQUFNQyxPQUFPLENBQUNqQixTQUFTQSxLQUFLa0IsR0FBRyxDQUFDLENBQUNDLHFCQUNoQyw4REFBQ1Q7MENBQ0MsNEVBQUNEOzhDQUFHVSxLQUFLQyxJQUFJOzs7Ozs7K0JBRExELEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0I7R0E1Q010QjtLQUFBQTtBQThDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgU2Nyb2xsRG93bk1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGxEb3duTWVzc2FnZSc7XG4vLyBpbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ29udGVudCc7XG4vLyBpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuXG4vLyBpbnRlcmZhY2UgRGF0YUl0ZW0ge1xuLy8gICBpZDogbnVtYmVyO1xuLy8gICBuYW1lOiBzdHJpbmc7XG4vLyAgIC8vIEFkZCBvdGhlciBmaWVsZHMgYXMgbmVlZGVkXG4vLyB9XG5cbi8vIGNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbi8vICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YUl0ZW1bXT4oW10pO1xuLy8gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbi8vICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4vLyAgICAgICAgIHNldERhdGEoZGF0YSk7XG4vLyAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4vLyAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbi8vICAgICAgIH0gZmluYWxseSB7XG4vLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG5cbi8vICAgICBnZXREYXRhKCk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuLy8gICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yfTwvcD47XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWF4LXctM3hsXCIgYmFja2dyb3VuZEltYWdlPVwiL2ltYWdlcy9CYWNrZ3JvdW5kLWltYWdlLmpwZ1wiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuLy8gICAgICAgICA8SGVhZGVyIC8+XG4vLyAgICAgICAgIDxTY3JvbGxEb3duTWVzc2FnZSAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8TWFpbkNvbnRlbnQgLz5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxoMj5GZXRjaGVkIERhdGE6PC9oMj5cbi8vICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5tYXAoKGl0ZW0pID0+IChcbi8vICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4vLyAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cbi8vICAgICAgICAgICAgIHsvKiBEaXNwbGF5IG90aGVyIGZpZWxkcyBhcyBuZWVkZWQgKi99XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Db250YWluZXI+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU2Nyb2xsRG93bk1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGxEb3duTWVzc2FnZSc7XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ29udGVudCc7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuXG5pbnRlcmZhY2UgRGF0YUl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YUl0ZW1bXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBnZXREYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yfTwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1heC13LTN4bFwiIGJhY2tncm91bmRJbWFnZT1cIi9pbWFnZXMvQmFja2dyb3VuZC1pbWFnZS5qcGdcIiBiYWNrZ3JvdW5kT3BhY2l0eT17MC41fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8U2Nyb2xsRG93bk1lc3NhZ2UgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNYWluQ29udGVudCAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5GZXRjaGVkIERhdGE6PC9oMj5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgey8qIERpc3BsYXkgb3RoZXIgZmllbGRzIGFzIG5lZWRlZCAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJTY3JvbGxEb3duTWVzc2FnZSIsIk1haW5Db250ZW50IiwiZmV0Y2hEYXRhIiwiSG9tZVBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldERhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXhXaWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRPcGFjaXR5IiwiaDIiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});