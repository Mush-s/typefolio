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

eval("// Exports\nmodule.exports = {\n\t\"delete\": \"delete_delete__7j2J0\",\n\t\"name\": \"delete_name__IsZAp\",\n\t\"button\": \"delete_button__iVYfZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZGVsZXRlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zdHlsZXMvZGVsZXRlLm1vZHVsZS5jc3M/ZTU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZWxldGVcIjogXCJkZWxldGVfZGVsZXRlX183ajJKMFwiLFxuXHRcIm5hbWVcIjogXCJkZWxldGVfbmFtZV9fSXNaQXBcIixcblx0XCJidXR0b25cIjogXCJkZWxldGVfYnV0dG9uX19pVllmWlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/delete.module.css\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../styles/delete.module.css */ \"./styles/delete.module.css\");\n/* harmony import */ var _styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../function/Reload */ \"./src/function/Reload.tsx\");\n\n\n\n\n\n\n\nconst DeleteFriend = ()=>{\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.GET_FRIENDS);\n    const [DeleteFriend] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.DELETE_FRIEND);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"error\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 21\n    }, undefined);\n    const { friends  } = data;\n    const deleteHandler = (id)=>{\n        DeleteFriend({\n            variables: {\n                id: id\n            }\n        });\n        setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_5__.doReload, 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: friends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),\n                                children: friend.name\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: friend.color\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                className: (_styles_delete_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                                onClick: (e)=>deleteHandler(friend.id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, friend.id, true, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0RlbGV0ZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2dDO0FBQ0g7QUFDYTtBQUM3QjtBQUNhO0FBRXBELE1BQU1RLGVBQWUsSUFBTTtJQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR1Isd0RBQVFBLENBQUNDLHVEQUFXQTtJQUNyRCxNQUFNLENBQUNJLGFBQWEsR0FBR04sMkRBQVdBLENBQUNHLHlEQUFhQTtJQUVoRCxJQUFJTSxTQUFTLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBQ3pCLElBQUlGLE9BQU8scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0o7SUFFcEIsTUFBTUssZ0JBQWdCLENBQUNDLEtBQVk7UUFDakNQLGFBQWE7WUFBRVEsV0FBVztnQkFBRUQsSUFBSUE7WUFBRztRQUFFO1FBQ3JDRSxXQUFXVixzREFBUUEsRUFBRTtJQUN2QjtJQUNBLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNNOzBCQUNFTCxRQUFRTSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUNDO3dCQUFtQkMsV0FBV3JCLDRFQUFhOzswQ0FDMUMsOERBQUNXO2dDQUFJVSxXQUFXckIsdUVBQVc7MENBQUdtQixPQUFPSSxJQUFJOzs7Ozs7MENBQ3pDLDhEQUFDWjswQ0FBS1EsT0FBT0ssS0FBSzs7Ozs7OzBDQUNsQiw4REFBQ25CLGlEQUFNQTtnQ0FDTGdCLFdBQVdyQix5RUFBYTtnQ0FDeEIwQixTQUFTLENBQUNDLElBQU1kLGNBQWNNLE9BQU9MLEVBQUU7MENBQ3hDOzs7Ozs7O3VCQU5NSyxPQUFPTCxFQUFFOzs7Ozs7Ozs7OzBCQVl0Qiw4REFBQ1QsaURBQU1BO2dCQUFDdUIsTUFBSzswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZCO0FBRUEsaUVBQWVyQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zcmMvcGFnZXMvRnJpZW5kL0RlbGV0ZS9pbmRleC50c3g/ZGYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZGVsZXRlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgR0VUX0ZSSUVORFMsIERFTEVURV9GUklFTkQgfSBmcm9tIFwiLi4vLi4vLi4vUHJpc21hL0ZyaWVuZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGRvUmVsb2FkIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9uL1JlbG9hZFwiO1xuXG5jb25zdCBEZWxldGVGcmllbmQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEdFVF9GUklFTkRTKTtcbiAgY29uc3QgW0RlbGV0ZUZyaWVuZF0gPSB1c2VNdXRhdGlvbihERUxFVEVfRlJJRU5EKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5lcnJvcjwvZGl2PjtcbiAgY29uc3QgeyBmcmllbmRzIH0gPSBkYXRhO1xuXG4gIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSAoaWQ6IGFueSkgPT4ge1xuICAgIERlbGV0ZUZyaWVuZCh7IHZhcmlhYmxlczogeyBpZDogaWQgfSB9KTtcbiAgICBzZXRUaW1lb3V0KGRvUmVsb2FkLCAxMDAwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7ZnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2ZyaWVuZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2ZyaWVuZC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57ZnJpZW5kLmNvbG9yfTwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkZWxldGVIYW5kbGVyKGZyaWVuZC5pZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPEJ1dHRvbiBocmVmPVwiL1wiPmJhY2s8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUZyaWVuZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJHRVRfRlJJRU5EUyIsIkRFTEVURV9GUklFTkQiLCJCdXR0b24iLCJkb1JlbG9hZCIsIkRlbGV0ZUZyaWVuZCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJkaXYiLCJmcmllbmRzIiwiZGVsZXRlSGFuZGxlciIsImlkIiwidmFyaWFibGVzIiwic2V0VGltZW91dCIsInVsIiwibWFwIiwiZnJpZW5kIiwibGkiLCJjbGFzc05hbWUiLCJkZWxldGUiLCJuYW1lIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIiwiZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Friend/Delete/index.tsx\n");

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