import {authAPI} from "../../api/api";
import {SET_AUTH_HASH, SET_AUTH_TOKEN, SET_AUTH_USER, SET_SESSION_KEY} from "../reducers/auth-reducer";

export const setAuthHash = (authHash) => ({type: SET_AUTH_HASH, authHash});
export const setAuthToken = (authToken) => ({type: SET_AUTH_TOKEN, authToken});
export const setSessionKey = (sessionKey) => ({type: SET_SESSION_KEY, sessionKey});
export const setAuthUser = (authUser) => ({type: SET_AUTH_USER, authUser});

export const getAuthHash = (authHash) => {
    return (dispatch) => {
        dispatch(setAuthHash(authHash))
    }
}

export const getAuthToken = (authToken) => {
    return (dispatch) => {
        dispatch(setAuthToken(authToken))
    }
}

export const getSessionData = (authToken, authHash) => {
    return (dispatch) => {
        authAPI.getSession(authToken, authHash).then(response => {
            dispatch(setSessionKey(response.data.session.key));
            dispatch(setAuthUser(response.data.session.name));
            localStorage.setItem('musicFmKey', response.data.session.key);
            localStorage.setItem('musicFmUser', response.data.session.name);
        })
    }
}

export const getAuthUser = (authUser) => {
    return (dispatch) => {
        dispatch(setAuthUser(authUser));
    }
}

export const logout = () => {
    return(dispatch) => {
        localStorage.removeItem('musicFmKey');
        localStorage.removeItem('musicFmUser');
        dispatch(setAuthHash(null))
        dispatch(setAuthToken(null))
        dispatch(setSessionKey(null))
        dispatch(setAuthUser(null))
    }
}