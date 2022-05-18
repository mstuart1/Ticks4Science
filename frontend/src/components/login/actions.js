import UserDataService from '../../services/users'
// import jwt from 'jwt-decode'

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
export const LOAD_ACTIVEUSER_SUCESS = 'LOAD_ACTIVEUSER_SUCESS'
export const loadActiveUserSuccess = data => ({
    type: LOAD_ACTIVEUSER_SUCESS,
    payload: { data }
})

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const removeToken = () => ({
    type: REMOVE_TOKEN,
})

export const GET_TOKEN_SUCCESS = `GET_TOKEN_SUCCESS`;
export const getTokenSuccess = token => ({
    type: GET_TOKEN_SUCCESS,
    payload: { token }
})

export const GET_TOKEN_FAIL = `GET_TOKEN_FAIL`;
export const getTokenFail = () => ({
    type: GET_TOKEN_FAIL,
})

export const GETTING_TOKEN = `GETTING_TOKEN`;
export const gettingToken = () => ({
    type: GETTING_TOKEN,
})

export const loadToken = (credentials) => async dispatch => {
    try {
        dispatch(loadingToken());
        let response = await UserDataService.loginUser(credentials);
        console.log(response.data)

        let token = response.data.payload.token
        let data = response.data.payload.profile
        
      


        dispatch(loadTokenSuccess(token));
        dispatch(loadActiveUserSuccess(data))
    } catch (err) {

        dispatch(loadTokenFail());
        switch (err.response.data.code) {

            case 'BAD_USER_NAME_OR_PASSWORD': {
                return dispatch(displayAlert(`Your email or password does not match our records`))
            }
            case 'LOGIN_VALIDATION_ERROR': {
                return dispatch(displayAlert(`Please enter a valid email address or password`))
            }

            case 'LOGIN_LOCKOUT': {
                return dispatch(displayAlert(`You have been locked out of the system.  Please try again later.`))
            }

            case 'FAILED_TO_TALK_TO_DB': {
                return dispatch(displayAlert(`There is currently a problem with the system, please try again later.`))
            }
            default:
                dispatch(displayAlert(JSON.stringify(err.response)));
        }

    }
}

export const forgotPassReq = email => async dispatch => {
    try {
        // dispatch(loadingToken());
        let response 
        // = await LoginDataService.forgot(email);
        if (response.data.code === 'TOKEN_CREATED') {
            dispatch(displayAlert(`You will be receiving an email soon.`));
        } else {
            dispatch(displayAlert(`A reset token has been sent to your email.`));
        }

    } catch (err) {
        console.log(JSON.stringify(err.response))
        dispatch(displayAlert(`There is an error.  Please contact your administrator.`));



    }
}

export const verifyRecovTokenReq = token => async dispatch => {
    try {
        let response 
        // = await LoginDataService.verifyRecoveryToken(token);
        if (response.data.code === 'TOKEN_VALID') {
            return 'success'
        } else {
            console.log(response)
        }
    } catch (err) {
        console.log(JSON.stringify(err.response))

        dispatch(displayAlert(`There is an error.  Please contact your administrator.`));

    }
}

export const useRecovTokenReq = (token, data) => async dispatch => {
    try {
        let response 
        // = await LoginDataService.recovTokenUse(token, data);
        console.log(response.data)
        return 'success'
    } catch (err) {
        console.log(JSON.stringify(err.response))

        dispatch(displayAlert(`There is an error.  Please contact your administrator.`));

    }
}

export const displayAlert = text => () => {
    alert(text);
}