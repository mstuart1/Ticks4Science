import UserDataService from '../../services/users'


export const CREATE_TOKEN = 'CREATE_TOKEN';

export const createToken = token => ({
    type: CREATE_TOKEN,
    payload: { token }
});

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const removeToken = () => ({
    type: REMOVE_TOKEN
})

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const setActiveUser = user => ({
    type: SET_ACTIVE_USER,
    payload: { user }
})

export const loadToken = credentials => async dispatch => {
    try {

        let response = await UserDataService.loginUser(credentials);

        let token = response.data.token
        let user = response.data.data
        dispatch(setActiveUser(user))
        dispatch(createToken(token));

    } catch (err) {
        console.log(`!!@@@@---Error---@@@@!! ${err.message}`)
        dispatch(displayAlert(JSON.stringify(err.response)));
    }
}

export const displayAlert = text => () => {
    alert(text);
}
