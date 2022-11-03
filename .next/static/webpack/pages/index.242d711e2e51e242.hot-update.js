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

/***/ "./src/components/Friend/FriendList.tsx":
/*!**********************************************!*\
  !*** ./src/components/Friend/FriendList.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends\": function() { return /* binding */ friends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Friend */ \"./src/components/Friend/Friend.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _styles_friendlist_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/friendlist.module.css */ \"./styles/friendlist.module.css\");\n/* harmony import */ var _styles_friendlist_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_friendlist_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst friends = [];\nconst FriendList = ()=>{\n    _s();\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.GET_FRIENDS);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error \"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n        lineNumber: 13,\n        columnNumber: 21\n    }, undefined);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {}, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, undefined);\n    const { friends  } = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n        className: (_styles_friendlist_module_css__WEBPACK_IMPORTED_MODULE_6___default().friendlist),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"MY FRIEND LIST\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            friends.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"A\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"D\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"D\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"F\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"R\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"I\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"E\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"N\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"D\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            friends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        friend: friend\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, friend.id, false, {\n                    fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendList.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FriendList, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = FriendList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendList);\nvar _c;\n$RefreshReg$(_c, \"FriendList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GcmllbmQvRnJpZW5kTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUM7QUFDWDtBQUNJO0FBQ1k7QUFDTztBQUNDO0FBQ1M7QUFFcEQsTUFBTU8sVUFBVSxFQUFFLENBQUM7QUFFMUIsTUFBTUMsYUFBYSxJQUFNOztJQUN2QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR1Isd0RBQVFBLENBQUNFLHVEQUFXQTtJQUNyRCxJQUFJSyxPQUFPLHFCQUFPLDhEQUFDRTtrQkFBSTs7Ozs7O0lBQ3ZCLElBQUlELFNBQVMscUJBQU8sOERBQUNQLDJEQUFnQkE7Ozs7O0lBQ3JDLE1BQU0sRUFBRUcsUUFBTyxFQUFFLEdBQUdFO0lBRXBCLHFCQUNFLDhEQUFDVCwrQ0FBSUE7UUFBQ2EsV0FBV1AsaUZBQWlCOzswQkFDaEMsOERBQUNNOzBCQUFJOzs7Ozs7WUFDSkwsUUFBUVEsTUFBTSxLQUFLLG1CQUNsQiw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNEO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHOzs7Ozs7Ozs7Ozs7WUFJUFYsUUFBUVksR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDSDs4QkFDQyw0RUFBQ2YsK0NBQU1BO3dCQUFDa0IsUUFBUUE7Ozs7OzttQkFEVEEsT0FBT0MsRUFBRTs7Ozs7Ozs7Ozs7QUFNMUI7R0EvQk1iOztRQUM2Qkwsb0RBQVFBOzs7S0FEckNLO0FBaUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZyaWVuZC9GcmllbmRMaXN0LnRzeD8xMjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZyaWVuZCBmcm9tIFwiLi9GcmllbmRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEdFVF9GUklFTkRTIH0gZnJvbSBcIi4uLy4uL1ByaXNtYS9GcmllbmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9mcmllbmRsaXN0Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGZyaWVuZHMgPSBbXTtcblxuY29uc3QgRnJpZW5kTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoR0VUX0ZSSUVORFMpO1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIDwvZGl2PjtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcbiAgY29uc3QgeyBmcmllbmRzIH0gPSBkYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kbGlzdH0+XG4gICAgICA8ZGl2Pk1ZIEZSSUVORCBMSVNUPC9kaXY+XG4gICAgICB7ZnJpZW5kcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkE8L2xpPlxuICAgICAgICAgIDxsaT5EPC9saT5cbiAgICAgICAgICA8bGk+RDwvbGk+XG4gICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDxsaT5GPC9saT5cbiAgICAgICAgICA8bGk+UjwvbGk+XG4gICAgICAgICAgPGxpPkk8L2xpPlxuICAgICAgICAgIDxsaT5FPC9saT5cbiAgICAgICAgICA8bGk+TjwvbGk+XG4gICAgICAgICAgPGxpPkQ8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgKX1cblxuICAgICAge2ZyaWVuZHMubWFwKChmcmllbmQpID0+IChcbiAgICAgICAgPGxpIGtleT17ZnJpZW5kLmlkfT5cbiAgICAgICAgICA8RnJpZW5kIGZyaWVuZD17ZnJpZW5kfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kTGlzdDtcbiJdLCJuYW1lcyI6WyJMaXN0IiwiUmVhY3QiLCJGcmllbmQiLCJ1c2VRdWVyeSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJHRVRfRlJJRU5EUyIsInN0eWxlcyIsImZyaWVuZHMiLCJGcmllbmRMaXN0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImZyaWVuZGxpc3QiLCJsZW5ndGgiLCJ1bCIsImxpIiwicCIsIm1hcCIsImZyaWVuZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Friend/FriendList.tsx\n"));

/***/ })

});