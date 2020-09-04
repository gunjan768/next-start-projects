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
      } // console.log({user});


      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "About",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 4
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 5
        }
      }, user.name), __jsx("img", {
        src: user.avatar_url,
        alt: "Reed",
        height: "200px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsInVzZXIiLCJzdGF0dXNDb2RlIiwibmFtZSIsImF2YXRhcl91cmwiLCJmZXRjaCIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs2QkFpQnBCO0FBQUEsd0JBQzhCLEtBQUtDLEtBRG5DO0FBQUEsVUFDU0MsSUFEVCxlQUNTQSxJQURUO0FBQUEsVUFDZUMsVUFEZixlQUNlQSxVQURmOztBQUdDLFVBQUdBLFVBQUgsRUFBZTtBQUNkLGVBQU8sTUFBQyw4Q0FBRDtBQUFPLG9CQUFVLEVBQUtBLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNBLE9BTEYsQ0FPQzs7O0FBRUEsYUFDQyxNQUFDLDBEQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0QsSUFBSSxDQUFDRSxJQUFWLENBREQsRUFFQztBQUFLLFdBQUcsRUFBS0YsSUFBSSxDQUFDRyxVQUFsQjtBQUErQixXQUFHLEVBQUMsTUFBbkM7QUFBMEMsY0FBTSxFQUFDLE9BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRCxDQUREO0FBTUE7OztBQTlCRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O3VCQUdtQkMsS0FBSyxDQUFDLHdDQUFELEM7OztBQUFqQkMsbUI7QUFDQUosMEIsR0FBYUksR0FBRyxDQUFDQyxNQUFKLEdBQWEsR0FBYixHQUFtQkQsR0FBRyxDQUFDQyxNQUF2QixHQUFnQyxLOzt1QkFDaENELEdBQUcsQ0FBQ0UsSUFBSixFOzs7QUFBYkMsb0I7aURBR0M7QUFBRVIsc0JBQUksRUFBRVEsSUFBUjtBQUFjUCw0QkFBVSxFQUFWQTtBQUFkLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBYjBCUSwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5lYmU0NzU4Y2QyZDk5NGFlOTUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbi8vIGltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vX2Vycm9yXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQgXG57XG5cdC8vIGdldEluaXRpYWxQcm9wcygpIGlzIGEgbWV0aG9kIHdlIHVzZSBpbiBOZXh0LmpzIHRvIGZldGNoIGRhdGEgZnJvbW4gdGhlIHNlcnZlciAoIGkuZSB0byBoYXZlIGEgc2lkZSBlZmZlY3RzICkgaW5zdGVhZCBvZiBjb21wb25lbnREaWRNb3VudFxuXHQvLyBhcyB3ZSBjYW4gdXNlIGNvbXBvbmVudERpZE1vdW50IGluIGNsYXNzIGJhc2VkIG9ubHkgYnV0IGdldEluaXRpYWxQcm9wcygpIG1ldGhvZCBjYW4gYmUgdXNlZCB3aXRoIGZ1bmN0aW9uYWwgY29tcG9uZW50IGFsc28uIFxuXHQvLyBnZXRJbml0aWFsUHJvcHMoKSBiZWxvbmdzIHRvIHRoZSBBYm91dCBjbGFzcyAoIGkuZSBzdGF0aWMgKSBoZW5jZSB3ZSBjYW4gdXNlIG91dHNpZGUgdGhlIGNsYXNzIGFsc28uIGdldEluaXRpYWxQcm9wcygpIHdpbGwgYWRkZCBvdXJcblx0Ly8gZmV0Y2hlZCBkYXRhIGluIHByb3BzIGluc3RlYWQgb2Ygc3RhdGUuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSBcblx0e1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9ndW5qYW43NjhcIik7XG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXMgPiAyMDAgPyByZXMuc3RhdHVzIDogZmFsc2U7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XG5cdFx0Ly8gSGVyZSB3ZSBuZWVkIHRvIHJldHVybiBhbiBvYmplY3QgYW5kIGV2ZXJ5IGtleS12YWx1ZSBwYWlyIHdpbGwgZ2V0IGF0dGFjaCB0byB0aGUgcHJvcHMgaW5zdGVhZCBvZiBzdGF0ZS4gXG5cdFx0cmV0dXJuIHsgdXNlcjogZGF0YSwgc3RhdHVzQ29kZSB9O1xuXHR9XG5cblx0cmVuZGVyKCkgXG5cdHtcblx0XHRjb25zdCB7IHVzZXIsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZihzdGF0dXNDb2RlKSB7XG5cdFx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGUgPSB7IHN0YXR1c0NvZGUgfSAvPjtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyh7dXNlcn0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9XCJBYm91dFwiPlxuXHRcdFx0XHQ8cD57IHVzZXIubmFtZSB9PC9wPlxuXHRcdFx0XHQ8aW1nIHNyYyA9IHsgdXNlci5hdmF0YXJfdXJsIH0gYWx0PVwiUmVlZFwiIGhlaWdodD1cIjIwMHB4XCIgLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9