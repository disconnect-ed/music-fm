import {authAPI} from "../../api/api";
import {setAuthHash, setAuthToken, setAuthUser, setSessionKey} from "../reducers/auth-reducer";

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