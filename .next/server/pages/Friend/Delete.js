/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Friend/Delete";
exports.ids = ["pages/Friend/Delete"];
exports.modules = {

/***/ "./styles/delete.module.css":
/*!**********************************!*\
  !*** ./styles/delete.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"delete\": \"delete_delete__7j2J0\",\n\t\"list\": \"delete_list__2VlCT\",\n\t\"name\": \"delete_name__IsZAp\",\n\t\"flex\": \"delete_flex__N5DoO\",\n\t\"button\": \"delete_button__iVYfZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZGVsZXRlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtcG9ydGZvbGlvLy4vc3R5bGVzL2RlbGV0ZS5tb2R1bGUuY3NzP2U1NTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGVsZXRlXCI6IFwiZGVsZXRlX2RlbGV0ZV9fN2oySjBcIixcblx0XCJsaXN0XCI6IFwiZGVsZXRlX2xpc3RfXzJWbENUXCIsXG5cdFwibmFtZVwiOiBcImRlbGV0ZV9uYW1lX19Jc1pBcFwiLFxuXHRcImZsZXhcIjogXCJkZWxldGVfZmxleF9fTjVEb09cIixcblx0XCJidXR0b25cIjogXCJkZWxldGVfYnV0dG9uX19pVllmWlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/delete.module.css\n");

/***/ }),

/***/ "./src/Prisma/Friend.tsx":
/*!*******************************!*\
  !*** ./src/Prisma/Friend.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_FRIEND\": () => (/* binding */ CREATE_FRIEND),\n/* harmony export */   \"DELETE_FRIEND\": () => (/* binding */ DELETE_FRIEND),\n/* harmony export */   \"GET_FRIENDS\": () => (/* binding */ GET_FRIENDS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_FRIENDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    friends {\n      id\n      name\n      color\n    }\n  }\n`;\nconst CREATE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation FriendCreate($name: String!, $color: String!) {\n    friendCreate(name: $name, color: $color) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        color\n      }\n    }\n  }\n`;\nconst DELETE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation DeleteFriend($id: Int!) {\n    friendDelete(id: $id) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        color\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJpc21hL0ZyaWVuZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsY0FBY0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFRL0IsQ0FBQyxDQUFDO0FBRUssTUFBTUUsZ0JBQWdCRiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYWpDLENBQUMsQ0FBQztBQUVLLE1BQU1HLGdCQUFnQkgsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9QcmlzbWEvRnJpZW5kLnRzeD9iMDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX0ZSSUVORFMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmcmllbmRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBjb2xvclxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIEZyaWVuZENyZWF0ZSgkbmFtZTogU3RyaW5nISwgJGNvbG9yOiBTdHJpbmchKSB7XG4gICAgZnJpZW5kQ3JlYXRlKG5hbWU6ICRuYW1lLCBjb2xvcjogJGNvbG9yKSB7XG4gICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfVxuICAgICAgZnJpZW5kIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBjb2xvclxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIERlbGV0ZUZyaWVuZCgkaWQ6IEludCEpIHtcbiAgICBmcmllbmREZWxldGUoaWQ6ICRpZCkge1xuICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGZyaWVuZCB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgY29sb3JcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0ZSSUVORFMiLCJDUkVBVEVfRlJJRU5EIiwiREVMRVRFX0ZSSUVORCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Prisma/Friend.tsx\n");

/***/ }),

/***/ "./src/function/Reload.tsx":
/*!*********************************!*\
  !*** ./src/function/Reload.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doReload\": () => (/* binding */ doReload)\n/* harmony export */ });\nconst doReload = ()=>{\n    location.reload();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb24vUmVsb2FkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVyxJQUFNO0lBQzdCQyxTQUFTQyxNQUFNO0FBQ2hCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9mdW5jdGlvbi9SZWxvYWQudHN4PzkyMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRvUmVsb2FkID0gKCkgPT4ge1xuXHRsb2NhdGlvbi5yZWxvYWQoKVxufVxuIl0sIm5hbWVzIjpbImRvUmVsb2FkIiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/function/Reload.tsx\n");

/***/ }),

/***/ "./src/pages/Friend/Delete/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Friend/Delete/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../styles/delete.module.css */ \"./styles/delete.module.css\");\n/* harmony import */ var _styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../function/Reload */ \"./src/function/Reload.tsx\");\n\n\n\n\n\n\n\nconst DeleteFriend = ()=>{\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.GET_FRIENDS);\n    const [DeleteFriend] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.DELETE_FRIEND);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"error\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 21\n    }, undefined);\n    const { friends  } = data;\n    const deleteHandler = (id)=>{\n        DeleteFriend({\n            variables: {\n                id: id\n            }\n        });\n        setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_5__.doReload, 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"DELETE PAGE\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                children: friends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default().flex),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),\n                                    children: friend.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: friend.color\n                                }, void 0, false, {\n                                    fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                                    onClick: (e)=>deleteHandler(friend.id),\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    }, friend.id, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0RlbGV0ZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2dDO0FBQ0g7QUFDYTtBQUM3QjtBQUNhO0FBRXBELE1BQU1RLGVBQWUsSUFBTTtJQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR1Isd0RBQVFBLENBQUNDLHVEQUFXQTtJQUNyRCxNQUFNLENBQUNJLGFBQWEsR0FBR04sMkRBQVdBLENBQUNHLHlEQUFhQTtJQUVoRCxJQUFJTSxTQUFTLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBQ3pCLElBQUlGLE9BQU8scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0o7SUFFcEIsTUFBTUssZ0JBQWdCLENBQUNDLEtBQVk7UUFDakNQLGFBQWE7WUFBRVEsV0FBVztnQkFBRUQsSUFBSUE7WUFBRztRQUFFO1FBQ3JDRSxXQUFXVixzREFBUUEsRUFBRTtJQUN2QjtJQUNBLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNOLGlEQUFNQTtnQkFBQ1ksTUFBSzswQkFBSTs7Ozs7OzBCQUNqQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUdDLFdBQVdwQiw0RUFBYTswQkFDekJZLFFBQVFVLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ0M7d0JBQW1CSixXQUFXcEIsdUVBQVc7a0NBQ3hDLDRFQUFDVzs0QkFBSVMsV0FBV3BCLHVFQUFXOzs4Q0FDekIsOERBQUMyQjtvQ0FBR1AsV0FBV3BCLHVFQUFXOzhDQUFHdUIsT0FBT0ssSUFBSTs7Ozs7OzhDQUN4Qyw4REFBQ0M7OENBQUlOLE9BQU9PLEtBQUs7Ozs7Ozs4Q0FDakIsOERBQUN6QixpREFBTUE7b0NBQ0xlLFdBQVdwQix5RUFBYTtvQ0FDeEJnQyxTQUFTLENBQUNDLElBQU1wQixjQUFjVSxPQUFPVCxFQUFFOzhDQUN4Qzs7Ozs7Ozs7Ozs7O3VCQVBJUyxPQUFPVCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I1QjtBQUVBLGlFQUFlUCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zcmMvcGFnZXMvRnJpZW5kL0RlbGV0ZS9pbmRleC50c3g/ZGYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZGVsZXRlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgR0VUX0ZSSUVORFMsIERFTEVURV9GUklFTkQgfSBmcm9tIFwiLi4vLi4vLi4vUHJpc21hL0ZyaWVuZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGRvUmVsb2FkIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9uL1JlbG9hZFwiO1xuXG5jb25zdCBEZWxldGVGcmllbmQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEdFVF9GUklFTkRTKTtcbiAgY29uc3QgW0RlbGV0ZUZyaWVuZF0gPSB1c2VNdXRhdGlvbihERUxFVEVfRlJJRU5EKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5lcnJvcjwvZGl2PjtcbiAgY29uc3QgeyBmcmllbmRzIH0gPSBkYXRhO1xuXG4gIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSAoaWQ6IGFueSkgPT4ge1xuICAgIERlbGV0ZUZyaWVuZCh7IHZhcmlhYmxlczogeyBpZDogaWQgfSB9KTtcbiAgICBzZXRUaW1lb3V0KGRvUmVsb2FkLCAxMDAwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBocmVmPVwiL1wiPmJhY2s8L0J1dHRvbj5cbiAgICAgIDxoMT5ERUxFVEUgUEFHRTwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfT5cbiAgICAgICAge2ZyaWVuZHMubWFwKChmcmllbmQpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtmcmllbmQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntmcmllbmQubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8aDQ+e2ZyaWVuZC5jb2xvcn08L2g0PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkZWxldGVIYW5kbGVyKGZyaWVuZC5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVGcmllbmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiR0VUX0ZSSUVORFMiLCJERUxFVEVfRlJJRU5EIiwiQnV0dG9uIiwiZG9SZWxvYWQiLCJEZWxldGVGcmllbmQiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGl2IiwiZnJpZW5kcyIsImRlbGV0ZUhhbmRsZXIiLCJpZCIsInZhcmlhYmxlcyIsInNldFRpbWVvdXQiLCJocmVmIiwiaDEiLCJ1bCIsImNsYXNzTmFtZSIsImRlbGV0ZSIsIm1hcCIsImZyaWVuZCIsImxpIiwibGlzdCIsImZsZXgiLCJoMiIsIm5hbWUiLCJoNCIsImNvbG9yIiwiYnV0dG9uIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Friend/Delete/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/Friend/Delete/index.tsx"));
module.exports = __webpack_exports__;

})();