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

/***/ "./src/components/ProjectCard.js":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst ProjectCard = (param)=>{\n    let { title , color , set , display  } = param;\n    const c = color;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(display ? \"flex\" : \"fade-out\", \" flex-col justify-center items-center h-full w-1/4 fade-in\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: set,\n                className: color == \"bg-pink\" ? \"relative flex items-center justify-center h-[220px] w-[220px] bg-pink rounded-full cursor-pointer overflow-clip\" : color == \"bg-green\" ? \"relative flex items-center justify-center h-[220px] w-[220px] bg-green rounded-full cursor-pointer overflow-clip\" : \"relative flex items-center justify-center h-[220px] w-[220px] bg-red rounded-full cursor-pointer overflow-clip\",\n                children: [\n                    title == \"Do me.\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosCheckmarkCircle, {\n                        className: \"text-white\",\n                        size: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    title == \"notARealStore\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosCart, {\n                        className: \"text-white\",\n                        size: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    title == \"Blank Page\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoMdBulb, {\n                        className: \"text-white\",\n                        size: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-[#E7E7E7] mt-2\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ2lEO0FBRTNFLE1BQU1JLGNBQWMsU0FBb0M7UUFBbkMsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLElBQUcsRUFBRUMsUUFBTyxFQUFFO0lBQ2pELE1BQU1DLElBQUlIO0lBQ1YscUJBQ0UsOERBQUNJO1FBQ0NDLFdBQVcsR0FFVixPQURDSCxVQUFVLFNBQVMsVUFBVSxFQUM5Qjs7MEJBRUQsOERBQUNFO2dCQUNDRSxTQUFTTDtnQkFDVEksV0FDRUwsU0FBUyxZQUNMLG9IQUNBQSxTQUFTLGFBQ1QscUhBQ0EsZ0hBQWdIOztvQkFHckhELFNBQVMsMEJBQ1IsOERBQUNKLGdFQUFvQkE7d0JBQUNVLFdBQVU7d0JBQWFFLE1BQU07Ozs7OztvQkFFcERSLFNBQVMsaUNBQ1IsOERBQUNILHFEQUFTQTt3QkFBQ1MsV0FBVTt3QkFBYUUsTUFBTTs7Ozs7O29CQUV6Q1IsU0FBUyw4QkFDUiw4REFBQ0Ysb0RBQVFBO3dCQUFDUSxXQUFVO3dCQUFhRSxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRzNDLDhEQUFDQztnQkFBR0gsV0FBVTswQkFBdUJOOzs7Ozs7Ozs7Ozs7QUFHM0M7S0EvQk1EO0FBaUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzP2JlNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2FydCwgSW9NZEJ1bGIgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyB0aXRsZSwgY29sb3IsIHNldCwgZGlzcGxheSB9KSA9PiB7XG4gIGNvbnN0IGMgPSBjb2xvcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBkaXNwbGF5ID8gXCJmbGV4XCIgOiBcImZhZGUtb3V0XCJcbiAgICAgIH0gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTEvNCBmYWRlLWluYH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3NldH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBjb2xvciA9PSBcImJnLXBpbmtcIlxuICAgICAgICAgICAgPyBcInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzIyMHB4XSB3LVsyMjBweF0gYmctcGluayByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctY2xpcFwiXG4gICAgICAgICAgICA6IGNvbG9yID09IFwiYmctZ3JlZW5cIlxuICAgICAgICAgICAgPyBcInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzIyMHB4XSB3LVsyMjBweF0gYmctZ3JlZW4gcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWNsaXBcIlxuICAgICAgICAgICAgOiBcInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzIyMHB4XSB3LVsyMjBweF0gYmctcmVkIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1jbGlwXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgPT0gXCJEbyBtZS5cIiAmJiAoXG4gICAgICAgICAgPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBzaXplPXsxMDB9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHt0aXRsZSA9PSBcIm5vdEFSZWFsU3RvcmVcIiAmJiAoXG4gICAgICAgICAgPElvSW9zQ2FydCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc2l6ZT17MTAwfSAvPlxuICAgICAgICApfVxuICAgICAgICB7dGl0bGUgPT0gXCJCbGFuayBQYWdlXCIgJiYgKFxuICAgICAgICAgIDxJb01kQnVsYiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc2l6ZT17MTAwfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bI0U3RTdFN10gbXQtMlwiPnt0aXRsZX08L2gzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJb0lvc0NoZWNrbWFya0NpcmNsZSIsIklvSW9zQ2FydCIsIklvTWRCdWxiIiwiUHJvamVjdENhcmQiLCJ0aXRsZSIsImNvbG9yIiwic2V0IiwiZGlzcGxheSIsImMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProjectCard.js\n"));

/***/ })

});