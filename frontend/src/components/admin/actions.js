import UserDataService from '../../services/users'

export const LOADING_TOKEN = 'LOADING_TOKEN'
export const loadingToken = () => ({
    type: LOADING_TOKEN,
})

export const LOAD_TOKEN_FAIL = 'LOAD_TOKEN_FAIL'
export const loadTokenFail = () => ({
    type: LOAD_TOKEN_FAIL,
})

export const LOAD_TOKEN_SUCESS = 'LOAD_TOKEN_SUCESS'
export const loadTokenSuccess = token => ({
    type: LOAD_TOKEN_SUCESS,
    payload: { token }
})

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
        if (response.data.message === 'token expired') {
            dispatch(loadTokenSuccess('expired'))
        } else {
            let token = response.data.token
            let user = response.data.data
            dispatch(setActiveUser(user))
            dispatch(loadTokenSuccess(token));
        }
    } catch (err) {
        console.log(`!!@@@@---Error---@@@@!! ${err.message}`)
        dispatch(displayAlert('Your username and password do not match the information in our system.', JSON.stringify(err.message)));
    }
}

export const updateUserReq = data => async dispatch => {
    try {
        let response = await UserDataService.updateUser(data);
        console.log(response)
        // let user = response.data.data
        // dispatch(setActiveUser(user))
    } catch (err) {
        console.log(`!!@@@---Error---@@@!! ${err.message}`)
        dispatch(displayAlert('There has been an error attempting to update your user profile', JSON.stringify(err.message)))
    }
}

export const displayAlert = text => () => {
    alert(text);
}
