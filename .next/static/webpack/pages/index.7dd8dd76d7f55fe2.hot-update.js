"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/function/Filter.tsx":
/*!*********************************!*\
  !*** ./src/function/Filter.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": function() { return /* binding */ Filter; }\n/* harmony export */ });\nfunction Filter(a, b) {\n    let filteredFriend = a;\n    const searchKeywords = b.trim().toLowerCase().match(/[^\\s]+/g);\n    if (searchKeywords) {\n        const result = a.filter((friend)=>searchKeywords.every((kw)=>friend.name.toLowerCase().indexOf(kw) !== -1));\n        filteredFriend = result;\n    }\n    return filteredFriendƒ;\n}\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb24vRmlsdGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsT0FBT0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDM0IsSUFBSUMsaUJBQWlCRjtJQUVyQixNQUFNRyxpQkFBc0JGLEVBQ3pCRyxJQUFJLEdBQ0pDLFdBQVcsR0FDWEMsS0FBSyxDQUFDO0lBRVQsSUFBSUgsZ0JBQWdCO1FBQ2xCLE1BQU1JLFNBQVNQLEVBQUVRLE1BQU0sQ0FBQyxDQUFDQyxTQUN2Qk4sZUFBZU8sS0FBSyxDQUFDLENBQUNDLEtBQU9GLE9BQU9HLElBQUksQ0FBQ1AsV0FBVyxHQUFHUSxPQUFPLENBQUNGLFFBQVEsQ0FBQztRQUUxRVQsaUJBQWlCSztJQUNuQixDQUFDO0lBQ0QsT0FBT087QUFDVCxDQUFDO0tBZmVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mdW5jdGlvbi9GaWx0ZXIudHN4P2UzMWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEZpbHRlcihhLCBiKSB7XG4gIGxldCBmaWx0ZXJlZEZyaWVuZCA9IGE7XG5cbiAgY29uc3Qgc2VhcmNoS2V5d29yZHM6IGFueSA9IGJcbiAgICAudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAubWF0Y2goL1teXFxzXSsvZyk7XG5cbiAgaWYgKHNlYXJjaEtleXdvcmRzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYS5maWx0ZXIoKGZyaWVuZCkgPT5cbiAgICAgIHNlYXJjaEtleXdvcmRzLmV2ZXJ5KChrdykgPT4gZnJpZW5kLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGt3KSAhPT0gLTEpXG4gICAgKTtcbiAgICBmaWx0ZXJlZEZyaWVuZCA9IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRGcmllbmTGklxufVxuIl0sIm5hbWVzIjpbIkZpbHRlciIsImEiLCJiIiwiZmlsdGVyZWRGcmllbmQiLCJzZWFyY2hLZXl3b3JkcyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwicmVzdWx0IiwiZmlsdGVyIiwiZnJpZW5kIiwiZXZlcnkiLCJrdyIsIm5hbWUiLCJpbmRleE9mIiwiZmlsdGVyZWRGcmllbmTGkiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/function/Filter.tsx\n"));

/***/ })

});