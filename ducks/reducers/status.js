import { actionTypes } from '../actions';

const initialState =
{
    type: '',
    message: ''
};

export const statusReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
    case actionTypes.RECEIVE_ERROR:
        return Object.assign({}, state, { message: action.error, type: 'ERR' });
    case actionTypes.RECEIVE_WARNING:
        return Object.assign({}, state, { message: action.warning, type: 'WAR' });
    case actionTypes.RECEIVE_SUCCESS:
        return Object.assign({}, state, { message: action.success, type: 'SUC' });
    case actionTypes.CLEAR_STATUS:
        return Object.assign({}, state, { message: '', type: '' });
    default:
        return state;
    }
};