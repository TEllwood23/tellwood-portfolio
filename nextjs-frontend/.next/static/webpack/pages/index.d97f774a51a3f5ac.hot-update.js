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

/***/ "./src/components/ProgressSlider.tsx":
/*!*******************************************!*\
  !*** ./src/components/ProgressSlider.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProgressSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Transition!=!@headlessui/react */ \"__barrel_optimize__?names=Transition!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_Portfolio_Placeholder_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_1.jpg */ \"./public/images/Portfolio_Placeholder_1.jpg\");\n/* harmony import */ var _public_images_Portfolio_Placeholder_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_2.jpg */ \"./public/images/Portfolio_Placeholder_2.jpg\");\n/* harmony import */ var _public_images_Portfolio_Placeholder_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_3.jpg */ \"./public/images/Portfolio_Placeholder_3.jpg\");\n/* harmony import */ var _public_images_Portfolio_Placeholder_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_4.jpg */ \"./public/images/Portfolio_Placeholder_4.jpg\");\n/* harmony import */ var _public_images_Icon_1_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/Icon_1.svg */ \"./public/images/Icon_1.svg\");\n/* harmony import */ var _public_images_Icon_2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../public/images/Icon_2.svg */ \"./public/images/Icon_2.svg\");\n/* harmony import */ var _public_images_Icon_3_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/Icon_3.svg */ \"./public/images/Icon_3.svg\");\n/* harmony import */ var _public_images_Icon_4_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../public/images/Icon_4.svg */ \"./public/images/Icon_4.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ProgressSlider() {\n    _s();\n    const duration = 3500;\n    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const frame = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const firstFrameTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(performance.now());\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const items = [\n        {\n            img: _public_images_Portfolio_Placeholder_1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            desc: \"Omnichannel\",\n            buttonIcon: _public_images_Icon_1_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n        },\n        {\n            img: _public_images_Portfolio_Placeholder_2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            desc: \"Multilingual\",\n            buttonIcon: _public_images_Icon_2_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n        },\n        {\n            img: _public_images_Portfolio_Placeholder_3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            desc: \"Interpolate\",\n            buttonIcon: _public_images_Icon_3_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n        },\n        {\n            img: _public_images_Portfolio_Placeholder_4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            desc: \"Enriched\",\n            buttonIcon: _public_images_Icon_4_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        firstFrameTime.current = performance.now();\n        frame.current = requestAnimationFrame(animate);\n        return ()=>{\n            cancelAnimationFrame(frame.current);\n        };\n    }, [\n        active\n    ]);\n    const animate = (now)=>{\n        let timeFraction = (now - firstFrameTime.current) / duration;\n        if (timeFraction <= 1) {\n            setProgress(timeFraction * 100);\n            frame.current = requestAnimationFrame(animate);\n        } else {\n            timeFraction = 1;\n            setProgress(0);\n            setActive((active + 1) % items.length);\n        }\n    };\n    const heightFix = ()=>{\n        var _itemsRef_current;\n        if ((_itemsRef_current = itemsRef.current) === null || _itemsRef_current === void 0 ? void 0 : _itemsRef_current.parentElement) {\n            itemsRef.current.parentElement.style.height = \"\".concat(itemsRef.current.clientHeight, \"px\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        heightFix();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-5xl mx-auto text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"transition-all duration-150 delay-300 ease-in-out\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex flex-col items-center\",\n                ref: itemsRef,\n                children: [\n                    items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Transition, {\n                            show: active === index,\n                            enter: \"transition ease-in-out duration-500 delay-200 order-first\",\n                            enterFrom: \"opacity-0 scale-105\",\n                            enterTo: \"opacity-100 scale-100\",\n                            leave: \"transition ease-in-out duration-300 absolute\",\n                            leaveFrom: \"opacity-100 scale-100\",\n                            leaveTo: \"opacity-0 scale-95\",\n                            beforeEnter: ()=>heightFix(),\n                            as: \"div\",\n                            className: \"flex flex-col justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"rounded-xl m-4\",\n                                    src: item.img,\n                                    alt: item.desc,\n                                    // layout=\"responsive\"\n                                    width: 512,\n                                    height: 288\n                                }, void 0, false, {\n                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 17\n                                }, this),\n                                items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group\",\n                                        onClick: ()=>{\n                                            setActive(index), setProgress(0);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-center flex flex-col items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: item.buttonIcon,\n                                                        alt: item.desc\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 15\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"block text-sm font-medium text-slate-900 mb-2\",\n                                                    children: item.desc\n                                                }, void 0, false, {\n                                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 15\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"block relative w-full bg-slate-200 h-1 rounded-full\",\n                                                    role: \"progressbar\",\n                                                    \"aria-valuenow\": 0,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"absolute inset-0 bg-indigo-500 rounded-[inherit]\",\n                                                        style: {\n                                                            width: active === index ? \"\".concat(progress, \"%\") : \"0%\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                                        lineNumber: 120,\n                                                        columnNumber: 15\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 15\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 11\n                                    }, this))\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(ProgressSlider, \"jAJrdaOJqzYpZoEQwVbPAaa7fGE=\");\n_c = ProgressSlider;\nvar _c;\n$RefreshReg$(_c, \"ProgressSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRztrREFFbEQsNEVBQUNvQzs0Q0FBS25CLFdBQVU7OzhEQUNkLDhEQUFDbUI7b0RBQUtuQixXQUFVOzhEQUNkLDRFQUFDcEMsbURBQUtBO3dEQUFDa0QsS0FBS1gsS0FBS2hCLFVBQVU7d0RBQUU0QixLQUFLWixLQUFLakIsSUFBSTs7Ozs7Ozs7Ozs7OERBRTdDLDhEQUFDaUM7b0RBQUtuQixXQUFVOzhEQUFpREcsS0FBS2pCLElBQUk7Ozs7Ozs4REFDMUUsOERBQUNpQztvREFBS25CLFdBQVU7b0RBQXNEb0IsTUFBSztvREFBY0MsaUJBQWU7OERBQ3hHLDRFQUFDRjt3REFBS25CLFdBQVU7d0RBQW1ESixPQUFPOzREQUFFb0IsT0FBT3BDLFdBQVd3QixRQUFRLEdBQVksT0FBVHRCLFVBQVMsT0FBSzt3REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBVnpIc0I7Ozs7OzsyQkF0QkFBOzs7OztrQ0F3Q1gsOERBQUNMO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JCO0dBekh3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzU2xpZGVyLnRzeD8wMmJjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgU2lsZGVySW1nMDEgZnJvbSAnL3B1YmxpYy9pbWFnZXMvUG9ydGZvbGlvX1BsYWNlaG9sZGVyXzEuanBnJztcbmltcG9ydCBTaWxkZXJJbWcwMiBmcm9tICcvcHVibGljL2ltYWdlcy9Qb3J0Zm9saW9fUGxhY2Vob2xkZXJfMi5qcGcnO1xuaW1wb3J0IFNpbGRlckltZzAzIGZyb20gJy9wdWJsaWMvaW1hZ2VzL1BvcnRmb2xpb19QbGFjZWhvbGRlcl8zLmpwZyc7XG5pbXBvcnQgU2lsZGVySW1nMDQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvUG9ydGZvbGlvX1BsYWNlaG9sZGVyXzQuanBnJztcbmltcG9ydCBTaWxkZXJJY29uMDEgZnJvbSAnL3B1YmxpYy9pbWFnZXMvSWNvbl8xLnN2Zyc7XG5pbXBvcnQgU2lsZGVySWNvbjAyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL0ljb25fMi5zdmcnO1xuaW1wb3J0IFNpbGRlckljb24wMyBmcm9tICcvcHVibGljL2ltYWdlcy9JY29uXzMuc3ZnJztcbmltcG9ydCBTaWxkZXJJY29uMDQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvSWNvbl80LnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzU2xpZGVyKCkge1xuXG4gIGNvbnN0IGR1cmF0aW9uOiBudW1iZXIgPSAzNTAwXG4gIGNvbnN0IGl0ZW1zUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBmcmFtZSA9IHVzZVJlZjxudW1iZXI+KDApXG4gIGNvbnN0IGZpcnN0RnJhbWVUaW1lID0gdXNlUmVmKHBlcmZvcm1hbmNlLm5vdygpKVxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7XG4gICAgICBpbWc6IFNpbGRlckltZzAxLFxuICAgICAgZGVzYzogJ09tbmljaGFubmVsJyxcbiAgICAgIGJ1dHRvbkljb246IFNpbGRlckljb24wMSxcbiAgICB9LFxuICAgICAge1xuICAgICAgaW1nOiBTaWxkZXJJbWcwMixcbiAgICAgIGRlc2M6ICdNdWx0aWxpbmd1YWwnLFxuICAgICAgYnV0dG9uSWNvbjogU2lsZGVySWNvbjAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgIGltZzogU2lsZGVySW1nMDMsXG4gICAgICBkZXNjOiAnSW50ZXJwb2xhdGUnLFxuICAgICAgYnV0dG9uSWNvbjogU2lsZGVySWNvbjAzLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1nOiBTaWxkZXJJbWcwNCxcbiAgICAgIGRlc2M6ICdFbnJpY2hlZCcsXG4gICAgICBidXR0b25JY29uOiBTaWxkZXJJY29uMDQsXG4gICAgICB9LFxuICAgICAgXVxuXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmaXJzdEZyYW1lVGltZS5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgZnJhbWUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpXG4gICAgICAgIH1cbiAgICAgIH0sIFthY3RpdmVdKVxuXG4gICAgICBjb25zdCBhbmltYXRlID0gKG5vdzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAobm93IC0gZmlyc3RGcmFtZVRpbWUuY3VycmVudCkgLyBkdXJhdGlvblxuICAgICAgICBpZiAodGltZUZyYWN0aW9uIDw9IDEpIHtcbiAgICAgICAgICBzZXRQcm9ncmVzcyh0aW1lRnJhY3Rpb24gKiAxMDApXG4gICAgICAgICAgZnJhbWUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVGcmFjdGlvbiA9IDFcbiAgICAgICAgICBzZXRQcm9ncmVzcygwKVxuICAgICAgICAgIHNldEFjdGl2ZSgoYWN0aXZlICsgMSkgJSBpdGVtcy5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVpZ2h0Rml4ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaXRlbXNSZWYuY3VycmVudD8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIGl0ZW1zUmVmLmN1cnJlbnQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtpdGVtc1JlZi5jdXJyZW50LmNsaWVudEhlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaGVpZ2h0Rml4KClcbiAgICAgIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgey8qIEl0ZW0gaW1hZ2UgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MCBkZWxheS0zMDAgZWFzZS1pbi1vdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiIHJlZj17aXRlbXNSZWZ9PlxuXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgc2hvdz17YWN0aXZlID09PSBpbmRleH1cbiAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAgZGVsYXktMjAwIG9yZGVyLWZpcnN0XCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS0xMDVcIlxuICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIGFic29sdXRlXCJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgIGJlZm9yZUVudGVyPXsoKSA9PiBoZWlnaHRGaXgoKX1cbiAgICAgICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbS00XCJcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uZGVzY31cbiAgICAgICAgICAgICAgICAgIC8vIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUxMn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjg4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZyBmb2N1cy12aXNpYmxlOnJpbmctaW5kaWdvLTMwMCBncm91cFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldEFjdGl2ZShpbmRleCksIHNldFByb2dyZXNzKDApIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgdy05IGgtOSByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTEwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5idXR0b25JY29ufSBhbHQ9e2l0ZW0uZGVzY30gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtOTAwIG1iLTJcIj57aXRlbS5kZXNjfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmUgdy1mdWxsIGJnLXNsYXRlLTIwMCBoLTEgcm91bmRlZC1mdWxsXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz17MH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctaW5kaWdvLTUwMCByb3VuZGVkLVtpbmhlcml0XVwiIHN0eWxlPXt7IHdpZHRoOiBhY3RpdmUgPT09IGluZGV4ID8gYCR7cHJvZ3Jlc3N9JWAgOiAnMCUnIH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgIHsvKiBCdXR0b25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14cyBzbTptYXgtdy1zbSBtZDptYXgtdy0zeGwgbXgtYXV0byBncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00IG10LThcIj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJUcmFuc2l0aW9uIiwiSW1hZ2UiLCJTaWxkZXJJbWcwMSIsIlNpbGRlckltZzAyIiwiU2lsZGVySW1nMDMiLCJTaWxkZXJJbWcwNCIsIlNpbGRlckljb24wMSIsIlNpbGRlckljb24wMiIsIlNpbGRlckljb24wMyIsIlNpbGRlckljb24wNCIsIlByb2dyZXNzU2xpZGVyIiwiZHVyYXRpb24iLCJpdGVtc1JlZiIsImZyYW1lIiwiZmlyc3RGcmFtZVRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJpdGVtcyIsImltZyIsImRlc2MiLCJidXR0b25JY29uIiwiY3VycmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVGcmFjdGlvbiIsImxlbmd0aCIsImhlaWdodEZpeCIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNob3ciLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJiZWZvcmVFbnRlciIsImFzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsInJvbGUiLCJhcmlhLXZhbHVlbm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProgressSlider.tsx\n"));

/***/ })

});