import { LOADING_TOKEN, LOAD_TOKEN_FAIL, LOAD_TOKEN_SUCESS, REMOVE_TOKEN, SET_ACTIVE_USER } from "./actions"

const initialState = {
    isLoading: false,
    data: ''
}

export const token = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case LOAD_TOKEN_SUCESS: {
            const { token: newToken } = payload;
            return { ...state, isLoading: false, data: newToken };
        }
        case LOADING_TOKEN: { return { ...state, isLoading: true }; }

        case LOAD_TOKEN_FAIL: { return { ...state, isLoading: false }; }

        case REMOVE_TOKEN: {
            return {...state, isLoading: false, data: ''}
        }
        default:
            return state;
    }
}

export const user = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_ACTIVE_USER: {
            const {user} = payload;
            return user;
        }
        default: 
        return state;
    }
}