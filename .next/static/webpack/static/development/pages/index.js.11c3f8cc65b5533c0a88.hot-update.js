webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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

/***/ })

})
//# sourceMappingURL=index.js.11c3f8cc65b5533c0a88.hot-update.js.map