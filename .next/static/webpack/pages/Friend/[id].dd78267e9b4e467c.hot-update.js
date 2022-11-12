"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Friend/[id]",{

/***/ "./src/components/Friend/FriendMemo.tsx":
/*!**********************************************!*\
  !*** ./src/components/Friend/FriendMemo.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"friends\": function() { return /* binding */ friends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/friendmemo.module.css */ \"./styles/friendmemo.module.css\");\n/* harmony import */ var _styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Prisma_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Prisma/Post */ \"./src/Prisma/Post.tsx\");\n/* harmony import */ var _mui_icons_material_CoPresent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/CoPresent */ \"./node_modules/@mui/icons-material/CoPresent.js\");\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../function/Reload */ \"./src/function/Reload.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst friends = [];\nconst FriendMemo = (props)=>{\n    _s();\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_2__.GET_FRIENDS);\n    const [UpdatePost] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_Prisma_Post__WEBPACK_IMPORTED_MODULE_3__.UPDATE_POST);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error \"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n        lineNumber: 29,\n        columnNumber: 21\n    }, undefined);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n        lineNumber: 30,\n        columnNumber: 23\n    }, undefined);\n    const { friends  } = data;\n    const { postData , name  } = props;\n    const friend = friends.filter((friend)=>friend.name === name);\n    const filteredPosts = postData.filter((post)=>post.color === friend[0].color);\n    const filteredAllPosts = filteredPosts.concat(postData.filter((post)=>post.color === \"#2196f3\"));\n    const NotDonePosts = filteredAllPosts.filter((post)=>post.done === false);\n    function changeHandler(id) {\n        const Post = postData.find((post)=>post.length === id);\n        UpdatePost({\n            variables: {\n                lengthId: Post.id,\n                done: !Post.done\n            }\n        });\n        setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_4__.doReload, 1000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default().center),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default().friendmemo),\n                children: NotDonePosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default().block),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default().center),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    onClick: (e)=>changeHandler(post.length),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CoPresent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        post.title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                                children: post.content\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),\n                                children: [\n                                    \"Date: \",\n                                    post.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, post.length, true, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FriendMemo, \"K2CBSIt4HJDwxU9PdrJuYF7dfxI=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = FriendMemo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendMemo);\nvar _c;\n$RefreshReg$(_c, \"FriendMemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GcmllbmQvRnJpZW5kTWVtby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNFO0FBQ3lCO0FBQ2pCO0FBQ1M7QUFDZDtBQUNHO0FBQ1U7QUFFVDtBQUUxQyxNQUFNVSxVQUFVLEVBQUUsQ0FBQztBQWMxQixNQUFNQyxhQUFhLENBQUNDLFFBQWlCOztJQUNuQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR2Qsd0RBQVFBLENBQUNHLHVEQUFXQTtJQUNyRCxNQUFNLENBQUNZLFdBQVcsR0FBR1YsMkRBQVdBLENBQUNDLHFEQUFXQTtJQUM1QyxJQUFJTyxPQUFPLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUlGLFNBQVMscUJBQU8sOERBQUNaLDJEQUFnQkE7Ozs7O0lBRXJDLE1BQU0sRUFBRU8sUUFBTyxFQUFFLEdBQUdHO0lBQ3BCLE1BQU0sRUFBRUssU0FBUSxFQUFFQyxLQUFJLEVBQUUsR0FBR1A7SUFFM0IsTUFBTVEsU0FBU1YsUUFBUVcsTUFBTSxDQUFDLENBQUNELFNBQVdBLE9BQU9ELElBQUksS0FBS0E7SUFDMUQsTUFBTUcsZ0JBQWdCSixTQUFTRyxNQUFNLENBQ25DLENBQUNFLE9BQVNBLEtBQUtDLEtBQUssS0FBS0osTUFBTSxDQUFDLEVBQUUsQ0FBQ0ksS0FBSztJQUcxQyxNQUFNQyxtQkFBbUJILGNBQWNJLE1BQU0sQ0FDM0NSLFNBQVNHLE1BQU0sQ0FBQyxDQUFDRSxPQUFTQSxLQUFLQyxLQUFLLEtBQUs7SUFHM0MsTUFBTUcsZUFBZUYsaUJBQWlCSixNQUFNLENBQUMsQ0FBQ0UsT0FBU0EsS0FBS0ssSUFBSSxLQUFLLEtBQUs7SUFFMUUsU0FBU0MsY0FBY0MsRUFBVSxFQUFFO1FBQ2pDLE1BQU1DLE9BQVliLFNBQVNjLElBQUksQ0FBQyxDQUFDVCxPQUFTQSxLQUFLVSxNQUFNLEtBQUtIO1FBQzFEZCxXQUFXO1lBQ1RrQixXQUFXO2dCQUNUQyxVQUFVSixLQUFLRCxFQUFFO2dCQUNqQkYsTUFBTSxDQUFDRyxLQUFLSCxJQUFJO1lBQ2xCO1FBQ0Y7UUFDQVEsV0FBVzNCLHNEQUFRQSxFQUFFO0lBQ3ZCO0lBQ0EscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ29CO2dCQUFHQyxXQUFXakMsNkVBQWE7MEJBQUdjOzs7Ozs7MEJBQy9CLDhEQUFDcUI7Z0JBQUdGLFdBQVdqQyxpRkFBaUI7MEJBQzdCc0IsYUFBYWUsR0FBRyxDQUFDLENBQUNuQixxQkFDakIsOERBQUNvQjt3QkFBcUJMLFdBQVdqQyw0RUFBWTs7MENBQzNDLDhEQUFDd0M7Z0NBQUdQLFdBQVdqQyw2RUFBYTswQ0FDMUIsNEVBQUNILGlEQUFNQTtvQ0FBQzRDLFNBQVMsQ0FBQ0MsSUFBTWxCLGNBQWNOLEtBQUtVLE1BQU07O3NEQUMvQyw4REFBQ3pCLHFFQUFhQTs7Ozs7d0NBQ2JlLEtBQUt5QixLQUFLOzs7Ozs7Ozs7Ozs7MENBR2YsOERBQUNDO2dDQUFHWCxXQUFXakMsOEVBQWM7MENBQUdrQixLQUFLMkIsT0FBTzs7Ozs7OzBDQUM1Qyw4REFBQ0M7Z0NBQUdiLFdBQVdqQywyRUFBVzs7b0NBQUU7b0NBQU9rQixLQUFLNkIsSUFBSTs7Ozs7Ozs7dUJBUnJDN0IsS0FBS1UsTUFBTTs7Ozs7Ozs7OzswQkFZeEIsOERBQUNPOzs7Ozs7Ozs7OztBQUdQO0dBbERNN0I7O1FBQzZCVixvREFBUUE7UUFDcEJLLHVEQUFXQTs7O0tBRjVCSztBQW9ETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GcmllbmQvRnJpZW5kTWVtby50c3g/MWMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEdFVF9GUklFTkRTIH0gZnJvbSBcIi4uLy4uL1ByaXNtYS9GcmllbmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9mcmllbmRtZW1vLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBVUERBVEVfUE9TVCB9IGZyb20gXCIuLi8uLi9QcmlzbWEvUG9zdFwiO1xuaW1wb3J0IENvUHJlc2VudEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ29QcmVzZW50XCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93UmlnaHRcIjtcbmltcG9ydCB7IGRvUmVsb2FkIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9uL1JlbG9hZFwiO1xuXG5leHBvcnQgY29uc3QgZnJpZW5kcyA9IFtdO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0RGF0YToge1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGRvbmU6IGJvb2xlYW47XG4gIH1bXTtcbiAgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IEZyaWVuZE1lbW8gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEdFVF9GUklFTkRTKTtcbiAgY29uc3QgW1VwZGF0ZVBvc3RdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BPU1QpO1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIDwvZGl2PjtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcblxuICBjb25zdCB7IGZyaWVuZHMgfSA9IGRhdGE7XG4gIGNvbnN0IHsgcG9zdERhdGEsIG5hbWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGZyaWVuZCA9IGZyaWVuZHMuZmlsdGVyKChmcmllbmQpID0+IGZyaWVuZC5uYW1lID09PSBuYW1lKTtcbiAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IHBvc3REYXRhLmZpbHRlcihcbiAgICAocG9zdCkgPT4gcG9zdC5jb2xvciA9PT0gZnJpZW5kWzBdLmNvbG9yXG4gICk7XG5cbiAgY29uc3QgZmlsdGVyZWRBbGxQb3N0cyA9IGZpbHRlcmVkUG9zdHMuY29uY2F0KFxuICAgIHBvc3REYXRhLmZpbHRlcigocG9zdCkgPT4gcG9zdC5jb2xvciA9PT0gXCIjMjE5NmYzXCIpXG4gICk7XG5cbiAgY29uc3QgTm90RG9uZVBvc3RzID0gZmlsdGVyZWRBbGxQb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuZG9uZSA9PT0gZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IFBvc3Q6IGFueSA9IHBvc3REYXRhLmZpbmQoKHBvc3QpID0+IHBvc3QubGVuZ3RoID09PSBpZCk7XG4gICAgVXBkYXRlUG9zdCh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgbGVuZ3RoSWQ6IFBvc3QuaWQsXG4gICAgICAgIGRvbmU6ICFQb3N0LmRvbmUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZG9SZWxvYWQsIDEwMDApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntuYW1lfTwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kbWVtb30+XG4gICAgICAgIHtOb3REb25lUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5sZW5ndGh9IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VIYW5kbGVyKHBvc3QubGVuZ3RoKX0+XG4gICAgICAgICAgICAgICAgPENvUHJlc2VudEljb24gLz5cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pntwb3N0LmNvbnRlbnR9PC9oND5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5EYXRlOiB7cG9zdC5kYXRlfTwvaDY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHVsPjwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRNZW1vO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUXVlcnkiLCJCdXR0b24iLCJDaXJjdWxhclByb2dyZXNzIiwiR0VUX0ZSSUVORFMiLCJzdHlsZXMiLCJ1c2VNdXRhdGlvbiIsIlVQREFURV9QT1NUIiwiQ29QcmVzZW50SWNvbiIsImRvUmVsb2FkIiwiZnJpZW5kcyIsIkZyaWVuZE1lbW8iLCJwcm9wcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJVcGRhdGVQb3N0IiwiZGl2IiwicG9zdERhdGEiLCJuYW1lIiwiZnJpZW5kIiwiZmlsdGVyIiwiZmlsdGVyZWRQb3N0cyIsInBvc3QiLCJjb2xvciIsImZpbHRlcmVkQWxsUG9zdHMiLCJjb25jYXQiLCJOb3REb25lUG9zdHMiLCJkb25lIiwiY2hhbmdlSGFuZGxlciIsImlkIiwiUG9zdCIsImZpbmQiLCJsZW5ndGgiLCJ2YXJpYWJsZXMiLCJsZW5ndGhJZCIsInNldFRpbWVvdXQiLCJoMSIsImNsYXNzTmFtZSIsImNlbnRlciIsInVsIiwiZnJpZW5kbWVtbyIsIm1hcCIsImxpIiwiYmxvY2siLCJoMiIsIm9uQ2xpY2siLCJlIiwidGl0bGUiLCJoNCIsImNvbnRlbnQiLCJoNiIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Friend/FriendMemo.tsx\n"));

/***/ }),

/***/ "./src/function/Reload.tsx":
/*!*********************************!*\
  !*** ./src/function/Reload.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doReload\": function() { return /* binding */ doReload; }\n/* harmony export */ });\nconst doReload = ()=>{\n    location.reload();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb24vUmVsb2FkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVyxJQUFNO0lBQzdCQyxTQUFTQyxNQUFNO0FBQ2hCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Z1bmN0aW9uL1JlbG9hZC50c3g/OTIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZG9SZWxvYWQgPSAoKSA9PiB7XG5cdGxvY2F0aW9uLnJlbG9hZCgpXG59XG4iXSwibmFtZXMiOlsiZG9SZWxvYWQiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/function/Reload.tsx\n"));

/***/ })

});