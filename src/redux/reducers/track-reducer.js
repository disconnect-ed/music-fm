
export const SET_TRACK_NAME = 'SET_TRACK_NAME';
export const SET_TRACK_ARTIST_NAME = 'SET_TRACK_ARTIST_NAME';
export const SET_TRACK_INFO = 'SET_TRACK_INFO';
export const SET_SIMILAR_TRACKS = 'SET_SIMILAR_TRACKS';
export const TRACKS_IS_LOADING = 'TRACKS_IS_LOADING';
export const SET_TRACK_ERROR = 'SET_TRACK_ERROR';

let initialState = {
    trackName: null,
    trackArtistName: null,
    trackInfo: null,
    similarTracks: null,
    tracksIsLoading: true,
    trackError: null
}

const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACK_NAME:
            return {
                ...state,
                trackName: action.trackName
            }
        case SET_TRACK_ARTIST_NAME:
            return {
                ...state,
                trackArtistName: action.trackArtistName
            }
        case SET_TRACK_ERROR:
            return {
                ...state,
                trackError: action.error
            }
        case SET_TRACK_INFO:
            return {
                ...state,
                trackInfo: action.trackInfo
            }
        case SET_SIMILAR_TRACKS:
            return {
                ...state,
                similarTracks: action.similarTracks
            }
        case TRACKS_IS_LOADING:
            return {
                ...state,
                tracksIsLoading: action.bool
            }
        default:
            return state
    }
}

export default trackReducer;

