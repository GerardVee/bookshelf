import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { statusReducer } from './reducers/status';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user';

const reducer = combineReducers({ user: userReducer, status: statusReducer });

const loadState = () =>
{
    try
    {
        const state = localStorage.getItem('bookshelf-state');
        if (state === null)
        {
            return undefined;
        }
        return JSON.parse(state);
    }
    catch (e)
    {
        return undefined;
    }
};

export const saveState = (state) =>
{
    try
    {
        const serialized = JSON.stringify(state);
        localStorage.setItem('bookshelf-state', serialized);
    }
    catch (e)
    {
        // do nothing
    }
};

const persistedState = loadState();

export const makeStore = () => process.env.NODE_ENV === 'development' ? createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk))) : createStore(reducer, persistedState, applyMiddleware(thunk));