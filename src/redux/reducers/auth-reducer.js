
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

export default authReducer;