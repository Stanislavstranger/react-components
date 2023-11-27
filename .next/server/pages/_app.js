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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/services/AnimalsService.ts":
/*!****************************************!*\
  !*** ./src/services/AnimalsService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animalsAPI: () => (/* binding */ animalsAPI)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst URL = \"https://stapi.co/api/v1/rest/animal/search\";\nconst animalsAPI = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"animalsAPI\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: URL\n    }),\n    endpoints: (build)=>({\n            fetchAllAnimals: build.query({\n                query: ({ pageNumber = 0, pageSize = 50 })=>({\n                        url: \"\",\n                        params: {\n                            pageNumber,\n                            pageSize\n                        }\n                    })\n            }),\n            searchAnimalsByName: build.mutation({\n                query: ({ term = \"\", pageNumber = 0, pageSize = 50 })=>({\n                        url: \"\",\n                        params: {\n                            name: term,\n                            pageNumber,\n                            pageSize\n                        },\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/x-www-form-urlencoded\"\n                        }\n                    })\n            })\n        })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvQW5pbWFsc1NlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlFO0FBR3pFLE1BQU1FLE1BQU07QUFFTCxNQUFNQyxhQUFhSCx1RUFBU0EsQ0FBQztJQUNsQ0ksYUFBYTtJQUNiQyxXQUFXSiw0RUFBY0EsQ0FBQztRQUFFSyxTQUFTSjtJQUFJO0lBQ3pDSyxXQUFXLENBQUNDLFFBQVc7WUFDckJDLGlCQUFpQkQsTUFBTUUsS0FBSyxDQUcxQjtnQkFDQUEsT0FBTyxDQUFDLEVBQUVDLGFBQWEsQ0FBQyxFQUFFQyxXQUFXLEVBQUUsRUFBRSxHQUFNO3dCQUM3Q0MsS0FBSzt3QkFDTEMsUUFBUTs0QkFDTkg7NEJBQ0FDO3dCQUNGO29CQUNGO1lBQ0Y7WUFFQUcscUJBQXFCUCxNQUFNUSxRQUFRLENBR2pDO2dCQUNBTixPQUFPLENBQUMsRUFBRU8sT0FBTyxFQUFFLEVBQUVOLGFBQWEsQ0FBQyxFQUFFQyxXQUFXLEVBQUUsRUFBRSxHQUFNO3dCQUN4REMsS0FBSzt3QkFDTEMsUUFBUTs0QkFDTkksTUFBTUQ7NEJBQ05OOzRCQUNBQzt3QkFDRjt3QkFDQU8sUUFBUTt3QkFDUkMsU0FBUzs0QkFDUCxnQkFBZ0I7d0JBQ2xCO29CQUNGO1lBQ0Y7UUFDRjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC12aXRlLXRzLy4vc3JjL3NlcnZpY2VzL0FuaW1hbHNTZXJ2aWNlLnRzP2ZjZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3N0YXBpLmNvL2FwaS92MS9yZXN0L2FuaW1hbC9zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuaW1hbHNBUEkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnYW5pbWFsc0FQSScsXHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6IFVSTCB9KSxcclxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgIGZldGNoQWxsQW5pbWFsczogYnVpbGQucXVlcnk8XHJcbiAgICAgIERhdGEsXHJcbiAgICAgIHsgcGFnZU51bWJlcjogbnVtYmVyOyBwYWdlU2l6ZT86IG51bWJlciB9XHJcbiAgICA+KHtcclxuICAgICAgcXVlcnk6ICh7IHBhZ2VOdW1iZXIgPSAwLCBwYWdlU2l6ZSA9IDUwIH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICBwYWdlU2l6ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG5cclxuICAgIHNlYXJjaEFuaW1hbHNCeU5hbWU6IGJ1aWxkLm11dGF0aW9uPFxyXG4gICAgICBEYXRhLFxyXG4gICAgICB7IHRlcm06IHN0cmluZzsgcGFnZU51bWJlcj86IG51bWJlcjsgcGFnZVNpemU/OiBudW1iZXIgfVxyXG4gICAgPih7XHJcbiAgICAgIHF1ZXJ5OiAoeyB0ZXJtID0gJycsIHBhZ2VOdW1iZXIgPSAwLCBwYWdlU2l6ZSA9IDUwIH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG5hbWU6IHRlcm0sXHJcbiAgICAgICAgICBwYWdlTnVtYmVyLFxyXG4gICAgICAgICAgcGFnZVNpemUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIlVSTCIsImFuaW1hbHNBUEkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZCIsImZldGNoQWxsQW5pbWFscyIsInF1ZXJ5IiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwidXJsIiwicGFyYW1zIiwic2VhcmNoQW5pbWFsc0J5TmFtZSIsIm11dGF0aW9uIiwidGVybSIsIm5hbWUiLCJtZXRob2QiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/AnimalsService.ts\n");

/***/ }),

/***/ "./src/store/reducers/ItemsSlice.ts":
/*!******************************************!*\
  !*** ./src/store/reducers/ItemsSlice.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   itemsSlice: () => (/* binding */ itemsSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    animals: [],\n    selectedAnimal: {\n        avian: false,\n        canine: false,\n        earthAnimal: false,\n        earthInsect: false,\n        feline: false,\n        name: \"\",\n        uid: \"\"\n    }\n};\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {\n        changeItems (state, action) {\n            state.animals = action.payload;\n        },\n        changeItem (state, action) {\n            state.selectedAnimal = action.payload;\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvSXRlbXNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThEO0FBUTlELE1BQU1DLGVBQTJCO0lBQy9CQyxTQUFTLEVBQUU7SUFDWEMsZ0JBQWdCO1FBQ2RDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxhQUFhO1FBQ2JDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLEtBQUs7SUFDUDtBQUNGO0FBRU8sTUFBTUMsYUFBYVgsNkRBQVdBLENBQUM7SUFDcENTLE1BQU07SUFDTlI7SUFDQVcsVUFBVTtRQUNSQyxhQUFZQyxLQUFLLEVBQUVDLE1BQWdDO1lBQ2pERCxNQUFNWixPQUFPLEdBQUdhLE9BQU9DLE9BQU87UUFDaEM7UUFDQUMsWUFBV0gsS0FBSyxFQUFFQyxNQUE4QjtZQUM5Q0QsTUFBTVgsY0FBYyxHQUFHWSxPQUFPQyxPQUFPO1FBQ3ZDO0lBQ0Y7QUFDRixHQUFHO0FBRUgsaUVBQWVMLFdBQVdPLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXZpdGUtdHMvLi9zcmMvc3RvcmUvcmVkdWNlcnMvSXRlbXNTbGljZS50cz82OGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IEFuaW1hbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1zU3RhdGUge1xyXG4gIGFuaW1hbHM6IEFuaW1hbHNbXTtcclxuICBzZWxlY3RlZEFuaW1hbDogQW5pbWFscztcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJdGVtc1N0YXRlID0ge1xyXG4gIGFuaW1hbHM6IFtdLFxyXG4gIHNlbGVjdGVkQW5pbWFsOiB7XHJcbiAgICBhdmlhbjogZmFsc2UsXHJcbiAgICBjYW5pbmU6IGZhbHNlLFxyXG4gICAgZWFydGhBbmltYWw6IGZhbHNlLFxyXG4gICAgZWFydGhJbnNlY3Q6IGZhbHNlLFxyXG4gICAgZmVsaW5lOiBmYWxzZSxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgdWlkOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2l0ZW1zJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGNoYW5nZUl0ZW1zKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QW5pbWFsc1tdPikge1xyXG4gICAgICBzdGF0ZS5hbmltYWxzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlSXRlbShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFuaW1hbHM+KSB7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkQW5pbWFsID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXRlbXNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhbmltYWxzIiwic2VsZWN0ZWRBbmltYWwiLCJhdmlhbiIsImNhbmluZSIsImVhcnRoQW5pbWFsIiwiZWFydGhJbnNlY3QiLCJmZWxpbmUiLCJuYW1lIiwidWlkIiwiaXRlbXNTbGljZSIsInJlZHVjZXJzIiwiY2hhbmdlSXRlbXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjaGFuZ2VJdGVtIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/ItemsSlice.ts\n");

/***/ }),

/***/ "./src/store/reducers/LoadingSlice.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/LoadingSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   loadingSlice: () => (/* binding */ loadingSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    loading: true\n};\nconst loadingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"loading\",\n    initialState,\n    reducers: {\n        changeLoading (state, action) {\n            state.loading = action.payload;\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvTG9hZGluZ1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEQ7QUFNOUQsTUFBTUMsZUFBNkI7SUFDakNDLFNBQVM7QUFDWDtBQUVPLE1BQU1DLGVBQWVILDZEQUFXQSxDQUFDO0lBQ3RDSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsZUFBY0MsS0FBSyxFQUFFQyxNQUE4QjtZQUNqREQsTUFBTUwsT0FBTyxHQUFHTSxPQUFPQyxPQUFPO1FBQ2hDO0lBQ0Y7QUFDRixHQUFHO0FBRUgsaUVBQWVOLGFBQWFPLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXZpdGUtdHMvLi9zcmMvc3RvcmUvcmVkdWNlcnMvTG9hZGluZ1NsaWNlLnRzP2EwODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmludGVyZmFjZSBMb2FkaW5nU3RhdGUge1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9hZGluZ1N0YXRlID0ge1xyXG4gIGxvYWRpbmc6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGluZ1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdsb2FkaW5nJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGNoYW5nZUxvYWRpbmcoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJsb2FkaW5nU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjaGFuZ2VMb2FkaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/LoadingSlice.ts\n");

/***/ }),

/***/ "./src/store/reducers/SearchSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/SearchSlice.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   change: () => (/* binding */ change),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initializeFromLocalStorage: () => (/* binding */ initializeFromLocalStorage),\n/* harmony export */   searchSlice: () => (/* binding */ searchSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    searchTerm: \"\"\n};\nconst searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"search\",\n    initialState,\n    reducers: {\n        change (state, action) {\n            state.searchTerm = action.payload;\n        },\n        initializeFromLocalStorage (state) {\n            if (false) {}\n        }\n    }\n});\nconst { initializeFromLocalStorage, change } = searchSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvU2VhcmNoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBTTlELE1BQU1DLGVBQTRCO0lBQ2hDQyxZQUFZO0FBQ2Q7QUFFTyxNQUFNQyxjQUFjSCw2REFBV0EsQ0FBQztJQUNyQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFFBQU9DLEtBQUssRUFBRUMsTUFBNkI7WUFDekNELE1BQU1MLFVBQVUsR0FBR00sT0FBT0MsT0FBTztRQUNuQztRQUNBQyw0QkFBMkJILEtBQUs7WUFDOUIsSUFBSSxLQUFrQixFQUFhLEVBR2xDO1FBQ0g7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVHLDBCQUEwQixFQUFFSixNQUFNLEVBQUUsR0FBR0gsWUFBWVcsT0FBTyxDQUFDO0FBQzFFLGlFQUFlWCxZQUFZWSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC12aXRlLXRzLy4vc3JjL3N0b3JlL3JlZHVjZXJzL1NlYXJjaFNsaWNlLnRzPzE2YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmludGVyZmFjZSBTZWFyY2hTdGF0ZSB7XHJcbiAgc2VhcmNoVGVybTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFNlYXJjaFN0YXRlID0ge1xyXG4gIHNlYXJjaFRlcm06ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgY2hhbmdlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICBzdGF0ZS5zZWFyY2hUZXJtID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbGl6ZUZyb21Mb2NhbFN0b3JhZ2Uoc3RhdGUpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRTZWFyY2hUZXJtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlYXJjaFRlcm0nKTtcclxuICAgICAgICBzdGF0ZS5zZWFyY2hUZXJtID0gc2F2ZWRTZWFyY2hUZXJtIHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgaW5pdGlhbGl6ZUZyb21Mb2NhbFN0b3JhZ2UsIGNoYW5nZSB9ID0gc2VhcmNoU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwic2VhcmNoVGVybSIsInNlYXJjaFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY2hhbmdlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaW5pdGlhbGl6ZUZyb21Mb2NhbFN0b3JhZ2UiLCJzYXZlZFNlYXJjaFRlcm0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/reducers/SearchSlice.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupStore: () => (/* binding */ setupStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_SearchSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/SearchSlice */ \"./src/store/reducers/SearchSlice.ts\");\n/* harmony import */ var _reducers_ItemsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/ItemsSlice */ \"./src/store/reducers/ItemsSlice.ts\");\n/* harmony import */ var _reducers_LoadingSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/LoadingSlice */ \"./src/store/reducers/LoadingSlice.ts\");\n/* harmony import */ var _services_AnimalsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AnimalsService */ \"./src/services/AnimalsService.ts\");\n\n\n\n\n\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    searchReducer: _reducers_SearchSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    itemsReducer: _reducers_ItemsSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    loadingReducer: _reducers_LoadingSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    [_services_AnimalsService__WEBPACK_IMPORTED_MODULE_4__.animalsAPI.reducerPath]: _services_AnimalsService__WEBPACK_IMPORTED_MODULE_4__.animalsAPI.reducer\n});\nconst setupStore = ()=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: rootReducer,\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_services_AnimalsService__WEBPACK_IMPORTED_MODULE_4__.animalsAPI.middleware)\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQUNoQjtBQUNGO0FBQ0k7QUFDRztBQUV4RCxNQUFNTSxjQUFjTixpRUFBZUEsQ0FBQztJQUNsQ0UsYUFBYUEsK0RBQUFBO0lBQ2JDLFlBQVlBLDhEQUFBQTtJQUNaQyxjQUFjQSxnRUFBQUE7SUFDZCxDQUFDQyxnRUFBVUEsQ0FBQ0UsV0FBVyxDQUFDLEVBQUVGLGdFQUFVQSxDQUFDRyxPQUFPO0FBQzlDO0FBRU8sTUFBTUMsYUFBYTtJQUN4QixPQUFPUixnRUFBY0EsQ0FBQztRQUNwQk8sU0FBU0Y7UUFDVEksWUFBWSxDQUFDQyx1QkFDWEEsdUJBQXVCQyxNQUFNLENBQUNQLGdFQUFVQSxDQUFDSyxVQUFVO0lBQ3ZEO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXZpdGUtdHMvLi9zcmMvc3RvcmUvc3RvcmUudHM/NTAyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvU2VhcmNoU2xpY2UnO1xyXG5pbXBvcnQgaXRlbXNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvSXRlbXNTbGljZSc7XHJcbmltcG9ydCBsb2FkaW5nUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL0xvYWRpbmdTbGljZSc7XHJcbmltcG9ydCB7IGFuaW1hbHNBUEkgfSBmcm9tICcuLi9zZXJ2aWNlcy9BbmltYWxzU2VydmljZSc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc2VhcmNoUmVkdWNlcixcclxuICBpdGVtc1JlZHVjZXIsXHJcbiAgbG9hZGluZ1JlZHVjZXIsXHJcbiAgW2FuaW1hbHNBUEkucmVkdWNlclBhdGhdOiBhbmltYWxzQVBJLnJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHVwU3RvcmUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgICBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChhbmltYWxzQVBJLm1pZGRsZXdhcmUpLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIHNldHVwU3RvcmU+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlWydkaXNwYXRjaCddO1xyXG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJzZWFyY2hSZWR1Y2VyIiwiaXRlbXNSZWR1Y2VyIiwibG9hZGluZ1JlZHVjZXIiLCJhbmltYWxzQVBJIiwicm9vdFJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsInJlZHVjZXIiLCJzZXR1cFN0b3JlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\n\n\n\n\nconst store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.setupStore)();\n// This default export is required in a new `pages/_app.js` file.\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFDVTtBQUNLO0FBRTVDLE1BQU1FLFFBQVFELHdEQUFVQTtBQUV4QixpRUFBaUU7QUFDbEQsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0wsaURBQVFBO1FBQUNFLE9BQU9BO2tCQUNmLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtdml0ZS10cy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldHVwU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcblxyXG5jb25zdCBzdG9yZSA9IHNldHVwU3RvcmUoKTtcclxuXHJcbi8vIFRoaXMgZGVmYXVsdCBleHBvcnQgaXMgcmVxdWlyZWQgaW4gYSBuZXcgYHBhZ2VzL19hcHAuanNgIGZpbGUuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzZXR1cFN0b3JlIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();