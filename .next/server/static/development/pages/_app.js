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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Snackbar.js":
/*!********************************!*\
  !*** ./components/Snackbar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Error */ "@material-ui/icons/Error");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Warning */ "@material-ui/icons/Warning");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "@material-ui/icons/CheckCircle");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ducks_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ducks/actions */ "./ducks/actions.js");
var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/components/Snackbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var mapStateToProps = function mapStateToProps(state) {
  return {
    status: state.status
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    clearStatus: function clearStatus() {
      return dispatch(Object(_ducks_actions__WEBPACK_IMPORTED_MODULE_10__["clearStatus"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(
/*#__PURE__*/
function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "handleClose",
    value: function handleClose() {
      this.props.clearStatus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var status = this.props.status;
      var type = status.type,
          message = status.message;
      var open = type !== '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        open: open,
        autoHideDuration: 2500,
        onClose: function onClose() {
          return _this.handleClose();
        },
        disableWindowBlurListener: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: type === 'ERR' ? 'bookshelf-error-snackbar' : type === 'SUC' ? 'bookshelf-success-snackbar' : type === 'WAR' ? 'bookshelf-warning-snackbar' : '',
        "aria-describedby": "client-snackbar",
        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          id: "client-snackbar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, type === 'ERR' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "bookshelf-snackbar-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), type === 'SUC' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
          className: "bookshelf-snackbar-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), type === 'WAR' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: "bookshelf-snackbar-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }), message),
        action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          onClick: function onClick(e, r) {
            return _this.handleClose();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }))],
        TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }
  }]);

  return _class;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])));

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

/***/ "./ducks/reducers/status.js":
/*!**********************************!*\
  !*** ./ducks/reducers/status.js ***!
  \**********************************/
/*! exports provided: statusReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusReducer", function() { return statusReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./ducks/actions.js");

var initialState = {
  type: '',
  message: ''
};
var statusReducer = function statusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RECEIVE_ERROR:
      return Object.assign({}, state, {
        message: action.error,
        type: 'ERR'
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RECEIVE_WARNING:
      return Object.assign({}, state, {
        message: action.warning,
        type: 'WAR'
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RECEIVE_SUCCESS:
      return Object.assign({}, state, {
        message: action.success,
        type: 'SUC'
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CLEAR_STATUS:
      return Object.assign({}, state, {
        message: '',
        type: ''
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ducks/reducers/user.js":
/*!********************************!*\
  !*** ./ducks/reducers/user.js ***!
  \********************************/
/*! exports provided: initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./ducks/actions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  user_id: '',
  username: '',
  about: '',
  name: '',
  utoken: '',
  profile_picture: '',
  feed: [],
  // populate by fetching /{user}/feed, client only, searches for posts that contain {user_id} in the {owner}'s {followers list}
  followers: [],
  // list of usernames like below
  following: [],
  posts: [],
  // populate by fetching /{user}/posts, client only
  likes: [],
  // (for feed) list of the liked posts/comments, client only, fetched and updated when convenient, and only to those affect items
  books: {
    reading: {
      book_id: '',
      image_link: '',
      title: '',
      authors: [],
      book_link: ''
    },
    have_read: [],
    will_read: []
  },
  notifications: []
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_USER:
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SIGN_UP_USER:
      if (action.userInfo.books.reading) {
        return _objectSpread({}, state, action.userInfo, {
          books: _objectSpread({}, state.books, {
            reading: _objectSpread({}, state.books.reading, action.userInfo.books.reading),
            will_read: _toConsumableArray(state.books.will_read).concat(_toConsumableArray(action.userInfo.books.will_read)),
            have_read: _toConsumableArray(state.books.have_read).concat(_toConsumableArray(action.userInfo.books.have_read))
          })
        });
      } else {
        return _objectSpread({}, state, action.userInfo, {
          books: _objectSpread({}, state.books, {
            reading: _objectSpread({}, state.books.reading),
            will_read: _toConsumableArray(state.books.will_read).concat(_toConsumableArray(action.userInfo.books.will_read)),
            have_read: _toConsumableArray(state.books.have_read).concat(_toConsumableArray(action.userInfo.books.have_read))
          })
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGOUT_USER:
      localStorage.removeItem('bookshelf-state');
      return Object.assign({}, initialState);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RECEIVE_POSTS:
      return Object.assign({}, state, {
        posts: action.posts
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RECEIVE_FEED:
      return Object.assign({}, state, {
        feed: action.feed
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_USER:
      return Object.assign({}, state, action.user);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_PROFILE_PICTURE:
      return Object.assign({}, state, {
        profile_picture: action.url
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FOLLOW_USER:
      return Object.assign({}, state, {
        following: _toConsumableArray(state.following).concat([action.user])
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UNFOLLOW_USER:
      return Object.assign({}, state, {
        following: _toConsumableArray(state.following.filter(function (_, index) {
          return index !== action.index;
        }))
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SELECT_CURRENT_BOOK:
      return Object.assign({}, state, {
        books: _objectSpread({}, state.books, {
          reading: _objectSpread({}, state.books.reading, action.book)
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].APPEND_READ_BOOK:
      return Object.assign({}, state, {
        books: _objectSpread({}, state.books, {
          have_read: _toConsumableArray(state.books.have_read).concat([action.book])
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].DELETE_READ_BOOK:
      return Object.assign({}, state, {
        books: _objectSpread({}, state.books, {
          have_read: _toConsumableArray(state.books.have_read.filter(function (_, index) {
            return index !== Number(action.index.index);
          }))
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].APPEND_WILL_READ_BOOK:
      return Object.assign({}, state, {
        books: _objectSpread({}, state.books, {
          will_read: _toConsumableArray(state.books.will_read).concat([action.book])
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].DELETE_WILL_READ_BOOK:
      return Object.assign({}, state, {
        books: _objectSpread({}, state.books, {
          will_read: _toConsumableArray(state.books.will_read.filter(function (_, index) {
            return index !== Number(action.index.index);
          }))
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CREATE_POST:
      return Object.assign({}, state, {
        posts: [action.post].concat(_toConsumableArray(state.posts))
      });
    //case actionTypes.LIKE_POST:
    //    return Object.assign({}, state, { posts: state.posts.map(p => p.post_id === action.post_id ? { ...p, liked: true } : p) });
    //case actionTypes.UNLIKE_POST:
    //    return Object.assign({}, state, { posts: state.posts.map(p => p.post_id === action.post_id ? { ...p, liked: false } : p) });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].DELETE_POST:
      return Object.assign({}, state, {
        posts: state.posts.filter(function (p) {
          return p.post_id !== action.post_id;
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ducks/store.js":
/*!************************!*\
  !*** ./ducks/store.js ***!
  \************************/
/*! exports provided: saveState, makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/user */ "./ducks/reducers/user.js");
/* harmony import */ var _reducers_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/status */ "./ducks/reducers/status.js");





var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["userReducer"],
  status: _reducers_status__WEBPACK_IMPORTED_MODULE_4__["statusReducer"]
});

var loadState = function loadState() {
  try {
    var state = localStorage.getItem('bookshelf-state');

    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
};

var saveState = function saveState(state) {
  try {
    var serialized = JSON.stringify(state);
    localStorage.setItem('bookshelf-state', serialized);
  } catch (e) {}
};
var persistedState = loadState();
var makeStore = function makeStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, persistedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/throttle */ "lodash/throttle");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ducks_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ducks/store */ "./ducks/store.js");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Snackbar */ "./components/Snackbar.js");

var _jsxFileName = "/mnt/c/Users/ILove/Desktop/projects/bookshelf/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          store = _this$props.store,
          path = _this$props.path;

      if (store.getState().user.utoken === '' && path !== '/login') {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/' + 'login');
      }

      store.subscribe(lodash_throttle__WEBPACK_IMPORTED_MODULE_6___default()(function () {
        Object(_ducks_store__WEBPACK_IMPORTED_MODULE_7__["saveState"])(store.getState());
      }, 1000));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          pageProps = _this$props2.pageProps,
          store = _this$props2.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Snackbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  path: ctx.asPath
                });

              case 10:
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

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(_ducks_store__WEBPACK_IMPORTED_MODULE_7__["makeStore"])(MyApp));

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

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Error":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Error" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ "@material-ui/icons/Warning":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Warning" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map