import {userAPI} from "../../api/api";
import {
    setAuthUserName, setCurrentUser,
    setLovedTracks, setUserFriends,
    setUserInfo,
    setUserKey, setUserLogout,
    setUserTopAlbums,
    setUserTopArtists, userFriendsIsLoading, userProfileDataIsLoading
} from "../reducers/user-reducer";

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