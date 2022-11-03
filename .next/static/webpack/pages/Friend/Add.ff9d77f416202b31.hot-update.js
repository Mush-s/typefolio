"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Friend/Add",{

/***/ "./src/pages/Friend/Add/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/Friend/Add/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var mui_color_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mui-color-input */ \"./node_modules/mui-color-input/dist/mui-color-input.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../function/Reload */ \"./src/function/Reload.tsx\");\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AddFriend = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"000000\");\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorAlert, setErrorAlert] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [FriendCreate] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__.CREATE_FRIEND);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (alert || errorAlert) {\n            setTimeout(()=>{\n                if (alert) {\n                    setAlert(false);\n                } else {\n                    setErrorAlert(false);\n                }\n            }, 3000);\n        }\n    });\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        if (name.length >= 1 && color) {\n            FriendCreate({\n                variables: {\n                    name,\n                    color\n                }\n            });\n            setAlert(true);\n            setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_3__.doReload, 1000);\n        }\n        setErrorAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            alert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n                severity: \"success\",\n                children: \"This is a success alert — check it out!\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            errorAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n                severity: \"error\",\n                children: \"This is a success alert — check it out!\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>submitHandler(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        value: name,\n                        label: \"Name\",\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mui_color_input__WEBPACK_IMPORTED_MODULE_1__.MuiColorInput, {\n                        variant: \"outlined\",\n                        label: \"Color\",\n                        value: color,\n                        onChange: (color)=>setColor(color)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddFriend, \"fTCjuziGzR8gW2oLTA68xyxdLWo=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = AddFriend;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFriend);\nvar _c;\n$RefreshReg$(_c, \"AddFriend\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0FkZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF1RDtBQUNFO0FBQ1Q7QUFDRztBQUNDO0FBQ0c7QUFFdkQsTUFBTVUsWUFBWSxJQUFNOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xELE1BQU0sQ0FBQ1ksYUFBYSxHQUFHbkIsMkRBQVdBLENBQUNTLHlEQUFhQTtJQUVoREgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlTLFNBQVNFLFlBQVk7WUFDdkJHLFdBQVcsSUFBTTtnQkFDZixJQUFJTCxPQUFPO29CQUNUQyxTQUFTLEtBQUs7Z0JBQ2hCLE9BQU87b0JBQ0xFLGNBQWMsS0FBSztnQkFDckIsQ0FBQztZQUNILEdBQUc7UUFDTCxDQUFDO0lBQ0g7SUFFQSxNQUFNRyxnQkFBZ0IsQ0FBQ0MsSUFBd0M7UUFDN0RBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSVosS0FBS2EsTUFBTSxJQUFJLEtBQUtYLE9BQU87WUFDN0JNLGFBQWE7Z0JBQ1hNLFdBQVc7b0JBQ1RkO29CQUNBRTtnQkFDRjtZQUNGO1lBQ0FHLFNBQVMsSUFBSTtZQUNiSSxXQUFXWixzREFBUUEsRUFBRTtRQUN2QixDQUFDO1FBQ0RVLGNBQWMsSUFBSTtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDUTs7WUFDRVgsdUJBQ0MsOERBQUNkLGdEQUFLQTtnQkFBQzBCLFVBQVM7MEJBQVU7Ozs7OztZQUkzQlYsNEJBQ0MsOERBQUNoQixnREFBS0E7Z0JBQUMwQixVQUFTOzBCQUFROzs7Ozs7MEJBRTFCLDhEQUFDQztnQkFBS0MsVUFBVSxDQUFDUCxJQUFNRCxjQUFjQzs7a0NBQ25DLDhEQUFDbkIsb0RBQVNBO3dCQUNSMkIsT0FBT25CO3dCQUNQb0IsT0FBTTt3QkFDTkMsVUFBVSxDQUFDVixJQUFNVixRQUFRVSxFQUFFVyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFekMsOERBQUMxQiwwREFBYUE7d0JBQ1o4QixTQUFRO3dCQUNSSCxPQUFNO3dCQUNORCxPQUFPakI7d0JBQ1BtQixVQUFVLENBQUNuQixRQUFVQyxTQUFTRDs7Ozs7O2tDQUVoQyw4REFBQ1gsaURBQU1BO3dCQUFDaUMsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ2pDLGlEQUFNQTtnQkFBQ2tDLE1BQUs7MEJBQUk7Ozs7Ozs7Ozs7OztBQUd2QjtHQTdETTFCOztRQUttQlYsdURBQVdBOzs7S0FMOUJVO0FBK0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9GcmllbmQvQWRkL2luZGV4LnRzeD9hNTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IE11aUNvbG9ySW5wdXQgfSBmcm9tIFwibXVpLWNvbG9yLWlucHV0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZG9SZWxvYWQgfSBmcm9tIFwiLi4vLi4vLi4vZnVuY3Rpb24vUmVsb2FkXCI7XG5pbXBvcnQgeyBDUkVBVEVfRlJJRU5EIH0gZnJvbSBcIi4uLy4uLy4uL1ByaXNtYS9GcmllbmRcIjtcblxuY29uc3QgQWRkRnJpZW5kID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCIwMDAwMDBcIik7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JBbGVydCwgc2V0RXJyb3JBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtGcmllbmRDcmVhdGVdID0gdXNlTXV0YXRpb24oQ1JFQVRFX0ZSSUVORCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxlcnQgfHwgZXJyb3JBbGVydCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChhbGVydCkge1xuICAgICAgICAgIHNldEFsZXJ0KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvckFsZXJ0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuYW1lLmxlbmd0aCA+PSAxICYmIGNvbG9yKSB7XG4gICAgICBGcmllbmRDcmVhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGNvbG9yLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBzZXRBbGVydCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoZG9SZWxvYWQsIDEwMDApO1xuICAgIH1cbiAgICBzZXRFcnJvckFsZXJ0KHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHthbGVydCAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICBUaGlzIGlzIGEgc3VjY2VzcyBhbGVydCDigJQgY2hlY2sgaXQgb3V0IVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHtlcnJvckFsZXJ0ICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5UaGlzIGlzIGEgc3VjY2VzcyBhbGVydCDigJQgY2hlY2sgaXQgb3V0ITwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXRIYW5kbGVyKGUpfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE11aUNvbG9ySW5wdXRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIGxhYmVsPVwiQ29sb3JcIlxuICAgICAgICAgIHZhbHVlPXtjb2xvcn1cbiAgICAgICAgICBvbkNoYW5nZT17KGNvbG9yKSA9PiBzZXRDb2xvcihjb2xvcil9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPEJ1dHRvbiBocmVmPVwiL1wiPmJhY2s8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZyaWVuZDtcbiJdLCJuYW1lcyI6WyJ1c2VNdXRhdGlvbiIsIkFsZXJ0IiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiTXVpQ29sb3JJbnB1dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkb1JlbG9hZCIsIkNSRUFURV9GUklFTkQiLCJBZGRGcmllbmQiLCJuYW1lIiwic2V0TmFtZSIsImNvbG9yIiwic2V0Q29sb3IiLCJhbGVydCIsInNldEFsZXJ0IiwiZXJyb3JBbGVydCIsInNldEVycm9yQWxlcnQiLCJGcmllbmRDcmVhdGUiLCJzZXRUaW1lb3V0Iiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInZhcmlhYmxlcyIsImRpdiIsInNldmVyaXR5IiwiZm9ybSIsIm9uU3VibWl0IiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFyaWFudCIsInR5cGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Friend/Add/index.tsx\n"));

/***/ })

});