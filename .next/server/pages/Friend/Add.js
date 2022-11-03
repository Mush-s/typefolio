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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mui_color_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mui-color-input */ \"mui-color-input\");\n/* harmony import */ var mui_color_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mui_color_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _function_Reload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../function/Reload */ \"./src/function/Reload.tsx\");\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _styles_add_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/add.module.css */ \"./styles/add.module.css\");\n/* harmony import */ var _styles_add_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_add_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst AddFriend = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"000000\");\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [errorAlert, setErrorAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [FriendCreate] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_6__.CREATE_FRIEND);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (alert || errorAlert) {\n            setTimeout(()=>{\n                if (alert) {\n                    setAlert(false);\n                } else {\n                    setErrorAlert(false);\n                }\n            }, 3000);\n        }\n    });\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        if (name.length >= 1 && color) {\n            FriendCreate({\n                variables: {\n                    name,\n                    color\n                }\n            });\n            setAlert(true);\n            setTimeout(_function_Reload__WEBPACK_IMPORTED_MODULE_5__.doReload, 1000);\n        }\n        setErrorAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_add_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            alert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                severity: \"success\",\n                children: \"This is a success alert — check it out!\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            errorAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                severity: \"error\",\n                children: \"This is a success alert — check it out!\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>submitHandler(e),\n                className: (_styles_add_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        sx: {\n                            width: \"100%\"\n                        },\n                        value: name,\n                        label: \"Name\",\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mui_color_input__WEBPACK_IMPORTED_MODULE_3__.MuiColorInput, {\n                        sx: {\n                            width: \"100%\"\n                        },\n                        variant: \"outlined\",\n                        label: \"Color\",\n                        value: color,\n                        onChange: (color)=>setColor(color)\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/Add/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFriend);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL0FkZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUQ7QUFDRTtBQUNUO0FBQ0c7QUFDQztBQUNHO0FBQ0E7QUFFdkQsTUFBTVcsWUFBWSxJQUFNO0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDYSxhQUFhLEdBQUdwQiwyREFBV0EsQ0FBQ1MseURBQWFBO0lBRWhESCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVUsU0FBU0UsWUFBWTtZQUN2QkcsV0FBVyxJQUFNO2dCQUNmLElBQUlMLE9BQU87b0JBQ1RDLFNBQVMsS0FBSztnQkFDaEIsT0FBTztvQkFDTEUsY0FBYyxLQUFLO2dCQUNyQixDQUFDO1lBQ0gsR0FBRztRQUNMLENBQUM7SUFDSDtJQUVBLE1BQU1HLGdCQUFnQixDQUFDQyxJQUF3QztRQUM3REEsRUFBRUMsY0FBYztRQUNoQixJQUFJWixLQUFLYSxNQUFNLElBQUksS0FBS1gsT0FBTztZQUM3Qk0sYUFBYTtnQkFDWE0sV0FBVztvQkFDVGQ7b0JBQ0FFO2dCQUNGO1lBQ0Y7WUFDQUcsU0FBUyxJQUFJO1lBQ2JJLFdBQVdiLHNEQUFRQSxFQUFFO1FBQ3ZCLENBQUM7UUFDRFcsY0FBYyxJQUFJO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdsQix5RUFBZ0I7O1lBQzdCTSx1QkFDQyw4REFBQ2YsZ0RBQUtBO2dCQUFDNkIsVUFBUzswQkFBVTs7Ozs7O1lBSTNCWiw0QkFDQyw4REFBQ2pCLGdEQUFLQTtnQkFBQzZCLFVBQVM7MEJBQVE7Ozs7OzswQkFFMUIsOERBQUNDO2dCQUFLQyxVQUFVLENBQUNULElBQU1ELGNBQWNDO2dCQUFJSyxXQUFXbEIsb0VBQVc7O2tDQUM3RCw4REFBQ1Asb0RBQVNBO3dCQUNSOEIsSUFBSTs0QkFBRUMsT0FBTzt3QkFBTzt3QkFDcEJDLE9BQU92Qjt3QkFDUHdCLE9BQU07d0JBQ05DLFVBQVUsQ0FBQ2QsSUFBTVYsUUFBUVUsRUFBRWUsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDL0IsMERBQWFBO3dCQUNaNkIsSUFBSTs0QkFBRUMsT0FBTzt3QkFBTzt3QkFDcEJLLFNBQVE7d0JBQ1JILE9BQU07d0JBQ05ELE9BQU9yQjt3QkFDUHVCLFVBQVUsQ0FBQ3ZCLFFBQVVDLFNBQVNEOzs7Ozs7a0NBRWhDLDhEQUFDWixpREFBTUE7d0JBQUNzQyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDdEMsaURBQU1BO2dCQUFDdUMsTUFBSzswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZCO0FBRUEsaUVBQWU5QixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zcmMvcGFnZXMvRnJpZW5kL0FkZC9pbmRleC50c3g/YTUwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBNdWlDb2xvcklucHV0IH0gZnJvbSBcIm11aS1jb2xvci1pbnB1dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRvUmVsb2FkIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9uL1JlbG9hZFwiO1xuaW1wb3J0IHsgQ1JFQVRFX0ZSSUVORCB9IGZyb20gXCIuLi8uLi8uLi9QcmlzbWEvRnJpZW5kXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvYWRkLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQWRkRnJpZW5kID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCIwMDAwMDBcIik7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JBbGVydCwgc2V0RXJyb3JBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtGcmllbmRDcmVhdGVdID0gdXNlTXV0YXRpb24oQ1JFQVRFX0ZSSUVORCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxlcnQgfHwgZXJyb3JBbGVydCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChhbGVydCkge1xuICAgICAgICAgIHNldEFsZXJ0KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvckFsZXJ0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuYW1lLmxlbmd0aCA+PSAxICYmIGNvbG9yKSB7XG4gICAgICBGcmllbmRDcmVhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGNvbG9yLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBzZXRBbGVydCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoZG9SZWxvYWQsIDEwMDApO1xuICAgIH1cbiAgICBzZXRFcnJvckFsZXJ0KHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAge2FsZXJ0ICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxuICAgICAgICAgIFRoaXMgaXMgYSBzdWNjZXNzIGFsZXJ0IOKAlCBjaGVjayBpdCBvdXQhXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2Vycm9yQWxlcnQgJiYgKFxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlRoaXMgaXMgYSBzdWNjZXNzIGFsZXJ0IOKAlCBjaGVjayBpdCBvdXQhPC9BbGVydD5cbiAgICAgICl9XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHN1Ym1pdEhhbmRsZXIoZSl9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8TXVpQ29sb3JJbnB1dFxuICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgbGFiZWw9XCJDb2xvclwiXG4gICAgICAgICAgdmFsdWU9e2NvbG9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoY29sb3IpID0+IHNldENvbG9yKGNvbG9yKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8QnV0dG9uIGhyZWY9XCIvXCI+YmFjazwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRnJpZW5kO1xuIl0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwiQWxlcnQiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJNdWlDb2xvcklucHV0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRvUmVsb2FkIiwiQ1JFQVRFX0ZSSUVORCIsInN0eWxlcyIsIkFkZEZyaWVuZCIsIm5hbWUiLCJzZXROYW1lIiwiY29sb3IiLCJzZXRDb2xvciIsImFsZXJ0Iiwic2V0QWxlcnQiLCJlcnJvckFsZXJ0Iiwic2V0RXJyb3JBbGVydCIsIkZyaWVuZENyZWF0ZSIsInNldFRpbWVvdXQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwidmFyaWFibGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic2V2ZXJpdHkiLCJmb3JtIiwib25TdWJtaXQiLCJzeCIsIndpZHRoIiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFyaWFudCIsInR5cGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Friend/Add/index.tsx\n");

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