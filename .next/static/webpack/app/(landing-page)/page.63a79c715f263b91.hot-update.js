"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(landing-page)/page",{

/***/ "(app-pages-browser)/./app/(landing-page)/Navbar/navbar.tsx":
/*!**********************************************!*\
  !*** ./app/(landing-page)/Navbar/navbar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/logo */ \"(app-pages-browser)/./app/(landing-page)/Navbar/_components/logo.tsx\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/menu */ \"(app-pages-browser)/./app/(landing-page)/Navbar/_components/menu.tsx\");\n/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/buttons */ \"(app-pages-browser)/./app/(landing-page)/Navbar/_components/buttons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [hasScrolled, setHasScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setHasScrolled(true);\n            } else {\n                setHasScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const navbarClasses = \"\\n    flex py-3 items-center justify-center space-x-10 bg-[#E5E4E2] md:px-10\\n    sticky top-0 z-50 \".concat(hasScrolled ? \"shadow-sm\" : \"\", \"\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: navbarClasses,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-2/3 md:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\office\\\\asana-clone\\\\app\\\\(landing-page)\\\\Navbar\\\\navbar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuBar, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\office\\\\asana-clone\\\\app\\\\(landing-page)\\\\Navbar\\\\navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\office\\\\asana-clone\\\\app\\\\(landing-page)\\\\Navbar\\\\navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buttons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\office\\\\asana-clone\\\\app\\\\(landing-page)\\\\Navbar\\\\navbar.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\office\\\\asana-clone\\\\app\\\\(landing-page)\\\\Navbar\\\\navbar.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"6NwvVT3+fDIipYxYzAg125V9bBs=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obGFuZGluZy1wYWdlKS9OYXZiYXIvbmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUQ7QUFFYjtBQUNpQjtBQUNMO0FBRWxELE1BQU1NLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEdBQUc7Z0JBQ3RCSCxlQUFlO1lBQ2pCLE9BQU87Z0JBQ0xBLGVBQWU7WUFDakI7UUFDRjtRQUVBRSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssZ0JBQWdCLHVHQUUrQixPQUEvQlAsY0FBYyxjQUFjLElBQUc7SUFHckQscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdGOzswQkFDZCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUdmLDhEQUFDYix3REFBSUE7Ozs7O2tDQUNMLDhEQUFDQywrREFBaUJBOzs7Ozs7Ozs7OzswQkFFbEIsOERBQUNDLDJEQUFhQTs7Ozs7Ozs7Ozs7QUFHcEI7R0FuQ01DO0tBQUFBO0FBcUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8obGFuZGluZy1wYWdlKS9OYXZiYXIvbmF2YmFyLnRzeD9kZWE1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vX2NvbXBvbmVudHMvbG9nb1wiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uTWVudUJhciB9IGZyb20gXCIuL19jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IEFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4vX2NvbXBvbmVudHMvYnV0dG9uc1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtoYXNTY3JvbGxlZCwgc2V0SGFzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICAgICAgc2V0SGFzU2Nyb2xsZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SGFzU2Nyb2xsZWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBuYXZiYXJDbGFzc2VzID0gYFxyXG4gICAgZmxleCBweS0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTEwIGJnLVsjRTVFNEUyXSBtZDpweC0xMFxyXG4gICAgc3RpY2t5IHRvcC0wIHotNTAgJHtoYXNTY3JvbGxlZCA/IFwic2hhZG93LXNtXCIgOiBcIlwifVxyXG4gIGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bmF2YmFyQ2xhc3Nlc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTIvMyBtZDp3LTEvMlwiPlxyXG5cclxuXHJcbiAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDxOYXZpZ2F0aW9uTWVudUJhciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFjdGlvbkJ1dHRvbnMgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9nbyIsIk5hdmlnYXRpb25NZW51QmFyIiwiQWN0aW9uQnV0dG9ucyIsIk5hdmJhciIsImhhc1Njcm9sbGVkIiwic2V0SGFzU2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZiYXJDbGFzc2VzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(landing-page)/Navbar/navbar.tsx\n"));

/***/ })

});