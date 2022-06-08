export const CREATE_TOKEN = 'CREATE_TOKEN';

export const createToken = token => ({
    type: CREATE_TOKEN,
    payload: {token}
});

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const removeToken = token => ({
    type: REMOVE_TOKEN,
    payload: {token}
})