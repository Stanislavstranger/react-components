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

/***/ "./src/components/UI/pageNotFound/PageNotFound.tsx":
/*!*********************************************************!*\
  !*** ./src/components/UI/pageNotFound/PageNotFound.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/Button */ \"./src/components/UI/button/Button.tsx\");\n/* harmony import */ var _PageNotFound_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageNotFound.module.css */ \"./src/components/UI/pageNotFound/PageNotFound.module.css\");\n/* harmony import */ var _PageNotFound_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PageNotFound_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NotFound = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleButtonClick = ()=>{\n        router.push(\"/page/1-50- \");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PageNotFound_module_css__WEBPACK_IMPORTED_MODULE_4___default().page_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                priority: true,\n                className: (_PageNotFound_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                src: \"/Page_not_found.png\",\n                alt: \"Page not found\",\n                width: 1024,\n                height: 587\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\components\\\\UI\\\\pageNotFound\\\\PageNotFound.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleButtonClick,\n                children: \"Go back to main page\"\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\components\\\\UI\\\\pageNotFound\\\\PageNotFound.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\components\\\\UI\\\\pageNotFound\\\\PageNotFound.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NotFound, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NotFound;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\nvar _c;\n$RefreshReg$(_c, \"NotFound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9wYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNVO0FBQ1I7QUFFeEMsTUFBTUksV0FBVzs7SUFDZixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTUcsb0JBQW9CO1FBQ3hCRCxPQUFPRSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUCxnRkFBc0I7OzBCQUNwQyw4REFBQ0YsbURBQUtBO2dCQUNKVyxVQUFVO2dCQUNWRixXQUFXUCx1RUFBYTtnQkFDeEJXLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7OzswQkFFViw4REFBQ2Ysc0RBQU1BO2dCQUFDZ0IsU0FBU1g7MEJBQW1COzs7Ozs7Ozs7Ozs7QUFHMUM7R0FwQk1GOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFzQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvcGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZC50c3g/NzUyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUGFnZU5vdEZvdW5kLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL3BhZ2UvMS01MC0gJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VfY29udGFpbmVyfT5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgcHJpb3JpdHk9e3RydWV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgIHNyYz1cIi9QYWdlX25vdF9mb3VuZC5wbmdcIlxyXG4gICAgICAgIGFsdD1cIlBhZ2Ugbm90IGZvdW5kXCJcclxuICAgICAgICB3aWR0aD17MTAyNH1cclxuICAgICAgICBoZWlnaHQ9ezU4N31cclxuICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PkdvIGJhY2sgdG8gbWFpbiBwYWdlPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkJ1dHRvbiIsImNsYXNzZXMiLCJ1c2VSb3V0ZXIiLCJOb3RGb3VuZCIsInJvdXRlciIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VfY29udGFpbmVyIiwicHJpb3JpdHkiLCJpbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/pageNotFound/PageNotFound.tsx\n"));

/***/ })

});