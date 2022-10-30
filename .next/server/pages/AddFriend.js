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
exports.id = "pages/AddFriend";
exports.ids = ["pages/AddFriend"];
exports.modules = {

/***/ "./src/Prisma/Friend.tsx":
/*!*******************************!*\
  !*** ./src/Prisma/Friend.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_FRIEND\": () => (/* binding */ CREATE_FRIEND),\n/* harmony export */   \"GET_FRIENDS\": () => (/* binding */ GET_FRIENDS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_FRIENDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    friends {\n      id\n      name\n      relation\n    }\n  }\n`;\nconst CREATE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation FriendCreate($name: String!, $relation: String!) {\n    friendCreate(name: $name, relation: $relation) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        relation\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJpc21hL0ZyaWVuZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUU5QixNQUFNQyxjQUFjRCwrQ0FBRyxDQUFDOzs7Ozs7OztBQVEvQixDQUFDLENBQUM7QUFFSyxNQUFNRSxnQkFBZ0JGLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zcmMvUHJpc21hL0ZyaWVuZC50c3g/YjAwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9GUklFTkRTID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZnJpZW5kcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgcmVsYXRpb25cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfRlJJRU5EID0gZ3FsYFxuICBtdXRhdGlvbiBGcmllbmRDcmVhdGUoJG5hbWU6IFN0cmluZyEsICRyZWxhdGlvbjogU3RyaW5nISkge1xuICAgIGZyaWVuZENyZWF0ZShuYW1lOiAkbmFtZSwgcmVsYXRpb246ICRyZWxhdGlvbikge1xuICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGZyaWVuZCB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgcmVsYXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0ZSSUVORFMiLCJDUkVBVEVfRlJJRU5EIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Prisma/Friend.tsx\n");

/***/ }),

/***/ "./src/pages/AddFriend/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/AddFriend/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n\n\n\n\n\nconst AddFriend = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [relation, setRelation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [FriendCreate] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__.CREATE_FRIEND);\n    const changeName = (e)=>{\n        setName(e.target.value);\n    };\n    const changeRelation = (e)=>{\n        setRelation(e.target.value);\n    };\n    const submitHandler = ()=>{\n        FriendCreate({\n            variables: {\n                name,\n                relation\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: name,\n                        onChange: (e)=>changeName(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/AddFriend/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: relation,\n                        onChange: (e)=>changeRelation(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/AddFriend/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/AddFriend/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youta/type-front/src/pages/AddFriend/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/AddFriend/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/AddFriend/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQWRkRnJpZW5kL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUQ7QUFDaEI7QUFDQztBQUNZO0FBRXBELE1BQU1LLFlBQVksSUFBTTtJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUE7SUFDeEMsTUFBTSxDQUFDTyxhQUFhLEdBQUdWLDJEQUFXQSxDQUFDSSx5REFBYUE7SUFFaEQsTUFBTU8sYUFBYSxDQUFDQyxJQUEyQztRQUM3REwsUUFBUUssRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNILElBQTJDO1FBQ2pFSCxZQUFZRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFFQSxNQUFNRSxnQkFBZ0IsSUFBTTtRQUMxQk4sYUFBYTtZQUNYTyxXQUFXO2dCQUNUWDtnQkFDQUU7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1U7OzBCQUNELDhEQUFDQztnQkFBS0MsVUFBVUo7O2tDQUNkLDhEQUFDSzt3QkFBTUMsTUFBSzt3QkFBT1IsT0FBT1I7d0JBQU1pQixVQUFVLENBQUNYLElBQU1ELFdBQVdDOzs7Ozs7a0NBQzVELDhEQUFDUzt3QkFBTUMsTUFBSzt3QkFBT1IsT0FBT047d0JBQVVlLFVBQVUsQ0FBQ1gsSUFBTUcsZUFBZUg7Ozs7OztrQ0FDcEUsOERBQUNTO3dCQUFNQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNyQixpREFBTUE7Z0JBQUN1QixNQUFLOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHckI7QUFFQSxpRUFBZW5CLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9wYWdlcy9BZGRGcmllbmQvaW5kZXgudHN4P2YwNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDUkVBVEVfRlJJRU5EIH0gZnJvbSBcIi4uLy4uL1ByaXNtYS9GcmllbmRcIjtcblxuY29uc3QgQWRkRnJpZW5kID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtyZWxhdGlvbiwgc2V0UmVsYXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbRnJpZW5kQ3JlYXRlXSA9IHVzZU11dGF0aW9uKENSRUFURV9GUklFTkQpO1xuXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VSZWxhdGlvbiA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFJlbGF0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIEZyaWVuZENyZWF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcmVsYXRpb24sXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlTmFtZShlKX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtyZWxhdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VSZWxhdGlvbihlKX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICA8L2Zvcm0+XG4gICAgPEJ1dHRvbiBocmVmPVwiL1wiPmJhY2s8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZyaWVuZDtcbiJdLCJuYW1lcyI6WyJ1c2VNdXRhdGlvbiIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJDUkVBVEVfRlJJRU5EIiwiQWRkRnJpZW5kIiwibmFtZSIsInNldE5hbWUiLCJyZWxhdGlvbiIsInNldFJlbGF0aW9uIiwiRnJpZW5kQ3JlYXRlIiwiY2hhbmdlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZVJlbGF0aW9uIiwic3VibWl0SGFuZGxlciIsInZhcmlhYmxlcyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/AddFriend/index.tsx\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/AddFriend/index.tsx"));
module.exports = __webpack_exports__;

})();