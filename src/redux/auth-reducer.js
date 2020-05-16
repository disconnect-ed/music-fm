import {authAPI} from "../api/api";

const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
const SET_AUTH_HASH = 'SET_AUTH_HASH';
const SET_SESSION_KEY = 'SET_SESSION_KEY';
const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState = {
    apiKey: 'a1976dd334d85d2a880225cfe49e652c',
    apiSecret: 'c2910cf3a1ac8c17f699c16657bb4efe',
    authHash: null,
    authToken: null,
    sessionKey: null,
    authUser: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_HASH:
            return {
                ...state,
                authHash: action.authHash
            }
        case SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.authToken
            }
        case SET_SESSION_KEY:
            return {
                ...state,
                sessionKey: action.sessionKey
            }
        case SET_AUTH_USER:
            return {
                ...state,
                authUser: action.authUser
            }
        default:
            return state
    }
}

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


export default authReducer;