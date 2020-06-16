
const SET_ALBUM_INFO = 'SET_ALBUM_INFO';
const SET_ALBUM_ID ='SET_ALBUM_ID';
const SET_ALBUM_TRACKS ='SET_ALBUM_TRACKS';
const ALBUM_IS_LOADING ='ALBUM_IS_LOADING';
const SET_ALBUM_ERROR = 'SET_ALBUM_ERROR'

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM_INFO:
            return {
                ...state,
                albumInfo: action.albumInfo
            }
        case SET_ALBUM_ERROR:
            return {
                ...state,
                albumError: action.error
            }
        case SET_ALBUM_TRACKS:
            return {
                ...state,
                albumTracks: action.albumTracks
            }
        case SET_ALBUM_ID:
            return {
                ...state,
                albumId: action.albumId
            }
        case ALBUM_IS_LOADING:
            return {
                ...state,
                albumIsLoading: action.bool
            }
        default:
            return state
    }
}

let initialState = {
    albumId: null,
    albumInfo: null,
    albumTracks: null,
    albumIsLoading: true,
    albumError: null
}

export const setAlbumId = (albumId) => ({type: SET_ALBUM_ID, albumId})
export const setAlbumInfo = (albumInfo) => ({type: SET_ALBUM_INFO, albumInfo});
export const setAlbumTracks = (albumTracks) => ({type: SET_ALBUM_TRACKS, albumTracks});
export const albumIsLoading = (bool) => ({type: ALBUM_IS_LOADING, bool});
export const setAlbumError = (error = 'Попробуйте позже') => ({type: SET_ALBUM_ERROR, error});


export default albumReducer;