import 'isomorphic-fetch';
import Router from 'next/router';

import { post, patch, deleteR, get } from '../utils/methods';

export const actionTypes =
{
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
    CLEAR_STATUS: 'BOOKSHELF_CLEAR_STATUS',
};

export const loginUser = (userInfo) => dispatch => dispatch({ type: actionTypes.LOGIN_USER, userInfo });
export const signUpUser = (userInfo) => dispatch => dispatch({ type: actionTypes.SIGN_UP_USER, userInfo });
export const logoutUser = () => dispatch => dispatch({ type: actionTypes.LOGOUT_USER });
export const receivePosts = (posts) => dispatch => dispatch({ type: actionTypes.RECEIVE_POSTS, posts });
export const receiveFeed = (feed) => dispatch => dispatch({ type: actionTypes.RECEIVE_FEED, feed });
export const updateUser = (user) => dispatch => dispatch({ type: actionTypes.UPDATE_USER, user });
export const updateProfilePhoto = ({ url }) => dispatch => dispatch({ type: actionTypes.UPDATE_PROFILE_PICTURE, url });
export const followAUser = ({ user }) => dispatch => dispatch({ type: actionTypes.FOLLOW_USER, user })
export const unfollowAUser = ({ index }) => dispatch => dispatch({ type: actionTypes.UNFOLLOW_USER, index })
export const selectCurrentBook = (book) => dispatch => dispatch({ type: actionTypes.SELECT_CURRENT_BOOK, book });
export const appendReadBook = (book) => dispatch => dispatch({ type: actionTypes.APPEND_READ_BOOK, book });
export const deleteReadBook = (index) => dispatch => dispatch({ type: actionTypes.DELETE_READ_BOOK, index });
export const appendWillReadBook = (book) => dispatch => dispatch({ type: actionTypes.APPEND_WILL_READ_BOOK, book });
export const deleteWillReadBook = (index) => dispatch => dispatch({ type: actionTypes.DELETE_WILL_READ_BOOK, index });
export const createAPost = (post) => dispatch => dispatch({ type: actionTypes.CREATE_POST, post });
export const likeAPost = ({ post_id }) => dispatch => dispatch({ type: actionTypes.LIKE_POST, post_id });
export const unlikeAPost = ({ post_id }) => dispatch => dispatch({ type: actionTypes.UNLIKE_POST, post_id });
export const deleteAPost = ({ post_id }) => dispatch => dispatch({ type: actionTypes.DELETE_POST, post_id });
export const receiveError = (error) => dispatch => dispatch({ type: actionTypes.RECEIVE_ERROR, error });
export const receiveWarning = (warning) => dispatch => dispatch({ type: actionTypes.RECEIVE_WARNING, warning });
export const receiveSuccess = (success) => dispatch => dispatch({ type: actionTypes.RECEIVE_SUCCESS, success });
export const clearStatus = () => dispatch => dispatch({ type: actionTypes.CLEAR_STATUS });

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
                if (result.errorMsg || result.code)
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

export const createPost = ({ user_id, utoken, status, about, aboutType, book_id }, callback) => dispatch =>
{
    fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/post', post({ user_id, utoken, status, about, aboutType, book_id })).
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
                dispatch(receiveSuccess('Status posted'));
                dispatch(createAPost(result));
                callback();
            }
            else if (typeof result === 'string')
            {
                dispatch(receiveError(result));
                throw Error(result);
            }
            else
            {
                dispatch(receiveError('Could not post status'));
                throw Error('Could not post status');
            }
        })
        .catch((text) =>
        {
            console.log(text);
        });
};

export const fetchFeed = ({ username, user_id, utoken }, mPosts, profile_picture) => async dispatch =>
{
    try
    {
        const response = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/following', post({ username, user_id, utoken }));
        const followingFeed = await response.json();
        if (typeof followingFeed === 'object')
        {
            if (followingFeed.errorMsg)
            {
                dispatch(receiveError('Failed to fetch feed'));
                return;
            }
            if (mPosts.length > 0)
            {
                const mposts = mPosts.map(p => ({ ...p, profile_picture }));
                const feed = mposts.concat(followingFeed).sort((a, b) => b.date - a.date);
                dispatch(receiveFeed(feed));
                return;
            }
            const res = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/user', post({ username, user_id, utoken }))
            const myPosts = await res.json();
            if (typeof myPosts === 'object')
            {
                if (myPosts.errorMsg)
                {
                    dispatch(receiveError('Failed to fetch posts'));
                    return;
                }
                const mposts = myPosts.map(p => ({ ...p, profile_picture }));
                const feed = mposts.concat(followingFeed).sort((a, b) => b.date - a.date);
                dispatch(receiveFeed(feed));
                return;
            }
            else if (typeof myPosts === 'string')
            {
                dispatch(receiveError(myPosts));
                return;
            }
            else
            {
                dispatch(receiveError('Could not fetch feed'));
                return;
            }
        }
        else if (typeof result === 'string')
        {
            dispatch(receiveError(result));
            throw Error(result);
        }
        else
        {
            dispatch(receiveError('Could not fetch feed'));
            throw Error('Could not fetch feed');
        }
    } catch (e)
    {
        console.log(e);
    }
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
            localStorage.removeItem('bookshelf-user-state');
            Router.push('/login');
        }, true, false);
};

export const getSignedUrl = ({ user_id, utoken, filename, filetype }, callback) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/profile-picture-signed-url', post({ user_id, utoken, filename, filetype }),
        'Uploading image', 'Image upload failed', callback, true, false);
}

export const receiveMyPosts = ({ username, user_id, utoken }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/user', post({ username, user_id, utoken }),
        'Posts fetched', 'Posts failed to fetch', receivePosts, true);
};

export const updateProfile = ({ user_id, utoken, name, about }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/update', patch({ user_id, utoken, name, about }),
        'Profile updated', 'Profile failed to update', updateUser, true);
};

export const updateProfilePicture = ({ user_id, utoken, profile_picture, url }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/profile-picture', patch({ user_id, utoken, profile_picture, url }),
        'Profile picture updated', 'Profile picture failed to update', updateProfilePhoto, true);
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
};

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

export const likePost = ({ user_id, utoken, post_id }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/like', post({ user_id, utoken, post_id }),
        'Post liked', 'Post like failed', likeAPost, true);
};

export const unlikePost = ({ user_id, utoken, post_id }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/like', deleteR({ user_id, utoken, post_id }),
        'Post unliked', 'Post unlike failed', unlikeAPost, true);
};

export const deletePost = ({ user_id, utoken, post_id }) => dispatch =>
{
    request(dispatch, 'https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/post', deleteR({ user_id, utoken, post_id }),
        'Post deleted', 'Post deletion failed', deleteAPost, true);
};