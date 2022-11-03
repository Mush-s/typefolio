"use strict";
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

/***/ "./src/Prisma/Friend.tsx":
/*!*******************************!*\
  !*** ./src/Prisma/Friend.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_FRIEND\": () => (/* binding */ CREATE_FRIEND),\n/* harmony export */   \"DELETE_FRIEND\": () => (/* binding */ DELETE_FRIEND),\n/* harmony export */   \"GET_FRIENDS\": () => (/* binding */ GET_FRIENDS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_FRIENDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    friends {\n      id\n      name\n      color\n    }\n  }\n`;\nconst CREATE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation FriendCreate($name: String!, $color: String!) {\n    friendCreate(name: $name, color: $color) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        color\n      }\n    }\n  }\n`;\nconst DELETE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation DeleteFriend($id: Int!) {\n    friendDelete(id: $id) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        color\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJpc21hL0ZyaWVuZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsY0FBY0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFRL0IsQ0FBQyxDQUFDO0FBRUssTUFBTUUsZ0JBQWdCRiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYWpDLENBQUMsQ0FBQztBQUVLLE1BQU1HLGdCQUFnQkgsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9QcmlzbWEvRnJpZW5kLnRzeD9iMDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX0ZSSUVORFMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmcmllbmRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBjb2xvclxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIEZyaWVuZENyZWF0ZSgkbmFtZTogU3RyaW5nISwgJGNvbG9yOiBTdHJpbmchKSB7XG4gICAgZnJpZW5kQ3JlYXRlKG5hbWU6ICRuYW1lLCBjb2xvcjogJGNvbG9yKSB7XG4gICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfVxuICAgICAgZnJpZW5kIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBjb2xvclxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIERlbGV0ZUZyaWVuZCgkaWQ6IEludCEpIHtcbiAgICBmcmllbmREZWxldGUoaWQ6ICRpZCkge1xuICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGZyaWVuZCB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgY29sb3JcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0ZSSUVORFMiLCJDUkVBVEVfRlJJRU5EIiwiREVMRVRFX0ZSSUVORCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Prisma/Friend.tsx\n");

/***/ }),

/***/ "./src/function/Reload.tsx":
/*!*********************************!*\
  !*** ./src/function/Reload.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doReload\": () => (/* binding */ doReload)\n/* harmony export */ });\nconst doReload = ()=>{\n    location.reload();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb24vUmVsb2FkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVyxJQUFNO0lBQzdCQyxTQUFTQyxNQUFNO0FBQ2hCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9mdW5jdGlvbi9SZWxvYWQudHN4PzkyMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRvUmVsb2FkID0gKCkgPT4ge1xuXHRsb2NhdGlvbi5yZWxvYWQoKVxufVxuIl0sIm5hbWVzIjpbImRvUmVsb2FkIiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/function/Reload.tsx\n");

/***/ }),

/***/ "./src/pages/Friend/Delete/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Friend/Delete/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../function/Reload */ \"./src/function/Reload.tsx\");\n\n\n\n\n\n\nconst DeleteFriend = ()=>{\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.GET_FRIENDS);\n    const [DeleteFriend] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_3__.DELETE_FRIEND);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"error\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 21\n    }, undefined);\n    const { friends  } = data;\n    const deleteHandler = (e, id)=>{\n        DeleteFriend({\n            variables: {\n                id: id\n            }\n        });\n        setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_5__.doReload, 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: friends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: friend.name\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: (e)=>deleteHandler(e, friend.id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, friend.id, true, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Delete/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0RlbGV0ZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUU2QjtBQUNhO0FBQzdCO0FBQ2E7QUFFcEQsTUFBTU8sZUFBZSxJQUFNO0lBQ3pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUFHUix3REFBUUEsQ0FBQ0MsdURBQVdBO0lBQ3JELE1BQU0sQ0FBQ0ksYUFBYSxHQUFHTiwyREFBV0EsQ0FBQ0cseURBQWFBO0lBR2hELElBQUlNLFNBQVMscUJBQU8sOERBQUNDO2tCQUFJOzs7Ozs7SUFDekIsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUN2QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHSjtJQUVwQixNQUFNSyxnQkFBZ0IsQ0FDcEJDLEdBQ0FDLEtBQ0c7UUFDSFIsYUFBYTtZQUFFUyxXQUFXO2dCQUFFRCxJQUFJQTtZQUFHO1FBQUU7UUFDckNFLFdBQVdYLHNEQUFRQSxFQUFFO0lBQ3ZCO0lBQ0EscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ087MEJBQ0VOLFFBQVFPLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ0M7OzBDQUNDLDhEQUFDVjswQ0FBS1MsT0FBT0UsSUFBSTs7Ozs7OzBDQUNqQiw4REFBQ2pCLGlEQUFNQTtnQ0FBQ2tCLFNBQVMsQ0FBQ1QsSUFBTUQsY0FBY0MsR0FBR00sT0FBT0wsRUFBRTswQ0FBRzs7Ozs7Ozt1QkFGOUNLLE9BQU9MLEVBQUU7Ozs7Ozs7Ozs7MEJBTXRCLDhEQUFDVixpREFBTUE7Z0JBQUNtQixNQUFLOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHdkI7QUFFQSxpRUFBZWpCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9wYWdlcy9GcmllbmQvRGVsZXRlL2luZGV4LnRzeD9kZjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBHRVRfRlJJRU5EUywgREVMRVRFX0ZSSUVORCB9IGZyb20gXCIuLi8uLi8uLi9QcmlzbWEvRnJpZW5kXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgZG9SZWxvYWQgfSBmcm9tIFwiLi4vLi4vLi4vZnVuY3Rpb24vUmVsb2FkXCI7XG5cbmNvbnN0IERlbGV0ZUZyaWVuZCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoR0VUX0ZSSUVORFMpO1xuICBjb25zdCBbRGVsZXRlRnJpZW5kXSA9IHVzZU11dGF0aW9uKERFTEVURV9GUklFTkQpO1xuXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3I8L2Rpdj47XG4gIGNvbnN0IHsgZnJpZW5kcyB9ID0gZGF0YTtcblxuICBjb25zdCBkZWxldGVIYW5kbGVyID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LFxuICAgIGlkOiBhbnlcbiAgKSA9PiB7XG4gICAgRGVsZXRlRnJpZW5kKHsgdmFyaWFibGVzOiB7IGlkOiBpZCB9IH0pO1xuICAgIHNldFRpbWVvdXQoZG9SZWxvYWQsIDEwMDApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHtmcmllbmRzLm1hcCgoZnJpZW5kKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17ZnJpZW5kLmlkfT5cbiAgICAgICAgICAgIDxkaXY+e2ZyaWVuZC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlSGFuZGxlcihlLCBmcmllbmQuaWQpfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8QnV0dG9uIGhyZWY9XCIvXCI+YmFjazwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlRnJpZW5kO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkdFVF9GUklFTkRTIiwiREVMRVRFX0ZSSUVORCIsIkJ1dHRvbiIsImRvUmVsb2FkIiwiRGVsZXRlRnJpZW5kIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImRpdiIsImZyaWVuZHMiLCJkZWxldGVIYW5kbGVyIiwiZSIsImlkIiwidmFyaWFibGVzIiwic2V0VGltZW91dCIsInVsIiwibWFwIiwiZnJpZW5kIiwibGkiLCJuYW1lIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Friend/Delete/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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