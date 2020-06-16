
const SET_AUTH_USER_NAME = 'SET_AUTH_USER_NAME';
const SET_USER_KEY = 'SET_USER_KEY';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_LOVED_TRACKS = 'SET_LOVED_TRACKS';
const SET_USER_TOP_ARTISTS = 'SET_USER_TOP_ARTISTS';
const SET_USER_TOP_ALBUMS = 'SET_USER_TOP_ALBUMS';
const SET_USER_FRIENDS = 'SET_USER_FRIENDS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_PROFILE_DATA_IS_LOADING = 'USER_PROFILE_DATA_IS_LOADING';
const USER_FRIENDS_IS_LOADING = 'USER_FRIENDS_IS_LOADING';

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
    tracksPageSize: 10,
    userProfileDataIsLoading: true,
    userFriendsIsLoading: true
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
        case USER_FRIENDS_IS_LOADING:
            return {
                ...state,
                userFriendsIsLoading: action.bool
            }
        case USER_PROFILE_DATA_IS_LOADING:
            return {
                ...state,
                userProfileDataIsLoading: action.bool
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
export const userFriendsIsLoading = (bool) => ({type: USER_FRIENDS_IS_LOADING, bool})
export const userProfileDataIsLoading = (bool) => ({type: USER_PROFILE_DATA_IS_LOADING, bool})
export const setUserLogout = () => ({type: USER_LOGOUT})

export default userReducer;