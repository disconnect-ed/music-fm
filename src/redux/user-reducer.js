import {userAPI} from "../api/api";

const SET_AUTH_USER_NAME = 'SET_AUTH_USER_NAME';
const SET_USER_KEY = 'SET_USER_KEY';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_LOVED_TRACKS = 'SET_LOVED_TRACKS';
const SET_USER_TOP_ARTISTS = 'SET_USER_TOP_ARTISTS';
const SET_USER_TOP_ALBUMS = 'SET_USER_TOP_ALBUMS';
const SET_USER_FRIENDS = 'SET_USER_FRIENDS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    authUserName: null,
    currentUser: null,
    userKey: null,
    userInfo: null,
    lovedTracks: null,
    userTopArtists: null,
    userTopAlbums: null,
    userFriends: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_NAME:
            return {
                ...state,
                authUserName: action.authUserName
            }
        case SET_USER_KEY:
            return {
                ...state,
                userKey: action.userKey
            }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case SET_LOVED_TRACKS:
            return {
                ...state,
                lovedTracks: action.lovedTracks
            }
        case SET_USER_TOP_ARTISTS:
            return {
                ...state,
                userTopArtists: action.userTopArtists
            }
        case SET_USER_TOP_ALBUMS:
            return {
                ...state,
                userTopAlbums: action.userTopAlbums
            }
        case SET_USER_FRIENDS:
            return {
                ...state,
                userFriends: action.userFriends
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state
    }
}

export const setAuthUserName = (authUserName) => ({type: SET_AUTH_USER_NAME, authUserName});
export const setUserKey = (userKey) => ({type: SET_USER_KEY, userKey});
export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo});
export const setLovedTracks = (lovedTracks) => ({type: SET_LOVED_TRACKS, lovedTracks});
export const setUserTopArtists = (userTopArtists) => ({type: SET_USER_TOP_ARTISTS, userTopArtists});
export const setUserTopAlbums = (userTopAlbums) => ({type: SET_USER_TOP_ALBUMS, userTopAlbums});
export const setUserFriends = (userFriends) => ({type: SET_USER_FRIENDS, userFriends});
export const setCurrentUser = (currentUser) => ({type: SET_CURRENT_USER, currentUser})

export const getUserData = (authUserName, userKey) => {
    return (dispatch) => {
        dispatch(setAuthUserName(authUserName));
        dispatch(setUserKey(userKey));
    }
}

export const getUserInfo = (user) => {
    return (dispatch) => {
        userAPI.getInfo(user).then(response => {
            dispatch(setUserInfo(response.data.user))
        })
    }
}

export const getLovedTracks = (user) => {
    return (dispatch) => {
        userAPI.getLovedTracks(user).then(response => {
            dispatch(setLovedTracks(response.data.lovedtracks.track))
        })
    }
}

export const getUserTopArtists = (user) => {
    return (dispatch) => {
        userAPI.getTopArtists(user).then(response => {
            dispatch(setUserTopArtists(response.data.topartists.artist))
        })
    }
}

export const getUserTopAlbums = (user) => {
    return (dispatch) => {
        userAPI.getTopAlbums(user).then(response => {
            dispatch(setUserTopAlbums(response.data.topalbums.album))
        })
    }
}

export const getUserFriends = (user) => {
    return (dispatch) => {
        userAPI.getFriends(user).then(response => {
            dispatch(setUserFriends(response.data.friends.user))
        })
    }
}

export const getCurrentUser = (currentUser) => {
    return (dispatch) => {
        dispatch(setCurrentUser(currentUser))
    }
}

export default userReducer;