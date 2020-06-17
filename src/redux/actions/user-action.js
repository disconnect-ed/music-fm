import {userAPI} from "../../api/api";
import {
    SET_AUTH_USER_NAME, SET_CURRENT_USER,
    SET_LOVED_TRACKS, SET_USER_FRIENDS,
    SET_USER_INFO,
    SET_USER_KEY, SET_USER_TOP_ALBUMS,
    SET_USER_TOP_ARTISTS, USER_FRIENDS_IS_LOADING, USER_LOGOUT, USER_PROFILE_DATA_IS_LOADING
} from "../reducers/user-reducer";

export const setAuthUserName = (authUserName) => ({type: SET_AUTH_USER_NAME, authUserName});
export const setUserKey = (userKey) => ({type: SET_USER_KEY, userKey});
export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo});
export const setLovedTracks = (lovedTracks) => ({type: SET_LOVED_TRACKS, lovedTracks});
export const setUserTopArtists = (userTopArtists) => ({type: SET_USER_TOP_ARTISTS, userTopArtists});
export const setUserTopAlbums = (userTopAlbums) => ({type: SET_USER_TOP_ALBUMS, userTopAlbums});
export const setUserFriends = (userFriends) => ({type: SET_USER_FRIENDS, userFriends});
export const setCurrentUser = (currentUser) => ({type: SET_CURRENT_USER, currentUser})
export const userFriendsIsLoading = (bool) => ({type: USER_FRIENDS_IS_LOADING, bool})
export const userProfileDataIsLoading = (bool) => ({type: USER_PROFILE_DATA_IS_LOADING, bool})
export const setUserLogout = () => ({type: USER_LOGOUT})

export const getUserData = (authUserName, userKey) => {
    return (dispatch) => {
        dispatch(setAuthUserName(authUserName));
        dispatch(setUserKey(userKey));
    }
}

// export const getUserInfo = (user) => {
//     return (dispatch) => {
//         userAPI.getInfo(user).then(response => {
//             dispatch(setUserInfo(response.data.user))
//         })
//     }
// }

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

export const info = (user) => {
    return userAPI.getInfo(user)
}

export const tracks = (user) => {
    return userAPI.getLovedTracks(user)
}

export const artists = (user) => {
    return userAPI.getTopArtists(user)
}

export const albums = (user) => {
    return userAPI.getTopAlbums(user)
}

export const getUserProfileData = (user) => {
    return (dispatch) => {
        dispatch(userProfileDataIsLoading(true))
        Promise.all([info(user), tracks(user), artists(user), albums(user)]).then(
            response => {
                dispatch(setUserInfo(response[0].data.user))
                dispatch(setLovedTracks(response[1].data))
                dispatch(setUserTopArtists(response[2].data))
                dispatch(setUserTopAlbums(response[3].data))
                dispatch(userProfileDataIsLoading(false))
            }
        )
    }
}

export const getUserFriends = (user, page) => {
    return (dispatch) => {
        dispatch(userFriendsIsLoading(true))
        userAPI.getFriends(user, page).then(response => {
            dispatch(setUserFriends(response.data))
            dispatch(userFriendsIsLoading(false))
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