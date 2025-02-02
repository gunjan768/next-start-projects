webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");







var _jsxFileName = "D:\\Practice\\Web\\React\\NextJS\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // import fetch from "isomorphic-unfetch";




var About = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  var _super = _createSuper(About);

  function About() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, About);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(About, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          statusCode = _this$props.statusCode;

      if (statusCode) {
        return __jsx(_error__WEBPACK_IMPORTED_MODULE_9__["default"], {
          statusCode: statusCode,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }
        });
      }

      console.log({
        user: user
      });
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "About",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 4
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      }, user.name), __jsx("img", {
        src: user.avatar_url,
        alt: "Reed",
        height: "200px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    // getInitialProps() is a method we use in Next.js to fetch data fromn the server ( i.e to have a side effects ) instead of componentDidMount
    // as we can use componentDidMount in class based only but getInitialProps() method can be used with functional component also. 
    // getInitialProps() belongs to the About class ( i.e static ) hence we can use outside the class also. getInitialProps() will addd our
    // fetched data in props instead of state.
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, statusCode, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.github.com/users/gunjan768");

              case 2:
                res = _context.sent;
                statusCode = res.status > 200 ? res.status : false;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  user: data,
                  statusCode: statusCode
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsInVzZXIiLCJzdGF0dXNDb2RlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJhdmF0YXJfdXJsIiwiZmV0Y2giLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7NkJBaUJwQjtBQUFBLHdCQUM4QixLQUFLQyxLQURuQztBQUFBLFVBQ1NDLElBRFQsZUFDU0EsSUFEVDtBQUFBLFVBQ2VDLFVBRGYsZUFDZUEsVUFEZjs7QUFHQyxVQUFHQSxVQUFILEVBQWU7QUFDZCxlQUFPLE1BQUMsOENBQUQ7QUFBTyxvQkFBVSxFQUFLQSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQTs7QUFDREMsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0gsWUFBSSxFQUFKQTtBQUFELE9BQVo7QUFDQSxhQUNDLE1BQUMsMERBQUQ7QUFBUSxhQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQSxJQUFJLENBQUNJLElBQVYsQ0FERCxFQUVDO0FBQUssV0FBRyxFQUFLSixJQUFJLENBQUNLLFVBQWxCO0FBQStCLFdBQUcsRUFBQyxNQUFuQztBQUEwQyxjQUFNLEVBQUMsT0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZELENBREQ7QUFNQTs7O0FBNUJEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7dUJBR21CQyxLQUFLLENBQUMsd0NBQUQsQzs7O0FBQWpCQyxtQjtBQUNBTiwwQixHQUFhTSxHQUFHLENBQUNDLE1BQUosR0FBYSxHQUFiLEdBQW1CRCxHQUFHLENBQUNDLE1BQXZCLEdBQWdDLEs7O3VCQUNoQ0QsR0FBRyxDQUFDRSxJQUFKLEU7OztBQUFiQyxvQjtpREFHQztBQUFFVixzQkFBSSxFQUFFVSxJQUFSO0FBQWNULDRCQUFVLEVBQVZBO0FBQWQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFiMEJVLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjU0NGRjODkyNTY2MjNjNGZiYWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9fZXJyb3JcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCBcbntcblx0Ly8gZ2V0SW5pdGlhbFByb3BzKCkgaXMgYSBtZXRob2Qgd2UgdXNlIGluIE5leHQuanMgdG8gZmV0Y2ggZGF0YSBmcm9tbiB0aGUgc2VydmVyICggaS5lIHRvIGhhdmUgYSBzaWRlIGVmZmVjdHMgKSBpbnN0ZWFkIG9mIGNvbXBvbmVudERpZE1vdW50XG5cdC8vIGFzIHdlIGNhbiB1c2UgY29tcG9uZW50RGlkTW91bnQgaW4gY2xhc3MgYmFzZWQgb25seSBidXQgZ2V0SW5pdGlhbFByb3BzKCkgbWV0aG9kIGNhbiBiZSB1c2VkIHdpdGggZnVuY3Rpb25hbCBjb21wb25lbnQgYWxzby4gXG5cdC8vIGdldEluaXRpYWxQcm9wcygpIGJlbG9uZ3MgdG8gdGhlIEFib3V0IGNsYXNzICggaS5lIHN0YXRpYyApIGhlbmNlIHdlIGNhbiB1c2Ugb3V0c2lkZSB0aGUgY2xhc3MgYWxzby4gZ2V0SW5pdGlhbFByb3BzKCkgd2lsbCBhZGRkIG91clxuXHQvLyBmZXRjaGVkIGRhdGEgaW4gcHJvcHMgaW5zdGVhZCBvZiBzdGF0ZS5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIFxuXHR7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2d1bmphbjc2OFwiKTtcblx0XHRjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1cyA+IDIwMCA/IHJlcy5zdGF0dXMgOiBmYWxzZTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRcblx0XHQvLyBIZXJlIHdlIG5lZWQgdG8gcmV0dXJuIGFuIG9iamVjdCBhbmQgZXZlcnkga2V5LXZhbHVlIHBhaXIgd2lsbCBnZXQgYXR0YWNoIHRvIHRoZSBwcm9wcyBpbnN0ZWFkIG9mIHN0YXRlLiBcblx0XHRyZXR1cm4geyB1c2VyOiBkYXRhLCBzdGF0dXNDb2RlIH07XG5cdH1cblxuXHRyZW5kZXIoKSBcblx0e1xuXHRcdGNvbnN0IHsgdXNlciwgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmKHN0YXR1c0NvZGUpIHtcblx0XHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZSA9IHsgc3RhdHVzQ29kZSB9IC8+O1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh7dXNlcn0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJBYm91dFwiPlxuXHRcdFx0XHQ8cD57IHVzZXIubmFtZSB9PC9wPlxuXHRcdFx0XHQ8aW1nIHNyYyA9IHsgdXNlci5hdmF0YXJfdXJsIH0gYWx0PVwiUmVlZFwiIGhlaWdodD1cIjIwMHB4XCIgLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9