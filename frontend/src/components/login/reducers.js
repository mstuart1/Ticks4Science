import { LOADING_TOKEN, LOAD_TOKEN_FAIL, LOAD_TOKEN_SUCESS, REMOVE_TOKEN, LOAD_ACTIVEUSER_SUCESS } from "./actions";

const initialState = {
    isLoading: false,
    data: [
        // {permissions: {}}
    ]
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
            return {...state, isLoading: false, data: []}
        }
        default:
            return state;
    }
}


export const activeUser = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case LOAD_ACTIVEUSER_SUCESS: {
            const { data: newData } = payload;
            return { ...state, isLoading: false, data: newData };
        }
        case LOADING_TOKEN: { return { ...state, isLoading: true }; }

        case LOAD_TOKEN_FAIL: { return { ...state, isLoading: false }; }

        case REMOVE_TOKEN: {
            return {...state, isLoading: false, data: []}
        }
        default:
            return state;
    }
}