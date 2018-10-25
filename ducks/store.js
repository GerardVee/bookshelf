import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/user';
import { statusReducer } from './reducers/status';

const reducer = combineReducers({ user: userReducer, status: statusReducer });

export const makeStore = (initial) => createStore(reducer, initial, composeWithDevTools(applyMiddleware(thunk)));