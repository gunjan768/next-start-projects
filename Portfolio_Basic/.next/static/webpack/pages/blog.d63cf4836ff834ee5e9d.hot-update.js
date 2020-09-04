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
      title = _ref.title;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 2
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/".concat(slug),
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

var Blog = function Blog(props) {
  console.log({
    props: props
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
    slug: "react-post",
    title: "React Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(PostLink, {
    slug: "angular-post",
    title: "Angular Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx(PostLink, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJQb3N0TGluayIsInNsdWciLCJ0aXRsZSIsIkJsb2ciLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsS0FBVCxRQUFTQSxLQUFUO0FBQUEsU0FDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLGFBQVFELElBQVIsQ0FBUjtBQUF3QixRQUFJLHdCQUFtQkMsS0FBbkIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTUEsS0FBTixDQURELENBREQsQ0FEZ0I7QUFBQSxDQUFqQjs7S0FBTUYsUTs7QUFRTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLLEVBQ2xCO0FBQ0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNGLFNBQUssRUFBTEE7QUFBRCxHQUFaO0FBQ0EsU0FDQyxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUMsWUFBZjtBQUE0QixTQUFLLEVBQUMsWUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDLGNBQWY7QUFBOEIsU0FBSyxFQUFDLGNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBQyxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FERCxDQUREO0FBU0EsQ0FaRDs7TUFBTUQsSTtBQWNTLHFFQUFBSSw4REFBVSxDQUFDSixJQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZDYzY2Y0ODM2ZmY4MzRlZTVlOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vICdhcycgcHJvcCBvZiBMaW5rIHRhZyB3aWxsIHJlcGxhY2UgdGhlIHVybCBuYW1lIHdpdGggdGhlIHN0cmluZyB2YWx1ZSBwYXNzZWQgdG8gJ2FzJyBzbyB0aGF0IHdlIGNhbiBwYXNzIHNvbWV0aGluZyBhcyBxdWVyeSBwYXJhbWV0ZXIgYW5kIFxuLy8gaXQgd2lsbCBub3QgYmUgdmlzaWJsZSBpbiB0aGUgdXJsLlxuY29uc3QgUG9zdExpbmsgPSAoeyBzbHVnLCB0aXRsZSB9KSA9PiAoXG5cdDxsaT5cblx0XHQ8TGluayBhcyA9IHtgLyR7c2x1Z31gfSBocmVmID0ge2AvcG9zdD90aXRsZT0ke3RpdGxlfWB9PlxuXHRcdFx0PGE+IHsgdGl0bGUgfTwvYT5cblx0XHQ8L0xpbms+XG5cdDwvbGk+XG4pO1xuXG5jb25zdCBCbG9nID0gcHJvcHMgPT4gXG57IFxuXHRjb25zb2xlLmxvZyh7cHJvcHN9KTtcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0IHRpdGxlPVwiTXkgQmxvZ1wiPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8UG9zdExpbmsgc2x1Zz1cInJlYWN0LXBvc3RcIiB0aXRsZT1cIlJlYWN0IFBvc3RcIiAvPlxuXHRcdFx0XHQ8UG9zdExpbmsgc2x1Zz1cImFuZ3VsYXItcG9zdFwiIHRpdGxlPVwiQW5ndWxhciBQb3N0XCIgLz5cblx0XHRcdFx0PFBvc3RMaW5rIHNsdWc9XCJ2dWUtcG9zdFwiIHRpdGxlPVwiVnVlIFBvc3RcIiAvPlxuXHRcdFx0PC91bD5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nKTsiXSwic291cmNlUm9vdCI6IiJ9