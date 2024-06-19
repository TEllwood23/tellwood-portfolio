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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProgressSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Transition!=!@headlessui/react */ \"__barrel_optimize__?names=Transition!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_Portfolio_Placeholder_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_1.jpg */ \"./public/images/Portfolio_Placeholder_1.jpg\");\n/* harmony import */ var _public_images_Portfolio_Placeholder_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_2.jpg */ \"./public/images/Portfolio_Placeholder_2.jpg\");\n/* harmony import */ var _public_images_Portfolio_Placeholder_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_3.jpg */ \"./public/images/Portfolio_Placeholder_3.jpg\");\n/* harmony import */ var _public_images_Portfolio_Placeholder_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/Portfolio_Placeholder_4.jpg */ \"./public/images/Portfolio_Placeholder_4.jpg\");\n/* harmony import */ var _public_images_Icon_1_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/Icon_1.svg */ \"./public/images/Icon_1.svg\");\n/* harmony import */ var _public_images_Icon_2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../public/images/Icon_2.svg */ \"./public/images/Icon_2.svg\");\n/* harmony import */ var _public_images_Icon_3_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/Icon_3.svg */ \"./public/images/Icon_3.svg\");\n/* harmony import */ var _public_images_Icon_4_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../public/images/Icon_4.svg */ \"./public/images/Icon_4.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ProgressSlider() {\n    _s();\n    const duration = 3500;\n    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const frame = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const firstFrameTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(performance.now());\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const items = [\n        {\n            img: _public_images_Portfolio_Placeholder_1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            desc: \"Omnichannel\",\n            buttonIcon: _public_images_Icon_1_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n        },\n        {\n            img: _public_images_Portfolio_Placeholder_2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            desc: \"Multilingual\",\n            buttonIcon: _public_images_Icon_2_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n        },\n        {\n            img: _public_images_Portfolio_Placeholder_3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            desc: \"Interpolate\",\n            buttonIcon: _public_images_Icon_3_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n        },\n        {\n            img: _public_images_Portfolio_Placeholder_4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            desc: \"Enriched\",\n            buttonIcon: _public_images_Icon_4_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        firstFrameTime.current = performance.now();\n        frame.current = requestAnimationFrame(animate);\n        return ()=>{\n            cancelAnimationFrame(frame.current);\n        };\n    }, [\n        active\n    ]);\n    const animate = (now)=>{\n        let timeFraction = (now - firstFrameTime.current) / duration;\n        if (timeFraction <= 1) {\n            setProgress(timeFraction * 100);\n            frame.current = requestAnimationFrame(animate);\n        } else {\n            timeFraction = 1;\n            setProgress(0);\n            setActive((active + 1) % items.length);\n        }\n    };\n    const heightFix = ()=>{\n        var _itemsRef_current;\n        if ((_itemsRef_current = itemsRef.current) === null || _itemsRef_current === void 0 ? void 0 : _itemsRef_current.parentElement) {\n            itemsRef.current.parentElement.style.height = \"\".concat(itemsRef.current.clientHeight, \"px\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        heightFix();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-5xl mx-auto text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"transition-all duration-150 delay-300 ease-in-out\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex flex-col items-center\",\n                    ref: itemsRef,\n                    children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Transition, {\n                            show: active === index,\n                            enter: \"transition ease-in-out duration-500 delay-200 order-first\",\n                            enterFrom: \"opacity-0 scale-105\",\n                            enterTo: \"opacity-100 scale-100\",\n                            leave: \"transition ease-in-out duration-300 absolute\",\n                            leaveFrom: \"opacity-100 scale-100\",\n                            leaveTo: \"opacity-0 scale-95\",\n                            beforeEnter: ()=>heightFix(),\n                            children: [\n                                \"   \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"rounded-xl m-4\",\n                                        src: item.img,\n                                        alt: item.desc,\n                                        // layout=\"responsive\"\n                                        width: 512,\n                                        height: 288\n                                    }, void 0, false, {\n                                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8\",\n                children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group\",\n                        onClick: ()=>{\n                            setActive(index), setProgress(0);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-center flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: item.buttonIcon,\n                                        alt: item.desc\n                                    }, void 0, false, {\n                                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"block text-sm font-medium text-slate-900 mb-2\",\n                                    children: item.desc\n                                }, void 0, false, {\n                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"block relative w-full bg-slate-200 h-1 rounded-full\",\n                                    role: \"progressbar\",\n                                    \"aria-valuenow\": 0,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute inset-0 bg-indigo-500 rounded-[inherit]\",\n                                        style: {\n                                            width: active === index ? \"\".concat(progress, \"%\") : \"0%\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tellwood23/code/TEllwood23/tellwood-portfolio/nextjs-frontend/src/components/ProgressSlider.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(ProgressSlider, \"jAJrdaOJqzYpZoEQwVbPAaa7fGE=\");\n_c = ProgressSlider;\nvar _c;\n$RefreshReg$(_c, \"ProgressSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNZO3dCQUVDaEIsV0FBVTt3QkFDVmlCLFNBQVM7NEJBQVFwQyxVQUFVdUIsUUFBUXJCLFlBQVk7d0JBQUc7a0NBRWxELDRFQUFDbUM7NEJBQUtsQixXQUFVOzs4Q0FDZCw4REFBQ2tCO29DQUFLbEIsV0FBVTs4Q0FDZCw0RUFBQ3BDLG1EQUFLQTt3Q0FBQ2lELEtBQUtWLEtBQUtoQixVQUFVO3dDQUFFMkIsS0FBS1gsS0FBS2pCLElBQUk7Ozs7Ozs7Ozs7OzhDQUU3Qyw4REFBQ2dDO29DQUFLbEIsV0FBVTs4Q0FBaURHLEtBQUtqQixJQUFJOzs7Ozs7OENBQzFFLDhEQUFDZ0M7b0NBQUtsQixXQUFVO29DQUFzRG1CLE1BQUs7b0NBQWNDLGlCQUFlOzhDQUN4Ryw0RUFBQ0Y7d0NBQUtsQixXQUFVO3dDQUFtREosT0FBTzs0Q0FBRW1CLE9BQU9uQyxXQUFXd0IsUUFBUSxHQUFZLE9BQVR0QixVQUFTLE9BQUs7d0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVZ6SHNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBbUJqQjtHQXhId0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc1NsaWRlci50c3g/MDJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0IFNpbGRlckltZzAxIGZyb20gJy9wdWJsaWMvaW1hZ2VzL1BvcnRmb2xpb19QbGFjZWhvbGRlcl8xLmpwZyc7XG5pbXBvcnQgU2lsZGVySW1nMDIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvUG9ydGZvbGlvX1BsYWNlaG9sZGVyXzIuanBnJztcbmltcG9ydCBTaWxkZXJJbWcwMyBmcm9tICcvcHVibGljL2ltYWdlcy9Qb3J0Zm9saW9fUGxhY2Vob2xkZXJfMy5qcGcnO1xuaW1wb3J0IFNpbGRlckltZzA0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL1BvcnRmb2xpb19QbGFjZWhvbGRlcl80LmpwZyc7XG5pbXBvcnQgU2lsZGVySWNvbjAxIGZyb20gJy9wdWJsaWMvaW1hZ2VzL0ljb25fMS5zdmcnO1xuaW1wb3J0IFNpbGRlckljb24wMiBmcm9tICcvcHVibGljL2ltYWdlcy9JY29uXzIuc3ZnJztcbmltcG9ydCBTaWxkZXJJY29uMDMgZnJvbSAnL3B1YmxpYy9pbWFnZXMvSWNvbl8zLnN2Zyc7XG5pbXBvcnQgU2lsZGVySWNvbjA0IGZyb20gJy9wdWJsaWMvaW1hZ2VzL0ljb25fNC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc1NsaWRlcigpIHtcblxuICBjb25zdCBkdXJhdGlvbjogbnVtYmVyID0gMzUwMFxuICBjb25zdCBpdGVtc1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgY29uc3QgZnJhbWUgPSB1c2VSZWY8bnVtYmVyPigwKVxuICBjb25zdCBmaXJzdEZyYW1lVGltZSA9IHVzZVJlZihwZXJmb3JtYW5jZS5ub3coKSlcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgaW1nOiBTaWxkZXJJbWcwMSxcbiAgICAgIGRlc2M6ICdPbW5pY2hhbm5lbCcsXG4gICAgICBidXR0b25JY29uOiBTaWxkZXJJY29uMDEsXG4gICAgfSxcbiAgICAgIHtcbiAgICAgIGltZzogU2lsZGVySW1nMDIsXG4gICAgICBkZXNjOiAnTXVsdGlsaW5ndWFsJyxcbiAgICAgIGJ1dHRvbkljb246IFNpbGRlckljb24wMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICBpbWc6IFNpbGRlckltZzAzLFxuICAgICAgZGVzYzogJ0ludGVycG9sYXRlJyxcbiAgICAgIGJ1dHRvbkljb246IFNpbGRlckljb24wMyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogU2lsZGVySW1nMDQsXG4gICAgICBkZXNjOiAnRW5yaWNoZWQnLFxuICAgICAgYnV0dG9uSWNvbjogU2lsZGVySWNvbjA0LFxuICAgICAgfSxcbiAgICAgIF1cblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmlyc3RGcmFtZVRpbWUuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgIGZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZS5jdXJyZW50KVxuICAgICAgICB9XG4gICAgICB9LCBbYWN0aXZlXSlcblxuICAgICAgY29uc3QgYW5pbWF0ZSA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgdGltZUZyYWN0aW9uID0gKG5vdyAtIGZpcnN0RnJhbWVUaW1lLmN1cnJlbnQpIC8gZHVyYXRpb25cbiAgICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8PSAxKSB7XG4gICAgICAgICAgc2V0UHJvZ3Jlc3ModGltZUZyYWN0aW9uICogMTAwKVxuICAgICAgICAgIGZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lRnJhY3Rpb24gPSAxXG4gICAgICAgICAgc2V0UHJvZ3Jlc3MoMClcbiAgICAgICAgICBzZXRBY3RpdmUoKGFjdGl2ZSArIDEpICUgaXRlbXMubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlaWdodEZpeCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1zUmVmLmN1cnJlbnQ/LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpdGVtc1JlZi5jdXJyZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aXRlbXNSZWYuY3VycmVudC5jbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgICB9O1xuXG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGhlaWdodEZpeCgpXG4gICAgICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNXhsIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgIHsvKiBJdGVtIGltYWdlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTAgZGVsYXktMzAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiByZWY9e2l0ZW1zUmVmfT5cblxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHNob3c9e2FjdGl2ZSA9PT0gaW5kZXh9XG4gICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwIGRlbGF5LTIwMCBvcmRlci1maXJzdFwiXG4gICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtMTA1XCJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICBiZWZvcmVFbnRlcj17KCkgPT4gaGVpZ2h0Rml4KCl9XG4gICAgICAgICAgPiAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBtLTRcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTEyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyODh9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICApKX1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIEJ1dHRvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhzIHNtOm1heC13LXNtIG1kOm1heC13LTN4bCBteC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTQgbXQtOFwiPlxuXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLWluZGlnby0zMDAgZ3JvdXBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRBY3RpdmUoaW5kZXgpLCBzZXRQcm9ncmVzcygwKSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIHctOSBoLTkgcm91bmRlZC1mdWxsIGJnLWluZGlnby0xMDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uYnV0dG9uSWNvbn0gYWx0PXtpdGVtLmRlc2N9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMCBtYi0yXCI+e2l0ZW0uZGVzY308L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIHctZnVsbCBiZy1zbGF0ZS0yMDAgaC0xIHJvdW5kZWQtZnVsbFwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9ezB9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWluZGlnby01MDAgcm91bmRlZC1baW5oZXJpdF1cIiBzdHlsZT17eyB3aWR0aDogYWN0aXZlID09PSBpbmRleCA/IGAke3Byb2dyZXNzfSVgIDogJzAlJyB9fT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJUcmFuc2l0aW9uIiwiSW1hZ2UiLCJTaWxkZXJJbWcwMSIsIlNpbGRlckltZzAyIiwiU2lsZGVySW1nMDMiLCJTaWxkZXJJbWcwNCIsIlNpbGRlckljb24wMSIsIlNpbGRlckljb24wMiIsIlNpbGRlckljb24wMyIsIlNpbGRlckljb24wNCIsIlByb2dyZXNzU2xpZGVyIiwiZHVyYXRpb24iLCJpdGVtc1JlZiIsImZyYW1lIiwiZmlyc3RGcmFtZVRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJpdGVtcyIsImltZyIsImRlc2MiLCJidXR0b25JY29uIiwiY3VycmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVGcmFjdGlvbiIsImxlbmd0aCIsImhlaWdodEZpeCIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNob3ciLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJiZWZvcmVFbnRlciIsInNyYyIsImFsdCIsIndpZHRoIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJyb2xlIiwiYXJpYS12YWx1ZW5vdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProgressSlider.tsx\n"));

/***/ })

});