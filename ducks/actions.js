import 'isomorphic-fetch';
import Router from 'next/router';

const header = new Headers({
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
});

export const actionTypes =
{
    RECEIVE_USER_INFO: 'BOOKSHELF_RECEIVE_USER_INFO',
    LOCALSTORAGE_USER_INFO: 'BOOKSHELF_LOCALSTORAGE_USER_INFO',
};

export const receiveUserInfo = (userInfo) => dispatch => dispatch({ type: actionTypes.RECEIVE_USER_INFO, userInfo });
export const localStorageUserInfo = (userInfo) => dispatch => dispatch({ type: actionTypes.LOCALSTORAGE_USER_INFO, userInfo });

export const loadFromLocalStorage = () => dispatch =>
{
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null)
    {
        if (user.utoken === '')
        {
            Router.push('/login');
        }
        dispatch(localStorageUserInfo(user));
    }
    else if (user === null)
    {
        Router.push('/login');
    }
};

export const login = ({ username, password }) => dispatch =>
{
    fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/login-bookshelf-user',
        { body: JSON.stringify({ username, password }), method: 'POST', headers: header })
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(userInfo =>
        {
            if (userInfo !== null && typeof userInfo === 'object')
            {
                dispatch(receiveUserInfo(userInfo));
            }
            else if (typeof userInfo === 'string')
            {
                throw Error(userInfo);
            }
            else
            {
                throw Error('Login failed');
            }
        })
        .catch((text) =>
        {
            console.log(text);
        });
};

export const logout = ({ user_id, utoken }) => dispatch =>
{
    fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/logout-bookshelf-user',
        { body: JSON.stringify({ user_id, utoken }), method: 'POST', headers: header })
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(userInfo =>
        {
            if (userInfo !== null && typeof userInfo === 'object')
            {
                dispatch(receiveUserInfo(userInfo));
            }
            else if (typeof userInfo === 'string')
            {
                throw Error(userInfo);
            }
            else
            {
                throw Error('Logout failed');
            }
        })
        .catch((text) =>
        {
            console.log(text);
        });
};