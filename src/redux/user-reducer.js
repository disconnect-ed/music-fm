import {userAPI} from "../api/api";

const SET_AUTH_USER_NAME = 'SET_AUTH_USER_NAME';
const SET_USER_KEY = 'SET_USER_KEY';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_LOVED_TRACKS = 'SET_LOVED_TRACKS';
const SET_USER_TOP_ARTISTS = 'SET_USER_TOP_ARTISTS';
const SET_USER_TOP_ALBUMS = 'SET_USER_TOP_ALBUMS';
const SET_USER_FRIENDS = 'SET_USER_FRIENDS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const USER_LOGOUT = 'USER_LOGOUT';

let initialState = {
    authUserName: null,
    currentUser: null,
    userKey: null,
    userInfo: null,
    lovedTracks: null,
    userTopArtists: null,
    userTopAlbums: null,
    userFriends: null,
    friendsTotalResults: null,
    friendsPage: null,
    friendsPageSize: 10,
    artistsTotalResults: null,
    artistsPage: null,
    artistsPageSize: 8,
    albumsTotalResults: null,
    albumsPage: null,
    albumsPageSize: 8,
    tracksTotalResults: null,
    tracksPage: null,
    tracksPageSize: 10
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
                lovedTracks: action.lovedTracks.lovedtracks.track,
                tracksTotalResults: action.lovedTracks.lovedtracks['@attr'].total,
                tracksPage: action.lovedTracks.lovedtracks['@attr'].page,
            }
        case SET_USER_TOP_ARTISTS:
            return {
                ...state,
                userTopArtists: action.userTopArtists.topartists.artist,
                artistsTotalResults: action.userTopArtists.topartists['@attr'].total,
                artistsPage: action.userTopArtists.topartists['@attr'].page,
            }
        case SET_USER_TOP_ALBUMS:
            return {
                ...state,
                userTopAlbums: action.userTopAlbums.topalbums.album,
                albumsTotalResults: action.userTopAlbums.topalbums['@attr'].total,
                albumsPage: action.userTopAlbums.topalbums['@attr'].page,
            }
        case SET_USER_FRIENDS:
            return {
                ...state,
                userFriends: action.userFriends.friends.user,
                friendsTotalResults: action.userFriends.friends['@attr'].total,
                friendsPage: action.userFriends.friends['@attr'].page,
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_LOGOUT:
            return {
                authUserName: null,
                currentUser: null,
                userKey: null,
                userInfo: null,
                lovedTracks: null,
                userTopArtists: null,
                userTopAlbums: null,
                userFriends: null
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
export const setUserLogout = () => ({type: USER_LOGOUT})

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

export const getLovedTracks = (user, page) => {
    return (dispatch) => {
        userAPI.getLovedTracks(user, page).then(response => {
            dispatch(setLovedTracks(response.data))
        })
    }
}

export const getUserTopArtists = (user, page) => {
    return (dispatch) => {
        userAPI.getTopArtists(user, page).then(response => {
            dispatch(setUserTopArtists(response.data))
        })
    }
}

export const getUserTopAlbums = (user, page) => {
    return (dispatch) => {
        userAPI.getTopAlbums(user, page).then(response => {
            dispatch(setUserTopAlbums(response.data))
        })
    }
}

export const getUserFriends = (user, page) => {
    return (dispatch) => {
        userAPI.getFriends(user, page).then(response => {
            dispatch(setUserFriends(response.data))
        })
    }
}

export const getCurrentUser = (currentUser) => {
    return (dispatch) => {
        dispatch(setCurrentUser(currentUser))
    }
}

export const userLogout = () => {
    return(dispatch) => {
        dispatch(setUserLogout())
    }
}

export default userReducer;