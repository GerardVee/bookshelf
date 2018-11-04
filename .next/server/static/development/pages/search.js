module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Book */ "@material-ui/icons/Book");
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PostModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PostModal */ "./components/PostModal.js");
var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var base = '/';

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(
/*#__PURE__*/
function (_Component) {
  _inherits(_class2, _Component);

  function _class2() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      input: '',
      posting: false
    });

    return _this;
  }

  _createClass(_class2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      var _this$state = this.state,
          input = _this$state.input,
          posting = _this$state.posting;
      var loggedIn = user.utoken ? user.utoken === '' ? false : true : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "sticky",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "bookshelf-toolbar",
        variant: "dense",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "headline",
        color: "default",
        className: "bookshelf-toolbar-title",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(base);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "bookshelf"), loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bookshelf-toolbar-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bookshelf-toolbar-search-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, {
        placeholder: "Search..",
        disableUnderline: true,
        classes: {
          root: 'bookshelf-toolbar-search-root',
          input: 'bookshelf-toolbar-search-input'
        },
        onChange: function onChange(e) {
          return _this2.setState({
            input: e.target.value
          });
        },
        onKeyUp: function onKeyUp(e) {
          return e.keyCode === 13 ? next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(base + 'search?name=' + encodeURI(input)) : null;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: function onClick() {
          return _this2.setState({
            posting: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        close: function close() {
          return _this2.setState({
            posting: false
          });
        },
        open: posting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, user.notifications.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9___default.a, {
        badgeContent: user.notifications.length,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(base + 'profile');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })))));
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])));

/***/ }),

/***/ "./components/PostModal.js":
/*!*********************************!*\
  !*** ./components/PostModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ducks_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ducks/actions */ "./ducks/actions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/components/PostModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createPost: function createPost(user, status, about, aboutType, book_id, callback) {
      return dispatch(Object(_ducks_actions__WEBPACK_IMPORTED_MODULE_11__["createPost"])({
        user_id: user.user_id,
        utoken: user.utoken,
        status: status,
        about: about,
        aboutType: aboutType,
        book_id: book_id
      }, callback));
    },
    error: function error(msg) {
      return dispatch(Object(_ducks_actions__WEBPACK_IMPORTED_MODULE_11__["receiveError"])(msg));
    }
  };
};

var trunc = function trunc(string) {
  return string.length > 22 ? string.substring(0, 22) + '...' : string;
};

var clean = function clean(string) {
  return string.replace(/\s+/g, ' ');
};

var validStatus = function validStatus(status) {
  return status.replace(/\s/g, '').length > 8 && status.replace(/\s/g, '').length < 480;
};

var invalidStatus = function invalidStatus(status) {
  return !validStatus(status);
};

var statusLengthError = 'Status must be longer than 8 characters but no longer than 480';
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(
/*#__PURE__*/
function (_Component) {
  _inherits(_class2, _Component);

  function _class2() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      status: '',
      anchorEl: null,
      about: '',
      aboutType: '',
      book_id: ''
    });

    return _this;
  }

  _createClass(_class2, [{
    key: "post",
    value: function post() {
      var _this2 = this;

      var user = this.props.user;
      var _this$state = this.state,
          uncleanStatus = _this$state.status,
          about = _this$state.about,
          aboutType = _this$state.aboutType,
          book_id = _this$state.book_id;

      if (invalidStatus(uncleanStatus)) {
        return;
      }

      if (about === '') {
        this.props.error('You must select an about topic');
        return;
      }

      if (aboutType === '') {
        this.props.error('You must select an about topic');
        return;
      }

      if (book_id === '') {
        this.props.error('You must select an about topic');
        return;
      }

      var status = clean(uncleanStatus);
      this.props.createPost(user, status, about, aboutType, book_id, function () {
        return _this2.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        status: '',
        anchorEl: null,
        about: '',
        aboutType: '',
        book_id: ''
      });
      this.props.close();
    }
  }, {
    key: "selectItem",
    value: function selectItem(name, aboutType, book_id) {
      this.setState({
        about: name,
        anchorEl: null,
        aboutType: aboutType,
        book_id: book_id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          open = _this$props.open,
          close = _this$props.close,
          user = _this$props.user;
      var _this$state2 = this.state,
          status = _this$state2.status,
          anchorEl = _this$state2.anchorEl,
          about = _this$state2.about;
      var books = user.books;
      var isOpen = open;
      var menuIsOpen = Boolean(anchorEl);
      var aboutEmpty = about === '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
        open: isOpen,
        onClose: function onClose() {
          return close();
        },
        "aria-labelledby": "post-dialog-title",
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "post-dialog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Write about your books or nothing in particular!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "width-100",
        variant: "outlined",
        margin: "dense",
        id: "post",
        label: "Post",
        type: "text",
        onChange: function onChange(e) {
          return _this3.setState({
            status: e.target.value
          });
        },
        value: status,
        required: true,
        autoFocus: true,
        multiline: true,
        rows: 5,
        error: invalidStatus(status),
        helperText: invalidStatus(status) ? statusLengthError : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-space-between align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: function onClick(e) {
          return _this3.setState({
            anchorEl: e.currentTarget
          });
        },
        variant: "text",
        color: aboutEmpty ? 'primary' : 'default',
        "aria-label": "About...",
        "aria-owns": menuIsOpen ? 'long-menu' : null,
        "aria-haspopup": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, aboutEmpty ? 'About...' : 'About'), !aboutEmpty && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
        variant: "subheading",
        color: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, about)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "long-menu",
        anchorEl: anchorEl,
        open: menuIsOpen,
        onClose: function onClose() {
          return _this3.setState({
            anchorEl: null
          });
        },
        PaperProps: {
          style: {
            maxHeight: 250
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: function onClick() {
          return _this3.selectItem('No Book', 'NONE', 'NONE');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "No Book"), books.reading && books.reading.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: function onClick() {
          return _this3.selectItem(books.reading.title, 'READING', books.reading.book_id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, trunc(books.reading.title)), books.have_read.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          onClick: function onClick() {
            return _this3.selectItem(book.title, 'READ', book.book_id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, trunc(book.title));
      }), books.will_read.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          onClick: function onClick() {
            return _this3.selectItem(book.title, 'WILL_READ', book.book_id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, trunc(book.title));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: function onClick() {
          return _this3.close();
        },
        variant: "text",
        color: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: function onClick() {
          return _this3.post();
        },
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Post")));
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])));

/***/ }),

/***/ "./components/search/Tabs.js":
/*!***********************************!*\
  !*** ./components/search/Tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/components/search/Tabs.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var base = '/';

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 'books'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event, value) {
      return _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bookSearch = _this$props.bookSearch,
          userSearch = _this$props.userSearch;
      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        square: true,
        className: "bookshelf-search-tabs-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: value,
        indicatorColor: "primary",
        textColor: "primary",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
        value: "books",
        label: "Books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
        value: "users",
        label: "Users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), value === 'users' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col bookshelf-search-user-results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, userSearch.map(function (_ref) {
        var username = _ref.username,
            profile_picture = _ref.profile_picture;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row align-center bookshelf-search-user-result",
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("".concat(base, "user?name=").concat(username));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
          alt: username,
          src: profile_picture,
          className: "bookshelf-search-user-avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
          variant: "title",
          color: "primary",
          className: "bookshelf-search-user-username",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, username));
      })), value === 'books' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col bookshelf-search-book-results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, bookSearch.map(function (result) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row align-center bookshelf-search-book-result",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.smallThumbnail && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: result.volumeInfo.imageLinks.smallThumbnail,
          className: "bookshelf-search-book-result-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), (!result.volumeInfo.imageLinks || !result.volumeInfo.imageLinks.smallThumbnail) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
          className: "bookshelf-search-book-result-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col bookshelf-search-book-result-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
          variant: "title",
          color: "primary",
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("".concat(base, "book?id=").concat(result.id));
          },
          className: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, result.volumeInfo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
          variant: "body1",
          color: "default",
          className: "black center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, result.volumeInfo.authors ? 'by ' + result.volumeInfo.authors.join(', ') : '')));
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./ducks/actions.js":
/*!**************************!*\
  !*** ./ducks/actions.js ***!
  \**************************/
/*! exports provided: actionTypes, loginUser, signUpUser, logoutUser, receivePosts, receiveFeed, updateUser, updateProfilePhoto, followAUser, unfollowAUser, selectCurrentBook, appendReadBook, deleteReadBook, appendWillReadBook, deleteWillReadBook, createAPost, likeAPost, unlikeAPost, deleteAPost, receiveError, receiveWarning, receiveSuccess, clearStatus, request, createPost, fetchFeed, signup, login, logout, getSignedUrl, receiveMyPosts, updateProfile, updateProfilePicture, followUser, unfollowUser, selectReadingBook, selectReadBook, removeReadBook, selectWillReadBook, removeWillReadBook, likePost, unlikePost, deletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpUser", function() { return signUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receivePosts", function() { return receivePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveFeed", function() { return receiveFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfilePhoto", function() { return updateProfilePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followAUser", function() { return followAUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowAUser", function() { return unfollowAUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentBook", function() { return selectCurrentBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendReadBook", function() { return appendReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReadBook", function() { return deleteReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendWillReadBook", function() { return appendWillReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWillReadBook", function() { return deleteWillReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAPost", function() { return createAPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeAPost", function() { return likeAPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikeAPost", function() { return unlikeAPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAPost", function() { return deleteAPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveError", function() { return receiveError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveWarning", function() { return receiveWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSuccess", function() { return receiveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStatus", function() { return clearStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeed", function() { return fetchFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedUrl", function() { return getSignedUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveMyPosts", function() { return receiveMyPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfilePicture", function() { return updateProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReadingBook", function() { return selectReadingBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReadBook", function() { return selectReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReadBook", function() { return removeReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWillReadBook", function() { return selectWillReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWillReadBook", function() { return removeWillReadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePost", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikePost", function() { return unlikePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/methods */ "./utils/methods.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var actionTypes = {
  LOGIN_USER: 'BOOKSHELF_LOGIN_USER',
  SIGN_UP_USER: 'BOOKSHELF_SIGN_UP_USER',
  LOGOUT_USER: 'BOOKSHELF_LOGOUT_USER',
  RECEIVE_POSTS: 'BOOKSHELF_RECEIVE_POSTS',
  RECEIVE_FEED: 'BOOKSHELF_RECEIVE_FEED',
  UPDATE_USER: 'BOOKSHELF_UPDATE_USER',
  UPDATE_PROFILE_PICTURE: 'BOOKSHELF_UPDATE_PROFILE_PICTURE',
  FOLLOW_USER: 'BOOKSHELF_FOLLOW_USER',
  UNFOLLOW_USER: 'BOOKSHELF_UNFOLLOW_USER',
  SELECT_CURRENT_BOOK: 'BOOKSHELF_SELECT_CURRENT_BOOK',
  APPEND_READ_BOOK: 'BOOKSHELF_APPEND_READ_BOOK',
  DELETE_READ_BOOK: 'BOOKSHELF_DELETE_READ_BOOK',
  APPEND_WILL_READ_BOOK: 'BOOKSHELF_APPEND_WILL_READ_BOOK',
  DELETE_WILL_READ_BOOK: 'BOOKSHELF_DELETE_WILL_READ_BOOK',
  CREATE_POST: 'BOOKSHELF_CREATE_POST',
  LIKE_POST: 'BOOKSHELF_LIKE_POST',
  UNLIKE_POST: 'BOOKSHELF_UNLIKE_POST',
  DELETE_POST: 'BOOKSHELF_DELETE_POST',
  RECEIVE_ERROR: 'BOOKSHELF_RECEIVE_ERROR',
  RECEIVE_WARNING: 'BOOKSHELF_RECEIVE_WARNING',
  RECEIVE_SUCCESS: 'BOOKSHELF_RECEIVE_SUCCESS',
  CLEAR_STATUS: 'BOOKSHELF_CLEAR_STATUS'
};
var loginUser = function loginUser(userInfo) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.LOGIN_USER,
      userInfo: userInfo
    });
  };
};
var signUpUser = function signUpUser(userInfo) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SIGN_UP_USER,
      userInfo: userInfo
    });
  };
};
var logoutUser = function logoutUser() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.LOGOUT_USER
    });
  };
};
var receivePosts = function receivePosts(posts) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RECEIVE_POSTS,
      posts: posts
    });
  };
};
var receiveFeed = function receiveFeed(feed) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RECEIVE_FEED,
      feed: feed
    });
  };
};
var updateUser = function updateUser(user) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.UPDATE_USER,
      user: user
    });
  };
};
var updateProfilePhoto = function updateProfilePhoto(_ref) {
  var url = _ref.url;
  return function (dispatch) {
    return dispatch({
      type: actionTypes.UPDATE_PROFILE_PICTURE,
      url: url
    });
  };
};
var followAUser = function followAUser(_ref2) {
  var user = _ref2.user;
  return function (dispatch) {
    return dispatch({
      type: actionTypes.FOLLOW_USER,
      user: user
    });
  };
};
var unfollowAUser = function unfollowAUser(_ref3) {
  var index = _ref3.index;
  return function (dispatch) {
    return dispatch({
      type: actionTypes.UNFOLLOW_USER,
      index: index
    });
  };
};
var selectCurrentBook = function selectCurrentBook(book) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SELECT_CURRENT_BOOK,
      book: book
    });
  };
};
var appendReadBook = function appendReadBook(book) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.APPEND_READ_BOOK,
      book: book
    });
  };
};
var deleteReadBook = function deleteReadBook(index) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.DELETE_READ_BOOK,
      index: index
    });
  };
};
var appendWillReadBook = function appendWillReadBook(book) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.APPEND_WILL_READ_BOOK,
      book: book
    });
  };
};
var deleteWillReadBook = function deleteWillReadBook(index) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.DELETE_WILL_READ_BOOK,
      index: index
    });
  };
};
var createAPost = function createAPost(post) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.CREATE_POST,
      post: post
    });
  };
};
var likeAPost = function likeAPost(_ref4) {
  var post_id = _ref4.post_id;
  return function (dispatch) {
    return dispatch({
      type: actionTypes.LIKE_POST,
      post_id: post_id
    });
  };
};
var unlikeAPost = function unlikeAPost(_ref5) {
  var post_id = _ref5.post_id;
  return function (dispatch) {
    return dispatch({
      type: actionTypes.UNLIKE_POST,
      post_id: post_id
    });
  };
};
var deleteAPost = function deleteAPost(_ref6) {
  var post_id = _ref6.post_id;
  return function (dispatch) {
    return dispatch({
      type: actionTypes.DELETE_POST,
      post_id: post_id
    });
  };
};
var receiveError = function receiveError(error) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RECEIVE_ERROR,
      error: error
    });
  };
};
var receiveWarning = function receiveWarning(warning) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RECEIVE_WARNING,
      warning: warning
    });
  };
};
var receiveSuccess = function receiveSuccess(success) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RECEIVE_SUCCESS,
      success: success
    });
  };
};
var clearStatus = function clearStatus() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.CLEAR_STATUS
    });
  };
};
var request = function request(dispatch, url, options) {
  var successMsg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var errorMsg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var action = arguments.length > 5 ? arguments[5] : undefined;
  var includeResult = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  var includeDispatch = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  fetch(url, options).then(function (res) {
    if (!res.ok) {
      throw Error(res.statusText);
    }

    return res;
  }).then(function (res) {
    return res.json();
  }).then(function (result) {
    if (result !== null && _typeof(result) === 'object') {
      if (result.errorMsg || result.code) {
        dispatch(receiveError(errorMsg));
        return;
      }

      if (successMsg !== '') {
        dispatch(receiveSuccess(successMsg));
      }

      if (includeResult) {
        if (includeDispatch) {
          dispatch(action(result));
        } else {
          action(result);
        }
      } else {
        dispatch(action());
      }
    } else if (typeof result === 'string') {
      dispatch(receiveError(result));
      throw Error(result);
    } else {
      if (errorMsg != '') {
        dispatch(receiveError(errorMsg));
        throw Error(errorMsg);
      }
    }
  }).catch(function (text) {
    console.log(text);
  });
};
var createPost = function createPost(_ref7, callback) {
  var user_id = _ref7.user_id,
      utoken = _ref7.utoken,
      status = _ref7.status,
      about = _ref7.about,
      aboutType = _ref7.aboutType,
      book_id = _ref7.book_id;
  return function (dispatch) {
    fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/post', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken,
      status: status,
      about: about,
      aboutType: aboutType,
      book_id: book_id
    })).then(function (res) {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res;
    }).then(function (res) {
      return res.json();
    }).then(function (result) {
      if (result !== null && _typeof(result) === 'object') {
        if (result.errorMsg) {
          dispatch(receiveError(errorMsg));
          return;
        }

        dispatch(receiveSuccess('Status posted'));
        dispatch(createAPost(result));
        callback();
      } else if (typeof result === 'string') {
        dispatch(receiveError(result));
        throw Error(result);
      } else {
        dispatch(receiveError('Could not post status'));
        throw Error('Could not post status');
      }
    }).catch(function (text) {
      console.log(text);
    });
  };
};
var fetchFeed = function fetchFeed(_ref8, mPosts, profile_picture) {
  var username = _ref8.username,
      user_id = _ref8.user_id,
      utoken = _ref8.utoken;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response, followingFeed, mposts, feed, res, myPosts, _mposts, _feed;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/following', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
                  username: username,
                  user_id: user_id,
                  utoken: utoken
                }));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                followingFeed = _context.sent;

                if (!(_typeof(followingFeed) === 'object')) {
                  _context.next = 41;
                  break;
                }

                if (!followingFeed.errorMsg) {
                  _context.next = 11;
                  break;
                }

                dispatch(receiveError('Failed to fetch feed'));
                return _context.abrupt("return");

              case 11:
                if (!(mPosts.length > 0)) {
                  _context.next = 16;
                  break;
                }

                mposts = mPosts.map(function (p) {
                  return _objectSpread({}, p, {
                    profile_picture: profile_picture
                  });
                });
                feed = mposts.concat(followingFeed).sort(function (a, b) {
                  return b.date - a.date;
                });
                dispatch(receiveFeed(feed));
                return _context.abrupt("return");

              case 16:
                _context.next = 18;
                return fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/user', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
                  username: username,
                  user_id: user_id,
                  utoken: utoken
                }));

              case 18:
                res = _context.sent;
                _context.next = 21;
                return res.json();

              case 21:
                myPosts = _context.sent;

                if (!(_typeof(myPosts) === 'object')) {
                  _context.next = 32;
                  break;
                }

                if (!myPosts.errorMsg) {
                  _context.next = 26;
                  break;
                }

                dispatch(receiveError('Failed to fetch posts'));
                return _context.abrupt("return");

              case 26:
                _mposts = myPosts.map(function (p) {
                  return _objectSpread({}, p, {
                    profile_picture: profile_picture
                  });
                });
                _feed = _mposts.concat(followingFeed).sort(function (a, b) {
                  return b.date - a.date;
                });
                dispatch(receiveFeed(_feed));
                return _context.abrupt("return");

              case 32:
                if (!(typeof myPosts === 'string')) {
                  _context.next = 37;
                  break;
                }

                dispatch(receiveError(myPosts));
                return _context.abrupt("return");

              case 37:
                dispatch(receiveError('Could not fetch feed'));
                return _context.abrupt("return");

              case 39:
                _context.next = 48;
                break;

              case 41:
                if (!(typeof result === 'string')) {
                  _context.next = 46;
                  break;
                }

                dispatch(receiveError(result));
                throw Error(result);

              case 46:
                dispatch(receiveError('Could not fetch feed'));
                throw Error('Could not fetch feed');

              case 48:
                _context.next = 53;
                break;

              case 50:
                _context.prev = 50;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 53:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 50]]);
      }));

      return function (_x) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};
var signup = function signup(_ref10) {
  var username = _ref10.username,
      password = _ref10.password,
      name = _ref10.name;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/signup', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      username: username,
      password: password,
      name: name
    }), 'Signup success', 'Signup failed', signUpUser, true);
  };
};
var login = function login(_ref11) {
  var username = _ref11.username,
      password = _ref11.password;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/login', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      username: username,
      password: password
    }), 'Login success', 'Login failed', loginUser, true);
  };
};
var logout = function logout(_ref12) {
  var user_id = _ref12.user_id,
      utoken = _ref12.utoken;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/logout', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken
    }), 'Logged out', 'Logout failed', function (_) {
      dispatch(logoutUser());
      localStorage.removeItem('bookshelf-user-state');
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
    }, true, false);
  };
};
var getSignedUrl = function getSignedUrl(_ref13, callback) {
  var user_id = _ref13.user_id,
      utoken = _ref13.utoken,
      filename = _ref13.filename,
      filetype = _ref13.filetype;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/profile-picture-signed-url', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken,
      filename: filename,
      filetype: filetype
    }), 'Uploading image', 'Image upload failed', callback, true, false);
  };
};
var receiveMyPosts = function receiveMyPosts(_ref14) {
  var username = _ref14.username,
      user_id = _ref14.user_id,
      utoken = _ref14.utoken;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/user', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      username: username,
      user_id: user_id,
      utoken: utoken
    }), 'Posts fetched', 'Posts failed to fetch', receivePosts, true);
  };
};
var updateProfile = function updateProfile(_ref15) {
  var user_id = _ref15.user_id,
      utoken = _ref15.utoken,
      name = _ref15.name,
      about = _ref15.about;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/update', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["patch"])({
      user_id: user_id,
      utoken: utoken,
      name: name,
      about: about
    }), 'Profile updated', 'Profile failed to update', updateUser, true);
  };
};
var updateProfilePicture = function updateProfilePicture(_ref16) {
  var user_id = _ref16.user_id,
      utoken = _ref16.utoken,
      profile_picture = _ref16.profile_picture,
      url = _ref16.url;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/profile-picture', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["patch"])({
      user_id: user_id,
      utoken: utoken,
      profile_picture: profile_picture,
      url: url
    }), 'Profile picture updated', 'Profile picture failed to update', updateProfilePhoto, true);
  };
};
var followUser = function followUser(_ref17) {
  var user_id = _ref17.user_id,
      utoken = _ref17.utoken,
      user = _ref17.user;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/follow', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken,
      user: user
    }), 'Followed ' + user, 'Could not follow ' + user, followAUser, true);
  };
};
var unfollowUser = function unfollowUser(_ref18) {
  var user_id = _ref18.user_id,
      utoken = _ref18.utoken,
      user = _ref18.user;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/unfollow', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["patch"])({
      user_id: user_id,
      utoken: utoken,
      user: user
    }), 'Unfollowed ' + user, 'Could not unfollow ' + user, unfollowAUser, true);
  };
};
var selectReadingBook = function selectReadingBook(_ref19) {
  var user_id = _ref19.user_id,
      utoken = _ref19.utoken,
      book = _ref19.book;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/reading', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["patch"])({
      user_id: user_id,
      utoken: utoken,
      book: book
    }), 'Reading book updated', 'Reading book update failed', selectCurrentBook, true);
  };
};
var selectReadBook = function selectReadBook(_ref20) {
  var user_id = _ref20.user_id,
      utoken = _ref20.utoken,
      book = _ref20.book;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/have-read', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken,
      book: book
    }), 'Read book added', 'Read book addition failed', appendReadBook, true);
  };
};
var removeReadBook = function removeReadBook(_ref21) {
  var user_id = _ref21.user_id,
      utoken = _ref21.utoken,
      index = _ref21.index;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/have-read', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["deleteR"])({
      user_id: user_id,
      utoken: utoken,
      index: index
    }), 'Read book deleted', 'Read book deletion failed', deleteReadBook, true);
  };
};
var selectWillReadBook = function selectWillReadBook(_ref22) {
  var user_id = _ref22.user_id,
      utoken = _ref22.utoken,
      book = _ref22.book;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/will-read', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken,
      book: book
    }), "Will read book added", 'Will read book addition failed', appendWillReadBook, true);
  };
};
var removeWillReadBook = function removeWillReadBook(_ref23) {
  var user_id = _ref23.user_id,
      utoken = _ref23.utoken,
      index = _ref23.index;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/will-read', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["deleteR"])({
      user_id: user_id,
      utoken: utoken,
      index: index
    }), 'Will read book deleted', 'Will read book deletion failed', deleteWillReadBook, true);
  };
};
var likePost = function likePost(_ref24) {
  var user_id = _ref24.user_id,
      utoken = _ref24.utoken,
      post_id = _ref24.post_id;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/like', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["post"])({
      user_id: user_id,
      utoken: utoken,
      post_id: post_id
    }), 'Post liked', 'Post like failed', likeAPost, true);
  };
};
var unlikePost = function unlikePost(_ref25) {
  var user_id = _ref25.user_id,
      utoken = _ref25.utoken,
      post_id = _ref25.post_id;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/like', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["deleteR"])({
      user_id: user_id,
      utoken: utoken,
      post_id: post_id
    }), 'Post unliked', 'Post unlike failed', unlikeAPost, true);
  };
};
var deletePost = function deletePost(_ref26) {
  var user_id = _ref26.user_id,
      utoken = _ref26.utoken,
      post_id = _ref26.post_id;
  return function (dispatch) {
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/post', Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["deleteR"])({
      user_id: user_id,
      utoken: utoken,
      post_id: post_id
    }), 'Post deleted', 'Post deletion failed', deleteAPost, true);
  };
};

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/methods */ "./utils/methods.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_search_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/search/Tabs */ "./components/search/Tabs.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/pages/search.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bookResults = _this$props.bookResults,
          userResults = _this$props.userResults;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bookshelf-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_search_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bookSearch: bookResults,
        userSearch: userResults,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, name, booksReq, books, usersReq, users;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                name = query.name;
                _context.next = 4;
                return fetch('https://www.googleapis.com/books/v1/volumes?q=' + name);

              case 4:
                booksReq = _context.sent;
                _context.next = 7;
                return booksReq.json();

              case 7:
                books = _context.sent;
                _context.next = 10;
                return fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/search/' + name, Object(_utils_methods__WEBPACK_IMPORTED_MODULE_3__["get"])());

              case 10:
                usersReq = _context.sent;
                _context.next = 13;
                return usersReq.json();

              case 13:
                users = _context.sent;

                if (!(_typeof(users) === _typeof(' '))) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", {
                  bookResults: books.items,
                  userResults: []
                });

              case 16:
                return _context.abrupt("return", {
                  bookResults: books.items,
                  userResults: users
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme/index.js":
/*!************************!*\
  !*** ./theme/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "@material-ui/core/colors/blue");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/theme/index.js";




var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    default: {
      main: '#000000'
    },
    primary: {
      main: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default.a[800]
    },
    secondary: {
      main: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default.a[700]
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./utils/methods.js":
/*!**************************!*\
  !*** ./utils/methods.js ***!
  \**************************/
/*! exports provided: get, post, patch, deleteR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteR", function() { return deleteR; });
var header = new Headers({
  // 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
});
var get = function get() {
  return {
    method: 'GET',
    headers: header
  };
};
var post = function post(body) {
  return {
    body: JSON.stringify(body),
    method: 'POST',
    headers: header
  };
};
var patch = function patch(body) {
  return {
    body: JSON.stringify(body),
    method: 'PATCH',
    headers: header
  };
};
var deleteR = function deleteR(body) {
  return {
    body: JSON.stringify(body),
    method: 'DELETE',
    headers: header
  };
};

/***/ }),

/***/ 6:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/search.js */"./pages/search.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Book":
/*!******************************************!*\
  !*** external "@material-ui/icons/Book" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Book");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map