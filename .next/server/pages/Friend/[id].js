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
exports.id = "pages/Friend/[id]";
exports.ids = ["pages/Friend/[id]"];
exports.modules = {

/***/ "./styles/friendmemo.module.css":
/*!**************************************!*\
  !*** ./styles/friendmemo.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"friendmemo\": \"friendmemo_friendmemo__mVjo6\",\n\t\"block\": \"friendmemo_block__85FYK\",\n\t\"name\": \"friendmemo_name__UHMpW\",\n\t\"content\": \"friendmemo_content__ZkfRA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZnJpZW5kbWVtby5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9zdHlsZXMvZnJpZW5kbWVtby5tb2R1bGUuY3NzP2JkNGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJpZW5kbWVtb1wiOiBcImZyaWVuZG1lbW9fZnJpZW5kbWVtb19fbVZqbzZcIixcblx0XCJibG9ja1wiOiBcImZyaWVuZG1lbW9fYmxvY2tfXzg1RllLXCIsXG5cdFwibmFtZVwiOiBcImZyaWVuZG1lbW9fbmFtZV9fVUhNcFdcIixcblx0XCJjb250ZW50XCI6IFwiZnJpZW5kbWVtb19jb250ZW50X19aa2ZSQVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/friendmemo.module.css\n");

/***/ }),

/***/ "./src/Prisma/Friend.tsx":
/*!*******************************!*\
  !*** ./src/Prisma/Friend.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_FRIEND\": () => (/* binding */ CREATE_FRIEND),\n/* harmony export */   \"DELETE_FRIEND\": () => (/* binding */ DELETE_FRIEND),\n/* harmony export */   \"GET_FRIENDS\": () => (/* binding */ GET_FRIENDS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_FRIENDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    friends {\n      id\n      name\n      color\n    }\n  }\n`;\nconst CREATE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation FriendCreate($name: String!, $color: String!) {\n    friendCreate(name: $name, color: $color) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        color\n      }\n    }\n  }\n`;\nconst DELETE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation DeleteFriend($id: Int!) {\n    friendDelete(id: $id) {\n      userErrors {\n        message\n      }\n      friend {\n        id\n        name\n        color\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJpc21hL0ZyaWVuZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsY0FBY0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFRL0IsQ0FBQyxDQUFDO0FBRUssTUFBTUUsZ0JBQWdCRiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYWpDLENBQUMsQ0FBQztBQUVLLE1BQU1HLGdCQUFnQkgsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9QcmlzbWEvRnJpZW5kLnRzeD9iMDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX0ZSSUVORFMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmcmllbmRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBjb2xvclxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIEZyaWVuZENyZWF0ZSgkbmFtZTogU3RyaW5nISwgJGNvbG9yOiBTdHJpbmchKSB7XG4gICAgZnJpZW5kQ3JlYXRlKG5hbWU6ICRuYW1lLCBjb2xvcjogJGNvbG9yKSB7XG4gICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfVxuICAgICAgZnJpZW5kIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBjb2xvclxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9GUklFTkQgPSBncWxgXG4gIG11dGF0aW9uIERlbGV0ZUZyaWVuZCgkaWQ6IEludCEpIHtcbiAgICBmcmllbmREZWxldGUoaWQ6ICRpZCkge1xuICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIGZyaWVuZCB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgY29sb3JcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0ZSSUVORFMiLCJDUkVBVEVfRlJJRU5EIiwiREVMRVRFX0ZSSUVORCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Prisma/Friend.tsx\n");

/***/ }),

/***/ "./src/Prisma/Post.tsx":
/*!*****************************!*\
  !*** ./src/Prisma/Post.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_POST\": () => (/* binding */ CREATE_POST),\n/* harmony export */   \"DELETE_POST\": () => (/* binding */ DELETE_POST),\n/* harmony export */   \"GET_POSTS\": () => (/* binding */ GET_POSTS),\n/* harmony export */   \"GET_SAMECOLOR_POSTS\": () => (/* binding */ GET_SAMECOLOR_POSTS),\n/* harmony export */   \"UPDATE_POST\": () => (/* binding */ UPDATE_POST)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    posts {\n      length\n      title\n      content\n      date\n      color\n    }\n  }\n`;\nconst GET_SAMECOLOR_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query ($color: String!) {\n    friend(color: $color) {\n      id\n      name\n      color\n      posts {\n        title\n        content\n      }\n    }\n  }\n`;\nconst CREATE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation CreatePost(\n    $title: String!\n    $date: String!\n    $content: String!\n    $color: String!\n  ) {\n    postCreate(title: $title, date: $date, content: $content, color: $color) {\n      userErrors {\n        message\n      }\n      post {\n        title\n        date\n        length\n        content\n        color\n      }\n    }\n  }\n`;\nconst UPDATE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation UpdatePost(\n    $lengthId: Int!\n    $title: String\n    $content: String\n    $color: String\n  ) {\n    postUpdate(\n      lengthId: $lengthId\n      title: $title\n      content: $content\n\n      color: $color\n    ) {\n      userErrors {\n        message\n      }\n      post {\n        content\n        title\n        content\n        date\n\n        color\n      }\n    }\n  }\n`;\nconst DELETE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation PostDelete($lengthId: Int!) {\n    postDelete(lengthId: $lengthId) {\n      userErrors {\n        message\n      }\n      post {\n        length\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJpc21hL1Bvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsWUFBWUQsK0NBQUcsQ0FBQzs7Ozs7Ozs7OztBQVU3QixDQUFDLENBQUM7QUFFSyxNQUFNRSxzQkFBc0JGLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7OztBQVl2QyxDQUFDLENBQUM7QUFDSyxNQUFNRyxjQUFjSCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CL0IsQ0FBQyxDQUFDO0FBQ0ssTUFBTUksY0FBY0osK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkIvQixDQUFDLENBQUM7QUFDSyxNQUFNSyxjQUFjTCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7OztBQVcvQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXBvcnRmb2xpby8uL3NyYy9QcmlzbWEvUG9zdC50c3g/OWExYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHBvc3RzIHtcbiAgICAgIGxlbmd0aFxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRcbiAgICAgIGRhdGVcbiAgICAgIGNvbG9yXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR0VUX1NBTUVDT0xPUl9QT1NUUyA9IGdxbGBcbiAgcXVlcnkgKCRjb2xvcjogU3RyaW5nISkge1xuICAgIGZyaWVuZChjb2xvcjogJGNvbG9yKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgY29sb3JcbiAgICAgIHBvc3RzIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgY29udGVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVCA9IGdxbGBcbiAgbXV0YXRpb24gQ3JlYXRlUG9zdChcbiAgICAkdGl0bGU6IFN0cmluZyFcbiAgICAkZGF0ZTogU3RyaW5nIVxuICAgICRjb250ZW50OiBTdHJpbmchXG4gICAgJGNvbG9yOiBTdHJpbmchXG4gICkge1xuICAgIHBvc3RDcmVhdGUodGl0bGU6ICR0aXRsZSwgZGF0ZTogJGRhdGUsIGNvbnRlbnQ6ICRjb250ZW50LCBjb2xvcjogJGNvbG9yKSB7XG4gICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfVxuICAgICAgcG9zdCB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRhdGVcbiAgICAgICAgbGVuZ3RoXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICAgY29sb3JcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1QgPSBncWxgXG4gIG11dGF0aW9uIFVwZGF0ZVBvc3QoXG4gICAgJGxlbmd0aElkOiBJbnQhXG4gICAgJHRpdGxlOiBTdHJpbmdcbiAgICAkY29udGVudDogU3RyaW5nXG4gICAgJGNvbG9yOiBTdHJpbmdcbiAgKSB7XG4gICAgcG9zdFVwZGF0ZShcbiAgICAgIGxlbmd0aElkOiAkbGVuZ3RoSWRcbiAgICAgIHRpdGxlOiAkdGl0bGVcbiAgICAgIGNvbnRlbnQ6ICRjb250ZW50XG5cbiAgICAgIGNvbG9yOiAkY29sb3JcbiAgICApIHtcbiAgICAgIHVzZXJFcnJvcnMge1xuICAgICAgICBtZXNzYWdlXG4gICAgICB9XG4gICAgICBwb3N0IHtcbiAgICAgICAgY29udGVudFxuICAgICAgICB0aXRsZVxuICAgICAgICBjb250ZW50XG4gICAgICAgIGRhdGVcblxuICAgICAgICBjb2xvclxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVCA9IGdxbGBcbiAgbXV0YXRpb24gUG9zdERlbGV0ZSgkbGVuZ3RoSWQ6IEludCEpIHtcbiAgICBwb3N0RGVsZXRlKGxlbmd0aElkOiAkbGVuZ3RoSWQpIHtcbiAgICAgIHVzZXJFcnJvcnMge1xuICAgICAgICBtZXNzYWdlXG4gICAgICB9XG4gICAgICBwb3N0IHtcbiAgICAgICAgbGVuZ3RoXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsIkdFVF9QT1NUUyIsIkdFVF9TQU1FQ09MT1JfUE9TVFMiLCJDUkVBVEVfUE9TVCIsIlVQREFURV9QT1NUIiwiREVMRVRFX1BPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Prisma/Post.tsx\n");

/***/ }),

/***/ "./src/components/Friend/FriendMemo.tsx":
/*!**********************************************!*\
  !*** ./src/components/Friend/FriendMemo.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"friends\": () => (/* binding */ friends)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Prisma/Friend */ \"./src/Prisma/Friend.tsx\");\n/* harmony import */ var _styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/friendmemo.module.css */ \"./styles/friendmemo.module.css\");\n/* harmony import */ var _styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst friends = [];\nconst FriendMemo = (props)=>{\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_Prisma_Friend__WEBPACK_IMPORTED_MODULE_4__.GET_FRIENDS);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error \"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, undefined);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {}, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n        lineNumber: 23,\n        columnNumber: 23\n    }, undefined);\n    const { friends  } = data;\n    const { postData , name  } = props;\n    const friend = friends.filter((friend)=>friend.name === name);\n    const filteredPosts = postData.filter((post)=>post.color === friend[0].color);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default().friendmemo),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                    children: [\n                        \"Name: \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                filteredPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                                children: [\n                                    \"Date: \",\n                                    post.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                                children: [\n                                    \"Title: \",\n                                    post.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_friendmemo_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                                children: [\n                                    \"Content: \",\n                                    post.content\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, post.length, true, {\n                        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/components/Friend/FriendMemo.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendMemo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GcmllbmQvRnJpZW5kTWVtby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2dCO0FBQ087QUFDQztBQUNTO0FBRXBELE1BQU1LLFVBQVUsRUFBRSxDQUFDO0FBYTFCLE1BQU1DLGFBQWEsQ0FBQ0MsUUFBaUI7SUFDbkMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdULHdEQUFRQSxDQUFDRSx1REFBV0E7SUFDckQsSUFBSU0sT0FBTyxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUN2QixJQUFJRCxTQUFTLHFCQUFPLDhEQUFDUiwyREFBZ0JBOzs7OztJQUVyQyxNQUFNLEVBQUVHLFFBQU8sRUFBRSxHQUFHRztJQUNwQixNQUFNLEVBQUVJLFNBQVEsRUFBRUMsS0FBSSxFQUFFLEdBQUdOO0lBRTNCLE1BQU1PLFNBQVNULFFBQVFVLE1BQU0sQ0FBQyxDQUFDRCxTQUFXQSxPQUFPRCxJQUFJLEtBQUtBO0lBQzFELE1BQU1HLGdCQUFnQkosU0FBU0csTUFBTSxDQUNuQyxDQUFDRSxPQUFTQSxLQUFLQyxLQUFLLEtBQUtKLE1BQU0sQ0FBQyxFQUFFLENBQUNJLEtBQUs7SUFHMUMscUJBQ0UsOERBQUNQO2tCQUNDLDRFQUFDUTtZQUFHQyxXQUFXaEIsaUZBQWlCOzs4QkFDOUIsOERBQUNPO29CQUFJUyxXQUFXaEIsMkVBQVc7O3dCQUFFO3dCQUFPUzs7Ozs7OztnQkFDbkNHLGNBQWNNLEdBQUcsQ0FBQyxDQUFDTCxxQkFDbEIsOERBQUNNO3dCQUFxQkgsV0FBV2hCLDRFQUFZOzswQ0FDM0MsOERBQUNPO2dDQUFJUyxXQUFXaEIsOEVBQWM7O29DQUFFO29DQUFPYSxLQUFLUyxJQUFJOzs7Ozs7OzBDQUNoRCw4REFBQ2Y7Z0NBQUlTLFdBQVdoQiw4RUFBYzs7b0NBQUU7b0NBQVFhLEtBQUtVLEtBQUs7Ozs7Ozs7MENBQ2xELDhEQUFDaEI7Z0NBQUlTLFdBQVdoQiw4RUFBYzs7b0NBQUU7b0NBQVVhLEtBQUtRLE9BQU87Ozs7Ozs7O3VCQUgvQ1IsS0FBS1csTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQVM5QjtBQUVBLGlFQUFldEIsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kL0ZyaWVuZE1lbW8udHN4PzFjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgR0VUX0ZSSUVORFMgfSBmcm9tIFwiLi4vLi4vUHJpc21hL0ZyaWVuZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2ZyaWVuZG1lbW8ubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgZnJpZW5kcyA9IFtdO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0RGF0YToge1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICB9W107XG4gIG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBGcmllbmRNZW1vID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShHRVRfRlJJRU5EUyk7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3IgPC9kaXY+O1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIC8+O1xuXG4gIGNvbnN0IHsgZnJpZW5kcyB9ID0gZGF0YTtcbiAgY29uc3QgeyBwb3N0RGF0YSwgbmFtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZnJpZW5kID0gZnJpZW5kcy5maWx0ZXIoKGZyaWVuZCkgPT4gZnJpZW5kLm5hbWUgPT09IG5hbWUpO1xuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcG9zdERhdGEuZmlsdGVyKFxuICAgIChwb3N0KSA9PiBwb3N0LmNvbG9yID09PSBmcmllbmRbMF0uY29sb3JcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZnJpZW5kbWVtb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+TmFtZToge25hbWV9PC9kaXY+XG4gICAgICAgIHtmaWx0ZXJlZFBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QubGVuZ3RofSBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PkRhdGU6IHtwb3N0LmRhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlRpdGxlOiB7cG9zdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+Q29udGVudDoge3Bvc3QuY29udGVudH08L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRNZW1vO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUXVlcnkiLCJDaXJjdWxhclByb2dyZXNzIiwiR0VUX0ZSSUVORFMiLCJzdHlsZXMiLCJmcmllbmRzIiwiRnJpZW5kTWVtbyIsInByb3BzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImRpdiIsInBvc3REYXRhIiwibmFtZSIsImZyaWVuZCIsImZpbHRlciIsImZpbHRlcmVkUG9zdHMiLCJwb3N0IiwiY29sb3IiLCJ1bCIsImNsYXNzTmFtZSIsImZyaWVuZG1lbW8iLCJtYXAiLCJsaSIsImJsb2NrIiwiY29udGVudCIsImRhdGUiLCJ0aXRsZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Friend/FriendMemo.tsx\n");

/***/ }),

/***/ "./src/pages/Friend/[id]/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Friend/[id]/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Prisma_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Prisma/Post */ \"./src/Prisma/Post.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Friend_FriendMemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Friend/FriendMemo */ \"./src/components/Friend/FriendMemo.tsx\");\n\n\n\n\n\n\n\nconst FriendContent = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const friendId = router.query.id;\n    const { data , error , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_Prisma_Post__WEBPACK_IMPORTED_MODULE_4__.GET_POSTS);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"error\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/[id]/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 21\n    }, undefined);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading\"\n    }, void 0, false, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/[id]/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, undefined);\n    const { posts  } = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Friend_FriendMemo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                postData: posts,\n                name: friendId\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/[id]/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                href: \"/\",\n                children: \"back\"\n            }, void 0, false, {\n                fileName: \"/Users/youta/type-front/src/pages/Friend/[id]/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youta/type-front/src/pages/Friend/[id]/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendContent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRnJpZW5kL1tpZF0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBQ0M7QUFDUztBQUNQO0FBQ3FCO0FBRS9ELE1BQU1NLGdCQUFnQixJQUFNO0lBQzFCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNTSxXQUFXRCxPQUFPRSxLQUFLLENBQUNDLEVBQUU7SUFDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdULHdEQUFRQSxDQUFDRCxtREFBU0E7SUFFbkQsSUFBSVMsT0FBTyxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUN2QixJQUFJRCxTQUFTLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBRXpCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdKO0lBRWxCLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNULHFFQUFVQTtnQkFBQ1csVUFBVUQ7Z0JBQU9FLE1BQU1UOzs7Ozs7MEJBQ25DLDhEQUFDUCxpREFBTUE7Z0JBQUNpQixNQUFLOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHdkI7QUFFQSxpRUFBZVosYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL0ZyaWVuZC9baWRdL2luZGV4LnRzeD83MDc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEdFVF9QT1NUUyB9IGZyb20gXCIuLi8uLi8uLi9QcmlzbWEvUG9zdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBGcmllbmRNZW1vIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0ZyaWVuZC9GcmllbmRNZW1vXCI7XG5cbmNvbnN0IEZyaWVuZENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBmcmllbmRJZCA9IHJvdXRlci5xdWVyeS5pZDtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoR0VUX1BPU1RTKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmVycm9yPC9kaXY+O1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcblxuICBjb25zdCB7IHBvc3RzIH0gPSBkYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGcmllbmRNZW1vIHBvc3REYXRhPXtwb3N0c30gbmFtZT17ZnJpZW5kSWR9IC8+XG4gICAgICA8QnV0dG9uIGhyZWY9XCIvXCI+YmFjazwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kQ29udGVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkdFVF9QT1NUUyIsInVzZVF1ZXJ5IiwiRnJpZW5kTWVtbyIsIkZyaWVuZENvbnRlbnQiLCJyb3V0ZXIiLCJmcmllbmRJZCIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGl2IiwicG9zdHMiLCJwb3N0RGF0YSIsIm5hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Friend/[id]/index.tsx\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/Friend/[id]/index.tsx"));
module.exports = __webpack_exports__;

})();