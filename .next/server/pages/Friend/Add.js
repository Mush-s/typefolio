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

/***/ "./styles/add.module.css":
/*!*******************************!*\
  !*** ./styles/add.module.css ***!
  \*******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"add_container__se_ac\",\n\t\"form\": \"add_form__zbi0I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvYWRkLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtcG9ydGZvbGlvLy4vc3R5bGVzL2FkZC5tb2R1bGUuY3NzP2Y3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiYWRkX2NvbnRhaW5lcl9fc2VfYWNcIixcblx0XCJmb3JtXCI6IFwiYWRkX2Zvcm1fX3piaTBJXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/add.module.css\n");

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

/***/ "./src/pages/Friend/Add/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/Friend/Add/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mui_color_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mui-color-input */ \"mui-color-input\");\n/* harmony import */ var mui_color_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mui_color_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../function/Reload */ \"./src/function/Reload.tsx\");\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _styles_add_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/add.module.css */ \"./styles/add.module.css\");\n/* harmony import */ var _styles_add_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_add_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst AddFriend = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"#2196f3\");\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [errorAlert, setErrorAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [FriendCreate] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_6__.CREATE_FRIEND);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (alert || errorAlert) {\n            setTimeout(()=>{\n                if (alert) {\n                    setAlert(false);\n                } else {\n                    setErrorAlert(false);\n                }\n            }, 3000);\n        }\n    });\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        if (name.length >= 1 && color) {\n            FriendCreate({\n                variables: {\n                    name,\n                    color\n                }\n            });\n            setAlert(true);\n            setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_5__.doReload, 1000);\n        } else {\n            setErrorAlert(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_add_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            alert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                severity: \"success\",\n                children: \"This is a success alert — check it out!\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            errorAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                severity: \"error\",\n                children: \"This is a success alert — check it out!\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>submitHandler(e),\n                className: (_styles_add_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        sx: {\n                            width: \"100%\"\n                        },\n                        value: name,\n                        label: \"Name\",\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mui_color_input__WEBPACK_IMPORTED_MODULE_3__.MuiColorInput, {\n                        variant: \"outlined\",\n                        sx: {\n                            width: \"100%\"\n                        },\n                        label: \"Color\",\n                        value: color,\n                        onChange: (color)=>setColor(color)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0FkZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUQ7QUFDRTtBQUNUO0FBQ0c7QUFDQztBQUNHO0FBQ0E7QUFFdkQsTUFBTVcsWUFBWSxJQUFNO0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDYSxhQUFhLEdBQUdwQiwyREFBV0EsQ0FBQ1MseURBQWFBO0lBRWhESCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVUsU0FBU0UsWUFBWTtZQUN2QkcsV0FBVyxJQUFNO2dCQUNmLElBQUlMLE9BQU87b0JBQ1RDLFNBQVMsS0FBSztnQkFDaEIsT0FBTztvQkFDTEUsY0FBYyxLQUFLO2dCQUNyQixDQUFDO1lBQ0gsR0FBRztRQUNMLENBQUM7SUFDSDtJQUVBLE1BQU1HLGdCQUFnQixDQUFDQyxJQUF3QztRQUM3REEsRUFBRUMsY0FBYztRQUNoQixJQUFJWixLQUFLYSxNQUFNLElBQUksS0FBS1gsT0FBTztZQUM3Qk0sYUFBYTtnQkFDWE0sV0FBVztvQkFDVGQ7b0JBQ0FFO2dCQUNGO1lBQ0Y7WUFDQUcsU0FBUyxJQUFJO1lBQ2JJLFdBQVdiLHNEQUFRQSxFQUFFO1FBQ3ZCLE9BQU87WUFDTFcsY0FBYyxJQUFJO1FBQ3BCLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXbEIseUVBQWdCOzswQkFDOUIsOERBQUNSLGlEQUFNQTtnQkFBQzRCLE1BQUs7MEJBQUk7Ozs7OztZQUNoQmQsdUJBQ0MsOERBQUNmLGdEQUFLQTtnQkFBQzhCLFVBQVM7MEJBQVU7Ozs7OztZQUkzQmIsNEJBQ0MsOERBQUNqQixnREFBS0E7Z0JBQUM4QixVQUFTOzBCQUFROzs7Ozs7MEJBRTFCLDhEQUFDQztnQkFBS0MsVUFBVSxDQUFDVixJQUFNRCxjQUFjQztnQkFBSUssV0FBV2xCLG9FQUFXOztrQ0FDN0QsOERBQUNQLG9EQUFTQTt3QkFDUitCLElBQUk7NEJBQUVDLE9BQU87d0JBQU87d0JBQ3BCQyxPQUFPeEI7d0JBQ1B5QixPQUFNO3dCQUNOQyxVQUFVLENBQUNmLElBQU1WLFFBQVFVLEVBQUVnQixNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFekMsOERBQUNoQywwREFBYUE7d0JBQ1pvQyxTQUFRO3dCQUNSTixJQUFJOzRCQUFFQyxPQUFPO3dCQUFPO3dCQUNwQkUsT0FBTTt3QkFDTkQsT0FBT3RCO3dCQUNQd0IsVUFBVSxDQUFDeEIsUUFBVUMsU0FBU0Q7Ozs7OztrQ0FFaEMsOERBQUNaLGlEQUFNQTt3QkFBQ3VDLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtBQUVBLGlFQUFlOUIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL0ZyaWVuZC9BZGQvaW5kZXgudHN4P2E1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTXVpQ29sb3JJbnB1dCB9IGZyb20gXCJtdWktY29sb3ItaW5wdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb1JlbG9hZCB9IGZyb20gXCIuLi8uLi8uLi9mdW5jdGlvbi9SZWxvYWRcIjtcbmltcG9ydCB7IENSRUFURV9GUklFTkQgfSBmcm9tIFwiLi4vLi4vLi4vUHJpc21hL0ZyaWVuZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL2FkZC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEFkZEZyaWVuZCA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiIzIxOTZmM1wiKTtcbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvckFsZXJ0LCBzZXRFcnJvckFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW0ZyaWVuZENyZWF0ZV0gPSB1c2VNdXRhdGlvbihDUkVBVEVfRlJJRU5EKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhbGVydCB8fCBlcnJvckFsZXJ0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGFsZXJ0KSB7XG4gICAgICAgICAgc2V0QWxlcnQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yQWxlcnQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5hbWUubGVuZ3RoID49IDEgJiYgY29sb3IpIHtcbiAgICAgIEZyaWVuZENyZWF0ZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldEFsZXJ0KHRydWUpO1xuICAgICAgc2V0VGltZW91dChkb1JlbG9hZCwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yQWxlcnQodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEJ1dHRvbiBocmVmPVwiL1wiPmJhY2s8L0J1dHRvbj5cbiAgICAgIHthbGVydCAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICBUaGlzIGlzIGEgc3VjY2VzcyBhbGVydCDigJQgY2hlY2sgaXQgb3V0IVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHtlcnJvckFsZXJ0ICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5UaGlzIGlzIGEgc3VjY2VzcyBhbGVydCDigJQgY2hlY2sgaXQgb3V0ITwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXRIYW5kbGVyKGUpfSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE11aUNvbG9ySW5wdXRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIGxhYmVsPVwiQ29sb3JcIlxuICAgICAgICAgIHZhbHVlPXtjb2xvcn1cbiAgICAgICAgICBvbkNoYW5nZT17KGNvbG9yKSA9PiBzZXRDb2xvcihjb2xvcil9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRnJpZW5kO1xuIl0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwiQWxlcnQiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJNdWlDb2xvcklucHV0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRvUmVsb2FkIiwiQ1JFQVRFX0ZSSUVORCIsInN0eWxlcyIsIkFkZEZyaWVuZCIsIm5hbWUiLCJzZXROYW1lIiwiY29sb3IiLCJzZXRDb2xvciIsImFsZXJ0Iiwic2V0QWxlcnQiLCJlcnJvckFsZXJ0Iiwic2V0RXJyb3JBbGVydCIsIkZyaWVuZENyZWF0ZSIsInNldFRpbWVvdXQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwidmFyaWFibGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaHJlZiIsInNldmVyaXR5IiwiZm9ybSIsIm9uU3VibWl0Iiwic3giLCJ3aWR0aCIsInZhbHVlIiwibGFiZWwiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhcmlhbnQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Friend/Add/index.tsx\n");

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

/***/ "mui-color-input":
/*!**********************************!*\
  !*** external "mui-color-input" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("mui-color-input");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/Friend/Add/index.tsx"));
module.exports = __webpack_exports__;

})();