"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page/[id]",{

/***/ "./src/pages/page/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/page/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var _components_UI_cardList_CardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/cardList/CardList */ \"./src/components/UI/cardList/CardList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Pages = (param)=>{\n    let { animals } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query } = router;\n    const selectedPage = query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Page \".concat(selectedPage),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_cardList_CardList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                animals: animals\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\page\\\\[id].tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\page\\\\[id].tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Pages, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Pages;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\nvar _c;\n$RefreshReg$(_c, \"Pages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGFnZS9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDWTtBQUlTO0FBRTdELE1BQU1HLFFBQXVEO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUN2RSxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxLQUFLLEVBQUUsR0FBR0Q7SUFDbEIsTUFBTUUsZUFBZUQsTUFBTUUsRUFBRTtJQUU3QixxQkFDRTtrQkFDRSw0RUFBQ1AsaUVBQU1BO1lBQUNRLE9BQU8sUUFBcUIsT0FBYkY7c0JBQ3JCLDRFQUFDTCx3RUFBUUE7Z0JBQUNFLFNBQVNBOzs7Ozs7Ozs7Ozs7QUFJM0I7R0FaTUQ7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRzs7QUFjTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGFnZS9baWRdLnRzeD9hODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBGQywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFuaW1hbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvY2FyZExpc3QvQ2FyZExpc3QnO1xyXG5cclxuY29uc3QgUGFnZXM6IEZDPFByb3BzV2l0aENoaWxkcmVuPHsgYW5pbWFsczogQW5pbWFsc1tdIH0+PiA9ICh7IGFuaW1hbHMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zdCBzZWxlY3RlZFBhZ2UgPSBxdWVyeS5pZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9e2BQYWdlICR7c2VsZWN0ZWRQYWdlfWB9PlxyXG4gICAgICAgIDxDYXJkTGlzdCBhbmltYWxzPXthbmltYWxzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XHJcbiAgYW5pbWFsczogQW5pbWFsc1tdO1xyXG59PiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5pZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IFtwYWdlSWQsIHBhZ2VTaXplLCBzZWFyY2hUZXJtXSA9IGlkLnRvU3RyaW5nKCkuc3BsaXQoJy0nKTtcclxuICBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3N0YXBpLmNvL2FwaS92MS9yZXN0L2FuaW1hbC9zZWFyY2gnO1xyXG4gIGlmIChzZWFyY2hUZXJtID09ICcnKSB7XHJcbiAgICBjb25zdCByZXNwb25zZUdldCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtCQVNFX1VSTH0/JnBhZ2VOdW1iZXI9JHsrcGFnZUlkIC0gMX0mcGFnZVNpemU9JHtwYWdlU2l6ZX1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBhbmltYWxzIH0gPSBhd2FpdCByZXNwb25zZUdldC5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBhbmltYWxzIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCByZXNwb25zZVBvc3QgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke0JBU0VfVVJMfT9uYW1lPSR7c2VhcmNoVGVybX0mcGFnZU51bWJlcj0keytwYWdlSWQgLSAxfSZwYWdlU2l6ZT0ke3BhZ2VTaXplfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgeyBhbmltYWxzIH0gPSBhd2FpdCByZXNwb25zZVBvc3QuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhbmltYWxzIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxheW91dCIsIkNhcmRMaXN0IiwiUGFnZXMiLCJhbmltYWxzIiwicm91dGVyIiwicXVlcnkiLCJzZWxlY3RlZFBhZ2UiLCJpZCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/page/[id].tsx\n"));

/***/ })

});