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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst ProjectCard = (param)=>{\n    let { title , color , set  } = param;\n    const c = color;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: title == \"Do me.\" ? \"absolute left-0 bg-black flex flex-col justify-center items-center fade-in\" : title == \"notARealStore\" ? \"absolute left-[30%] bg-black flex flex-col justify-center items-center fade-in\" : \"absolute left-[70%] bg-black flex flex-col justify-center items-center fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: set,\n                className: color == \"pink\" ? \"flex items-center justify-center h-[220px] w-[220px] bg-[#E0C4C5] rounded-full cursor-pointer overflow-clip\" : color == \"green\" ? \"flex items-center justify-center h-[220px] w-[220px] bg-[#8F9C2F] rounded-full cursor-pointer overflow-clip\" : \"flex items-center justify-center h-[220px] w-[220px] bg-[#E93860] rounded-full cursor-pointer overflow-clip\",\n                children: title == \"Do me.\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosCheckmarkCircle, {\n                    className: \"text-white\",\n                    size: 100\n                }, void 0, false, {\n                    fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined) : title == \"notARealStore\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosCart, {\n                    className: \"text-white\",\n                    size: 100\n                }, void 0, false, {\n                    fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoMdBulb, {\n                    className: \"text-white\",\n                    size: 100\n                }, void 0, false, {\n                    fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-[#E7E7E7] mt-2\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ2lEO0FBRTNFLE1BQU1JLGNBQWMsU0FBMkI7UUFBMUIsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLElBQUcsRUFBRTtJQUN4QyxNQUFNQyxJQUFJRjtJQUNWLHFCQUNFLDhEQUFDRztRQUNDQyxXQUNFTCxTQUFTLFdBQ0wsK0VBQ0FBLFNBQVMsa0JBQ1QsbUZBQ0EsZ0ZBQWdGOzswQkFHdEYsOERBQUNJO2dCQUNDRSxTQUFTSjtnQkFDVEcsV0FDRUosU0FBUyxTQUNMLGdIQUNBQSxTQUFTLFVBQ1QsZ0hBQ0EsNkdBQTZHOzBCQUdsSEQsU0FBUyx5QkFDUiw4REFBQ0osZ0VBQW9CQTtvQkFBQ1MsV0FBVTtvQkFBYUUsTUFBTTs7Ozs7Z0NBQ2pEUCxTQUFTLGdDQUNYLDhEQUFDSCxxREFBU0E7b0JBQUNRLFdBQVU7b0JBQWFFLE1BQU07Ozs7OzhDQUV4Qyw4REFBQ1Qsb0RBQVFBO29CQUFDTyxXQUFVO29CQUFhRSxNQUFNOzs7Ozs2QkFDeEM7Ozs7OzswQkFFSCw4REFBQ0M7Z0JBQUdILFdBQVU7MEJBQXVCTDs7Ozs7Ozs7Ozs7O0FBRzNDO0tBakNNRDtBQW1DTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcz9iZTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlLCBJb0lvc0NhcnQsIElvTWRCdWxiIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cbmNvbnN0IFByb2plY3RDYXJkID0gKHsgdGl0bGUsIGNvbG9yLCBzZXQgfSkgPT4ge1xuICBjb25zdCBjID0gY29sb3I7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdGl0bGUgPT0gXCJEbyBtZS5cIlxuICAgICAgICAgID8gXCJhYnNvbHV0ZSBsZWZ0LTAgYmctYmxhY2sgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmFkZS1pblwiXG4gICAgICAgICAgOiB0aXRsZSA9PSBcIm5vdEFSZWFsU3RvcmVcIlxuICAgICAgICAgID8gXCJhYnNvbHV0ZSBsZWZ0LVszMCVdIGJnLWJsYWNrIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZhZGUtaW5cIlxuICAgICAgICAgIDogXCJhYnNvbHV0ZSBsZWZ0LVs3MCVdIGJnLWJsYWNrIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZhZGUtaW5cIlxuICAgICAgfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17c2V0fVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGNvbG9yID09IFwicGlua1wiXG4gICAgICAgICAgICA/IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMjIwcHhdIHctWzIyMHB4XSBiZy1bI0UwQzRDNV0gcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWNsaXBcIlxuICAgICAgICAgICAgOiBjb2xvciA9PSBcImdyZWVuXCJcbiAgICAgICAgICAgID8gXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLVsyMjBweF0gdy1bMjIwcHhdIGJnLVsjOEY5QzJGXSByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctY2xpcFwiXG4gICAgICAgICAgICA6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMjIwcHhdIHctWzIyMHB4XSBiZy1bI0U5Mzg2MF0gcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWNsaXBcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZSA9PSBcIkRvIG1lLlwiID8gKFxuICAgICAgICAgIDxJb0lvc0NoZWNrbWFya0NpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc2l6ZT17MTAwfSAvPlxuICAgICAgICApIDogdGl0bGUgPT0gXCJub3RBUmVhbFN0b3JlXCIgPyAoXG4gICAgICAgICAgPElvSW9zQ2FydCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc2l6ZT17MTAwfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJb01kQnVsYiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc2l6ZT17MTAwfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bI0U3RTdFN10gbXQtMlwiPnt0aXRsZX08L2gzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJb0lvc0NoZWNrbWFya0NpcmNsZSIsIklvSW9zQ2FydCIsIklvTWRCdWxiIiwiUHJvamVjdENhcmQiLCJ0aXRsZSIsImNvbG9yIiwic2V0IiwiYyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzaXplIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProjectCard.js\n"));

/***/ })

});