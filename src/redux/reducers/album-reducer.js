
export const SET_ALBUM_INFO = 'SET_ALBUM_INFO';
export const SET_ALBUM_ID ='SET_ALBUM_ID';
export const SET_ALBUM_TRACKS ='SET_ALBUM_TRACKS';
export const ALBUM_IS_LOADING ='ALBUM_IS_LOADING';
export const SET_ALBUM_ERROR = 'SET_ALBUM_ERROR'

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

export default albumReducer;