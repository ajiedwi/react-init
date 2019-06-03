import * as ACTION from './action'

const userData = {
    username: '',
    password: ''
}

export const userReducer = (state = userData, action) => {
    switch(action.type) {
        case ACTION.LOGIN:
        return {
            ...state,
            username: action.payload.username,
            password: action.payload.password
        };
        default:
        return state;
    }
}