import { actionTypes } from '../actions';

export const initialState =
{
    user_id: '',
    username: '',
    about: '',
    name: '',
    utoken: '',
    profile_picture: '',
    feed: [], // populate by fetching /{user}/feed, client only, searches for posts that contain {user_id} in the {owner}'s {followers list}
    followers: [], // list of usernames like below
    following: [],
    posts: [], // populate by fetching /{user}/posts, client only
    likes: [], // (for feed) list of the liked posts/comments, client only, fetched and updated when convenient, and only to those affect items
    books:
    {
        reading:
        {
            book_id: '',
            image_link: '',
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
};

export const userReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.LOGIN_USER:
        case actionTypes.SIGN_UP_USER:
            if (action.userInfo.books.reading)
            {
                return { ...state, ...action.userInfo, books: { ...state.books,
                    reading: { ...state.books.reading, ...action.userInfo.books.reading },
                    will_read: [ ...state.books.will_read, ...action.userInfo.books.will_read ],
                    have_read: [  ...state.books.have_read, ...action.userInfo.books.have_read ]
                    } };
            }
            else
            {
                return { ...state, ...action.userInfo, books: { ...state.books,
                    reading: { ...state.books.reading },
                    will_read: [ ...state.books.will_read, ...action.userInfo.books.will_read ],
                    have_read: [  ...state.books.have_read, ...action.userInfo.books.have_read ]
                    } };
            }
        case actionTypes.LOGOUT_USER:
            localStorage.removeItem('bookshelf-state');
            return Object.assign({}, initialState);
        case actionTypes.RECEIVE_POSTS:
            return Object.assign({}, state, { posts: action.posts });
        case actionTypes.RECEIVE_FEED:
            return Object.assign({}, state, { feed: action.feed });
        case actionTypes.UPDATE_USER:
            return Object.assign({}, state, action.user);
        case actionTypes.UPDATE_PROFILE_PICTURE:
            return Object.assign({}, state, { profile_picture: action.url });
        case actionTypes.FOLLOW_USER:
            return Object.assign({}, state, { following: [ ...state.following, action.user ] });
        case actionTypes.UNFOLLOW_USER:
            return Object.assign({}, state, { following: [ ...state.following.filter((_, index) => index !== action.index) ] });
        case actionTypes.SELECT_CURRENT_BOOK:
            return Object.assign({}, state, { books: { ...state.books, reading: { ...state.books.reading, ...action.book } } });
        case actionTypes.APPEND_READ_BOOK:
            return Object.assign({}, state, { books: { ...state.books, have_read: [ ...state.books.have_read, action.book ] } });
        case actionTypes.DELETE_READ_BOOK:
            return Object.assign({}, state, { books: { ...state.books, have_read: [ ...state.books.have_read.filter((_, index) => index !== Number(action.index.index)) ] } });
        case actionTypes.APPEND_WILL_READ_BOOK:
            return Object.assign({}, state, { books: { ...state.books, will_read: [ ...state.books.will_read, action.book ] } });
        case actionTypes.DELETE_WILL_READ_BOOK:
            return Object.assign({}, state, { books: { ...state.books, will_read: [ ...state.books.will_read.filter((_, index) => index !== Number(action.index.index)) ] } });
        case actionTypes.CREATE_POST:
            return Object.assign({}, state, { posts: [ action.post, ...state.posts ] });
        //case actionTypes.LIKE_POST:
        //    return Object.assign({}, state, { posts: state.posts.map(p => p.post_id === action.post_id ? { ...p, liked: true } : p) });
        //case actionTypes.UNLIKE_POST:
        //    return Object.assign({}, state, { posts: state.posts.map(p => p.post_id === action.post_id ? { ...p, liked: false } : p) });
        case actionTypes.DELETE_POST:
            return Object.assign({}, state, { posts: state.posts.filter(p => p.post_id !== action.post_id) })
        default:
            return state;
    }
};