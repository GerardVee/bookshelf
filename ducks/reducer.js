import { actionTypes } from './actions';

const initialState =
{
    user_id: '',
    username: '',
    name: '',
    utoken: '',
    profile_picture: '',
    feed: [], // populate by fetching /{user}/feed - searches for posts that contain {user_id} in the {owner}'s {followers list}
    followers: [], // list of user_ids like below
    following: [],
    posts: [], // populate by fetching /{user}/posts
    likes: [], // list of the liked posts
    books: // simple book info
    {
        reading:
        {
            book_id: '',
            title: '',
            authors: [],
            book_link: ''
        },
        have_read:
        [   
        ],
        will_read:
        [
        ]
    },
    notifications:
    [
    ],
    messages:
    [
    ]
};

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.RECEIVE_USER_INFO:
            if (action.userInfo.utoken === '')
            {
                localStorage.removeItem('user');
            }
            else
            {
                localStorage.setItem('user', JSON.stringify(Object.assign({}, state, action.userInfo)));
            }
            return Object.assign({}, state, action.userInfo);
        case actionTypes.LOCALSTORAGE_USER_INFO:
            if (state.utoken === '')
            {
                return Object.assign({}, state, action.userInfo);
            }
        default:
            return state;
    }
};