webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "D:\\Practice\\Web\\React\\NextJS\\pages\\blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // 'as' prop of Link tag will replace the url name with the string value passed to 'as' so that we can pass something as query parameter and 
// it will not be visible in the url.

var PostLink = function PostLink(_ref) {
  var slug = _ref.slug,
      title = _ref.title,
      pathName = _ref.pathName;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 2
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/gunjan/".concat(slug),
    href: "/post?title=".concat(title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, " ", title)));
};

_c = PostLink;

var Blog = function Blog(_ref2) {
  var router = _ref2.router;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "My Blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, __jsx(PostLink, {
    pathName: router.pathname,
    slug: "react-post",
    title: "React Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx(PostLink, {
    pathName: router.pathname,
    slug: "angular-post",
    title: "Angular Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(PostLink, {
    pathName: router.pathname,
    slug: "vue-post",
    title: "Vue Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  })));
};

_c2 = Blog;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Blog));

var _c, _c2, _c3;

$RefreshReg$(_c, "PostLink");
$RefreshReg$(_c2, "Blog");
$RefreshReg$(_c3, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJQb3N0TGluayIsInNsdWciLCJ0aXRsZSIsInBhdGhOYW1lIiwiQmxvZyIsInJvdXRlciIsInBhdGhuYW1lIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLE1BQWdCQyxRQUFoQixRQUFnQkEsUUFBaEI7QUFBQSxTQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLE1BQUUsb0JBQWVGLElBQWYsQ0FBUjtBQUErQixRQUFJLHdCQUFtQkMsS0FBbkIsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTUEsS0FBTixDQURELENBREQsQ0FEZ0I7QUFBQSxDQUFqQjs7S0FBTUYsUTs7QUFRTixJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxRQUNiO0FBQUEsTUFEZ0JDLE1BQ2hCLFNBRGdCQSxNQUNoQjtBQUNDLFNBQ0MsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFLQSxNQUFNLENBQUNDLFFBQTlCO0FBQXlDLFFBQUksRUFBQyxZQUE5QztBQUEyRCxTQUFLLEVBQUMsWUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFLRCxNQUFNLENBQUNDLFFBQTlCO0FBQXlDLFFBQUksRUFBQyxjQUE5QztBQUE2RCxTQUFLLEVBQUMsY0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFLRCxNQUFNLENBQUNDLFFBQTlCO0FBQXlDLFFBQUksRUFBQyxVQUE5QztBQUF5RCxTQUFLLEVBQUMsVUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBREQsQ0FERDtBQVNBLENBWEQ7O01BQU1GLEk7QUFhUyxxRUFBQUcsOERBQVUsQ0FBQ0gsSUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmQ0Mzk2YzhmOTE3NzRhNDhhNjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyAnYXMnIHByb3Agb2YgTGluayB0YWcgd2lsbCByZXBsYWNlIHRoZSB1cmwgbmFtZSB3aXRoIHRoZSBzdHJpbmcgdmFsdWUgcGFzc2VkIHRvICdhcycgc28gdGhhdCB3ZSBjYW4gcGFzcyBzb21ldGhpbmcgYXMgcXVlcnkgcGFyYW1ldGVyIGFuZCBcbi8vIGl0IHdpbGwgbm90IGJlIHZpc2libGUgaW4gdGhlIHVybC5cbmNvbnN0IFBvc3RMaW5rID0gKHsgc2x1ZywgdGl0bGUsIHBhdGhOYW1lIH0pID0+IChcblx0PGxpPlxuXHRcdDxMaW5rIGFzID0ge2AvZ3VuamFuLyR7c2x1Z31gfSBocmVmID0ge2AvcG9zdD90aXRsZT0ke3RpdGxlfWB9PlxuXHRcdFx0PGE+IHsgdGl0bGUgfTwvYT5cblx0XHQ8L0xpbms+XG5cdDwvbGk+XG4pO1xuXG5jb25zdCBCbG9nID0gKHsgcm91dGVyIH0pID0+IFxueyBcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0IHRpdGxlPVwiTXkgQmxvZ1wiPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8UG9zdExpbmsgcGF0aE5hbWUgPSB7IHJvdXRlci5wYXRobmFtZSB9IHNsdWc9XCJyZWFjdC1wb3N0XCIgdGl0bGU9XCJSZWFjdCBQb3N0XCIgLz5cblx0XHRcdFx0PFBvc3RMaW5rIHBhdGhOYW1lID0geyByb3V0ZXIucGF0aG5hbWUgfSBzbHVnPVwiYW5ndWxhci1wb3N0XCIgdGl0bGU9XCJBbmd1bGFyIFBvc3RcIiAvPlxuXHRcdFx0XHQ8UG9zdExpbmsgcGF0aE5hbWUgPSB7IHJvdXRlci5wYXRobmFtZSB9IHNsdWc9XCJ2dWUtcG9zdFwiIHRpdGxlPVwiVnVlIFBvc3RcIiAvPlxuXHRcdFx0PC91bD5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nKTsiXSwic291cmNlUm9vdCI6IiJ9