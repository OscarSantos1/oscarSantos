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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst ProjectCard = (param)=>{\n    let { title , color , set , oneSelected , selected  } = param;\n    const c = color;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: title == \"Do me.\" ? \"absolute mt-10 \".concat(selected == \"Do me.\" ? \"z-10 one-square bg-[#8f9c2f] w-[330px]\" : \"one fade-in\", \" flex flex-col justify-center items-center\") : title == \"notARealStore\" ? \"absolute \".concat(!oneSelected ? \"two fade-in\" : selected == \"notARealStore\" ? \"one z-10 two-square bg-[#E93860] w-[330px]\" : \"one two-out\", \"  flex flex-col justify-center items-center\") : \"absolute \".concat(!oneSelected ? \"three fade-in\" : selected == \"Blank Page\" ? \"one three-square bg-[#E0C4C5] w-[330px]\" : \"one three-out\", \" flex flex-col justify-center items-center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: set,\n                    className: color == \"pink\" ? \"flex items-center justify-center h-[220px] w-[220px] bg-[#E0C4C5] rounded-full cursor-pointer overflow-clip\" : color == \"green\" ? \"flex items-center justify-center h-[220px] w-[220px] bg-[#8F9C2F] rounded-full cursor-pointer overflow-clip\" : \"flex items-center justify-center h-[220px] w-[220px] bg-[#E93860] rounded-full cursor-pointer overflow-clip\",\n                    children: title == \"Do me.\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosCheckmarkCircle, {\n                        className: \"text-white\",\n                        size: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined) : title == \"notARealStore\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosCart, {\n                        className: \"text-white\",\n                        size: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoMdBulb, {\n                        className: \"text-white\",\n                        size: 100\n                    }, void 0, false, {\n                        fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                !oneSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-[#E7E7E7] mt-2\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n                    lineNumber: 51,\n                    columnNumber: 26\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/oscardelossantos/Documents/Software Engineering/Portfolio/oscarSantos/frontend/src/components/ProjectCard.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ2lEO0FBRTNFLE1BQU1JLGNBQWMsU0FBa0Q7UUFBakQsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLElBQUcsRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUU7SUFDL0QsTUFBTUMsSUFBSUo7SUFDVixxQkFDRTtrQkFDRSw0RUFBQ0s7WUFDQ0MsV0FDRVAsU0FBUyxXQUNMLGtCQUlDLE9BSENJLFlBQVksV0FDUiwyQ0FDQSxhQUFhLEVBQ2xCLGdEQUNESixTQUFTLGtCQUNULFlBTUMsT0FMQyxDQUFDRyxjQUNHLGdCQUNBQyxZQUFZLGtCQUNaLCtDQUNBLGFBQWEsRUFDbEIsaURBQ0QsWUFNQyxPQUxDLENBQUNELGNBQ0csa0JBQ0FDLFlBQVksZUFDWiw0Q0FDQSxlQUFlLEVBQ3BCLDZDQUEyQzs7OEJBR2xELDhEQUFDRTtvQkFDQ0UsU0FBU047b0JBQ1RLLFdBQ0VOLFNBQVMsU0FDSixnSEFDREEsU0FBUyxVQUNSLGdIQUNBLDZHQUE0Rzs4QkFHbEhELFNBQVMseUJBQ1IsOERBQUNKLGdFQUFvQkE7d0JBQUNXLFdBQVU7d0JBQWFFLE1BQU07Ozs7O29DQUNqRFQsU0FBUyxnQ0FDWCw4REFBQ0gscURBQVNBO3dCQUFDVSxXQUFVO3dCQUFhRSxNQUFNOzs7OztrREFFeEMsOERBQUNYLG9EQUFRQTt3QkFBQ1MsV0FBVTt3QkFBYUUsTUFBTTs7Ozs7aUNBQ3hDOzs7Ozs7Z0JBRUYsQ0FBQ04sNkJBQWUsOERBQUNPO29CQUFHSCxXQUFVOzhCQUF1QlA7Ozs7Ozs7Ozs7Ozs7QUFJOUQ7S0FuRE1EO0FBcUROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzP2JlNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2FydCwgSW9NZEJ1bGIgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyB0aXRsZSwgY29sb3IsIHNldCwgb25lU2VsZWN0ZWQsIHNlbGVjdGVkIH0pID0+IHtcbiAgY29uc3QgYyA9IGNvbG9yO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgdGl0bGUgPT0gXCJEbyBtZS5cIlxuICAgICAgICAgICAgPyBgYWJzb2x1dGUgbXQtMTAgJHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9PSBcIkRvIG1lLlwiXG4gICAgICAgICAgICAgICAgICA/IFwiei0xMCBvbmUtc3F1YXJlIGJnLVsjOGY5YzJmXSB3LVszMzBweF1cIlxuICAgICAgICAgICAgICAgICAgOiBcIm9uZSBmYWRlLWluXCJcbiAgICAgICAgICAgICAgfSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmBcbiAgICAgICAgICAgIDogdGl0bGUgPT0gXCJub3RBUmVhbFN0b3JlXCJcbiAgICAgICAgICAgID8gYGFic29sdXRlICR7XG4gICAgICAgICAgICAgICAgIW9uZVNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICA/IFwidHdvIGZhZGUtaW5cIlxuICAgICAgICAgICAgICAgICAgOiBzZWxlY3RlZCA9PSBcIm5vdEFSZWFsU3RvcmVcIlxuICAgICAgICAgICAgICAgICAgPyBcIm9uZSB6LTEwIHR3by1zcXVhcmUgYmctWyNFOTM4NjBdIHctWzMzMHB4XVwiXG4gICAgICAgICAgICAgICAgICA6IFwib25lIHR3by1vdXRcIlxuICAgICAgICAgICAgICB9ICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmBcbiAgICAgICAgICAgIDogYGFic29sdXRlICR7XG4gICAgICAgICAgICAgICAgIW9uZVNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICA/IFwidGhyZWUgZmFkZS1pblwiXG4gICAgICAgICAgICAgICAgICA6IHNlbGVjdGVkID09IFwiQmxhbmsgUGFnZVwiXG4gICAgICAgICAgICAgICAgICA/IFwib25lIHRocmVlLXNxdWFyZSBiZy1bI0UwQzRDNV0gdy1bMzMwcHhdXCJcbiAgICAgICAgICAgICAgICAgIDogXCJvbmUgdGhyZWUtb3V0XCJcbiAgICAgICAgICAgICAgfSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmBcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17c2V0fVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBjb2xvciA9PSBcInBpbmtcIlxuICAgICAgICAgICAgICA/IGBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLVsyMjBweF0gdy1bMjIwcHhdIGJnLVsjRTBDNEM1XSByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctY2xpcGBcbiAgICAgICAgICAgICAgOiBjb2xvciA9PSBcImdyZWVuXCJcbiAgICAgICAgICAgICAgPyBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMjIwcHhdIHctWzIyMHB4XSBiZy1bIzhGOUMyRl0gcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWNsaXBgXG4gICAgICAgICAgICAgIDogYGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzIyMHB4XSB3LVsyMjBweF0gYmctWyNFOTM4NjBdIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1jbGlwYFxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZSA9PSBcIkRvIG1lLlwiID8gKFxuICAgICAgICAgICAgPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBzaXplPXsxMDB9IC8+XG4gICAgICAgICAgKSA6IHRpdGxlID09IFwibm90QVJlYWxTdG9yZVwiID8gKFxuICAgICAgICAgICAgPElvSW9zQ2FydCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc2l6ZT17MTAwfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW9NZEJ1bGIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHNpemU9ezEwMH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyFvbmVTZWxlY3RlZCAmJiA8aDMgY2xhc3NOYW1lPVwidGV4dC1bI0U3RTdFN10gbXQtMlwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJb0lvc0NoZWNrbWFya0NpcmNsZSIsIklvSW9zQ2FydCIsIklvTWRCdWxiIiwiUHJvamVjdENhcmQiLCJ0aXRsZSIsImNvbG9yIiwic2V0Iiwib25lU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProjectCard.js\n"));

/***/ })

});