import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/user';
import { statusReducer } from './reducers/status';

const reducer = combineReducers({ user: userReducer, status: statusReducer });

const loadState = () => {
    try
    {
        const state = localStorage.getItem('bookshelf-state');
        if (state === null)
        {
            return undefined;
        }
        return JSON.parse(state);
    } catch (e)
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
    } catch (e)
    {
    }
};

const persistedState = loadState();

export const makeStore = () => createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));