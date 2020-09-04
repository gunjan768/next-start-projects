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
      pathname = _ref.pathname;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 2
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/".concat(pathname, "/").concat(slug),
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
  var pathname = _ref2.pathname;
  console.log({
    pathname: pathname
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "My Blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx(PostLink, {
    pathname: pathname,
    slug: "react-post",
    title: "React Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(PostLink, {
    pathname: pathname,
    slug: "angular-post",
    title: "Angular Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx(PostLink, {
    pathname: pathname,
    slug: "vue-post",
    title: "Vue Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJQb3N0TGluayIsInNsdWciLCJ0aXRsZSIsInBhdGhuYW1lIiwiQmxvZyIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsS0FBVCxRQUFTQSxLQUFUO0FBQUEsTUFBZ0JDLFFBQWhCLFFBQWdCQSxRQUFoQjtBQUFBLFNBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sTUFBRSxhQUFRQSxRQUFSLGNBQW9CRixJQUFwQixDQUFSO0FBQW9DLFFBQUksd0JBQW1CQyxLQUFuQixDQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNQSxLQUFOLENBREQsQ0FERCxDQURnQjtBQUFBLENBQWpCOztLQUFNRixROztBQVFOLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQ2I7QUFBQSxNQURnQkQsUUFDaEIsU0FEZ0JBLFFBQ2hCO0FBQ0NFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNILFlBQVEsRUFBUkE7QUFBRCxHQUFaO0FBQ0EsU0FDQyxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFFBQUQ7QUFBVSxZQUFRLEVBQUtBLFFBQXZCO0FBQWtDLFFBQUksRUFBQyxZQUF2QztBQUFvRCxTQUFLLEVBQUMsWUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxRQUFEO0FBQVUsWUFBUSxFQUFLQSxRQUF2QjtBQUFrQyxRQUFJLEVBQUMsY0FBdkM7QUFBc0QsU0FBSyxFQUFDLGNBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsUUFBRDtBQUFVLFlBQVEsRUFBS0EsUUFBdkI7QUFBa0MsUUFBSSxFQUFDLFVBQXZDO0FBQWtELFNBQUssRUFBQyxVQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FERCxDQUREO0FBU0EsQ0FaRDs7TUFBTUMsSTtBQWNTLHFFQUFBRyw4REFBVSxDQUFDSCxJQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMzU5ODc2ZGE2MTkyODQyYWIzOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vICdhcycgcHJvcCBvZiBMaW5rIHRhZyB3aWxsIHJlcGxhY2UgdGhlIHVybCBuYW1lIHdpdGggdGhlIHN0cmluZyB2YWx1ZSBwYXNzZWQgdG8gJ2FzJyBzbyB0aGF0IHdlIGNhbiBwYXNzIHNvbWV0aGluZyBhcyBxdWVyeSBwYXJhbWV0ZXIgYW5kIFxuLy8gaXQgd2lsbCBub3QgYmUgdmlzaWJsZSBpbiB0aGUgdXJsLlxuY29uc3QgUG9zdExpbmsgPSAoeyBzbHVnLCB0aXRsZSwgcGF0aG5hbWUgfSkgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgYXMgPSB7YC8ke3BhdGhuYW1lfS8ke3NsdWd9YH0gaHJlZiA9IHtgL3Bvc3Q/dGl0bGU9JHt0aXRsZX1gfT5cblx0XHRcdDxhPiB7IHRpdGxlIH08L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2xpPlxuKTtcblxuY29uc3QgQmxvZyA9ICh7IHBhdGhuYW1lIH0pID0+IFxueyBcblx0Y29uc29sZS5sb2coe3BhdGhuYW1lfSlcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0IHRpdGxlPVwiTXkgQmxvZ1wiPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8UG9zdExpbmsgcGF0aG5hbWUgPSB7IHBhdGhuYW1lIH0gc2x1Zz1cInJlYWN0LXBvc3RcIiB0aXRsZT1cIlJlYWN0IFBvc3RcIiAvPlxuXHRcdFx0XHQ8UG9zdExpbmsgcGF0aG5hbWUgPSB7IHBhdGhuYW1lIH0gc2x1Zz1cImFuZ3VsYXItcG9zdFwiIHRpdGxlPVwiQW5ndWxhciBQb3N0XCIgLz5cblx0XHRcdFx0PFBvc3RMaW5rIHBhdGhuYW1lID0geyBwYXRobmFtZSB9IHNsdWc9XCJ2dWUtcG9zdFwiIHRpdGxlPVwiVnVlIFBvc3RcIiAvPlxuXHRcdFx0PC91bD5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nKTsiXSwic291cmNlUm9vdCI6IiJ9