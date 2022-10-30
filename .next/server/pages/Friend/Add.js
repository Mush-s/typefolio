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
exports.id = "pages/Friend/Add";
exports.ids = ["pages/Friend/Add"];
exports.modules = {

/***/ "./src/Prisma/Friend.tsx":
/*!*******************************!*\
  !*** ./src/Prisma/Friend.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_FRIEND\": () => (/* binding */ CREATE_FRIEND),\n/* harmony export */   \"DELETE_FRIEND\": () => (/* binding */ DELETE_FRIEND),\n/* harmony export */   \"GET_FRIENDS\": () => (/* binding */ GET_FRIENDS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_FRIENDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    friends {\n      id\n      name\n      relation\n    }\n  }\n`;\nconst CREATE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation FriendCreate($name: String!, $relation: String!) {\n    friendCreate(name: $name, relation: $relation) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        relation\n      }\n    }\n  }\n`;\nconst DELETE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation DeleteFriend($id: Int!) {\n    friendDelete(id: $id) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        relation\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJpc21hL0ZyaWVuZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsY0FBY0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFRL0IsQ0FBQyxDQUFDO0FBRUssTUFBTUUsZ0JBQWdCRiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYWpDLENBQUMsQ0FBQztBQUVLLE1BQU1HLGdCQUFnQkgsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9QcmlzbWEvRnJpZW5kLnRzeD9iMDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX0ZSSUVORFMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmcmllbmRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICByZWxhdGlvblxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIEZyaWVuZENyZWF0ZSgkbmFtZTogU3RyaW5nISwgJHJlbGF0aW9uOiBTdHJpbmchKSB7XG4gICAgZnJpZW5kQ3JlYXRlKG5hbWU6ICRuYW1lLCByZWxhdGlvbjogJHJlbGF0aW9uKSB7XG4gICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfVxuICAgICAgZnJpZW5kIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICByZWxhdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIERlbGV0ZUZyaWVuZCgkaWQ6IEludCEpIHtcbiAgICBmcmllbmREZWxldGUoaWQ6ICRpZCkge1xuICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGZyaWVuZCB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgcmVsYXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0ZSSUVORFMiLCJDUkVBVEVfRlJJRU5EIiwiREVMRVRFX0ZSSUVORCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Prisma/Friend.tsx\n");

/***/ }),

/***/ "./src/pages/Friend/Add/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/Friend/Add/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n\n\n\n\n\nconst AddFriend = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [relation, setRelation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [FriendCreate] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__.CREATE_FRIEND);\n    const submitHandler = ()=>{\n        FriendCreate({\n            variables: {\n                name,\n                relation\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: relation,\n                        onChange: (e)=>setRelation(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0FkZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVEO0FBQ2hCO0FBQ0M7QUFDZTtBQUV2RCxNQUFNSyxZQUFZLElBQU07SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNPLGFBQWEsR0FBR1YsMkRBQVdBLENBQUNJLHlEQUFhQTtJQUVoRCxNQUFNTyxnQkFBZ0IsSUFBTTtRQUMxQkQsYUFBYTtZQUNYRSxXQUFXO2dCQUNUTjtnQkFDQUU7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0s7OzBCQUNDLDhEQUFDQztnQkFBS0MsVUFBVUo7O2tDQUNkLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBT1o7d0JBQ1BhLFVBQVUsQ0FBQ0MsSUFBTWIsUUFBUWEsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDRjt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBT1Y7d0JBQ1BXLFVBQVUsQ0FBQ0MsSUFBTVgsWUFBWVcsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTdDLDhEQUFDRjt3QkFBTUMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDaEIsaURBQU1BO2dCQUFDcUIsTUFBSzswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZCO0FBRUEsaUVBQWVqQixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zcmMvcGFnZXMvRnJpZW5kL0FkZC9pbmRleC50c3g/YTUwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENSRUFURV9GUklFTkQgfSBmcm9tIFwiLi4vLi4vLi4vUHJpc21hL0ZyaWVuZFwiO1xuXG5jb25zdCBBZGRGcmllbmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtyZWxhdGlvbiwgc2V0UmVsYXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW0ZyaWVuZENyZWF0ZV0gPSB1c2VNdXRhdGlvbihDUkVBVEVfRlJJRU5EKTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIEZyaWVuZENyZWF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcmVsYXRpb24sXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3JlbGF0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVsYXRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8QnV0dG9uIGhyZWY9XCIvXCI+YmFjazwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRnJpZW5kO1xuIl0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwiQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNSRUFURV9GUklFTkQiLCJBZGRGcmllbmQiLCJuYW1lIiwic2V0TmFtZSIsInJlbGF0aW9uIiwic2V0UmVsYXRpb24iLCJGcmllbmRDcmVhdGUiLCJzdWJtaXRIYW5kbGVyIiwidmFyaWFibGVzIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Friend/Add/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/Friend/Add/index.tsx"));
module.exports = __webpack_exports__;

})();