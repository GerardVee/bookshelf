import 'isomorphic-fetch';
import Router from 'next/router';

import { post, patch, deleteR, get } from '../utils/methods';

export const actionTypes =
{
    UPDATE_LOCALSTORAGE_USER_INFO: 'BOOKSHELF_UPDATE_LOCALSTORAGE_USER_INFO',
    RECEIVE_LOCALSTORAGE_USER_INFO: 'BOOKSHELF_RECEIVE_LOCALSTORAGE_USER_INFO',
    LOGIN_USER: 'BOOKSHELF_LOGIN_USER',
    SIGN_UP_USER: 'BOOKSHELF_SIGN_UP_USER',
    LOGOUT_USER: 'BOOKSHELF_LOGOUT_USER',
    UPDATE_USER: 'BOOKSHELF_UPDATE_USER',
    UPDATE_PROFILE_PICTURE: 'BOOKSHELF_UPDATE_PROFILE_PICTURE',
    FOLLOW_USER: 'BOOKSHELF_FOLLOW_USER',
    UNFOLLOW_USER: 'BOOKSHELF_UNFOLLOW_USER',
    SELECT_CURRENT_BOOK: 'BOOKSHELF_SELECT_CURRENT_BOOK',
    APPEND_READ_BOOK: 'BOOKSHELF_APPEND_READ_BOOK',
    DELETE_READ_BOOK: 'BOOKSHELF_DELETE_READ_BOOK',
    APPEND_WILL_READ_BOOK: 'BOOKSHELF_APPEND_WILL_READ_BOOK',
    DELETE_WILL_READ_BOOK: 'BOOKSHELF_DELETE_WILL_READ_BOOK',
    RECEIVE_ERROR: 'BOOKSHELF_RECEIVE_ERROR',
    RECEIVE_WARNING: 'BOOKSHELF_RECEIVE_WARNING',
    RECEIVE_SUCCESS: 'BOOKSHELF_RECEIVE_SUCCESS',
    CLEAR_STATUS: 'BOOKSHELF_CLEAR_STATUS',
};

export const updateLocalStorageUserInfo = () => dispatch => dispatch({ type: actionTypes.UPDATE_LOCALSTORAGE_USER_INFO });
export const receiveLocalStorageUserInfo = (userInfo) => dispatch => dispatch({ type: actionTypes.RECEIVE_LOCALSTORAGE_USER_INFO, userInfo });
export const loginUser = (userInfo) => dispatch => dispatch({ type: actionTypes.LOGIN_USER, userInfo });
export const signUpUser = (userInfo) => dispatch => dispatch({ type: actionTypes.SIGN_UP_USER, userInfo });
export const logoutUser = () => dispatch => dispatch({ type: actionTypes.LOGOUT_USER });
export const updateUser = (user) => dispatch => dispatch({ type: actionTypes.UPDATE_USER, user });
export const updateProfilePhoto = ({ url }) => dispatch => dispatch({ type: actionTypes.UPDATE_PROFILE_PICTURE, url });
export const followAUser = ({ user }) => dispatch => dispatch({ type: actionTypes.FOLLOW_USER, user })
export const unfollowAUser = ({ index }) => dispatch => dispatch({ type: actionTypes.UNFOLLOW_USER, index })
export const selectCurrentBook = (book) => dispatch => dispatch({ type: actionTypes.SELECT_CURRENT_BOOK, book });
export const appendReadBook = (book) => dispatch => dispatch({ type: actionTypes.APPEND_READ_BOOK, book });
export const deleteReadBook = (index) => dispatch => dispatch({ type: actionTypes.DELETE_READ_BOOK, index });
export const appendWillReadBook = (book) => dispatch => dispatch({ type: actionTypes.APPEND_WILL_READ_BOOK, book });
export const deleteWillReadBook = (index) => dispatch => dispatch({ type: actionTypes.DELETE_WILL_READ_BOOK, index });
export const receiveError = (error) => dispatch => dispatch({ type: actionTypes.RECEIVE_ERROR, error });
export const receiveWarning = (warning) => dispatch => dispatch({ type: actionTypes.RECEIVE_WARNING, warning });
export const receiveSuccess = (success) => dispatch => dispatch({ type: actionTypes.RECEIVE_SUCCESS, success });
export const clearStatus = () => dispatch => dispatch({ type: actionTypes.CLEAR_STATUS });

export const loadFromLocalStorage = () => dispatch =>
{
    const user = JSON.parse(localStorage.getItem('bookshelf_user'));
    if (user !== null)
    {
        if (user.utoken === '')
        {
            Router.push('/login');
        }
        dispatch(receiveLocalStorageUserInfo(user));
    }
    else if (user === null)
    {
        Router.push('/login');
    }
};

export const request = (dispatch, url, options, successMsg = '', errorMsg = '', action, includeResult = true, includeDispatch = true) =>
{
    fetch(url, options).
        then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(result =>
        {
            if (result !== null && typeof result === 'object')
            {
                if (result.errorMsg)
                {
                    dispatch(receiveError(errorMsg));
                    return;
                }
                if (successMsg !== '')
                {
                    dispatch(receiveSuccess(successMsg));
                }
                if (includeResult)
                {
                    if (includeDispatch)
                    {
                        dispatch(action(result));
                    }
                    else
                    {
                        action(result);
                    }
                }
                else
                {
                    dispatch(action());
                }
                dispatch(updateLocalStorageUserInfo());
            }
            else if (typeof result === 'string')
            {
                dispatch(receiveError(result));
                throw Error(result);
            }
            else
            {
                if (errorMsg != '')
                {
                    dispatch(receiveError(errorMsg));
                    throw Error(errorMsg);
                }
            }
        })
        .catch((text) =>
        {
            console.log(text);
        });
};

export const signup = ({ username, password, name }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/signup', post({ username, password, name }),
        'Signup success', 'Signup failed', signUpUser, true);
};

export const login = ({ username, password }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/login', post({ username, password }),
        'Login success', 'Login failed', loginUser, true);
};

export const logout = ({ user_id, utoken }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/logout', post({ user_id, utoken }),
        'Logged out', 'Logout failed', (_) =>
        {
            dispatch(logoutUser());
            localStorage.removeItem('bookshelf_user');
            Router.push('/login');
        }, true, false);
};

export const getSignedUrl = ({ user_id, utoken, filename, filetype }, callback) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/profile-picture-signed-url', post({ user_id, utoken, filename, filetype }),
        'Uploading image', 'Image upload failed', callback, true, false);
}

export const updateProfile = ({ user_id, utoken, name, about }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/update', patch({ user_id, utoken, name, about }),
        'Profile updated', 'Profile failed to update', updateUser, true);
};

export const updateProfilePicture = ({ user_id, utoken, profile_picture, url }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/profile-picture', patch({ user_id, utoken, profile_picture, url }),
        'Profile picture update', 'Profile picture failed to update', updateProfilePhoto, true);
};

export const followUser = ({ user_id, utoken, user }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/follow', post({ user_id, utoken, user }),
        'Followed ' + user, 'Could not follow ' + user, followAUser, true);
};

export const unfollowUser = ({ user_id, utoken, user }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/unfollow', patch({ user_id, utoken, user }),
        'Unfollowed ' + user, 'Could not unfollow ' + user, unfollowAUser, true);
}

export const selectReadingBook = ({ user_id, utoken, book }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/reading', patch({ user_id, utoken, book }),
        'Reading book updated', 'Reading book update failed', selectCurrentBook, true);
};

export const selectReadBook = ({ user_id, utoken, book }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/have-read', post({ user_id, utoken, book }),
        'Read book added', 'Read book addition failed', appendReadBook, true);
};

export const removeReadBook = ({ user_id, utoken, index }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/have-read', deleteR({ user_id, utoken, index }),
        'Read book deleted', 'Read book deletion failed', deleteReadBook, true);
};

export const selectWillReadBook = ({ user_id, utoken, book }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/will-read', post({ user_id, utoken, book }),
        `Will read book added`, 'Will read book addition failed', appendWillReadBook, true);
};

export const removeWillReadBook = ({ user_id, utoken, index }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/book/will-read', deleteR({ user_id, utoken, index }),
        'Will read book deleted', 'Will read book deletion failed', deleteWillReadBook, true);
};