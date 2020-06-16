
const SET_TRACK_NAME = 'SET_TRACK_NAME';
const SET_TRACK_ARTIST_NAME = 'SET_TRACK_ARTIST_NAME';
const SET_TRACK_INFO = 'SET_TRACK_INFO';
const SET_SIMILAR_TRACKS = 'SET_SIMILAR_TRACKS';
const TRACKS_IS_LOADING = 'TRACKS_IS_LOADING';
const SET_TRACK_ERROR = 'SET_TRACK_ERROR';

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

export const setTrackName = (trackName) => ({type: SET_TRACK_NAME, trackName});
export const setTrackArtistName = (trackArtistName) => ({type: SET_TRACK_ARTIST_NAME, trackArtistName});
export const setTrackInfo = (trackInfo) => ({type: SET_TRACK_INFO, trackInfo});
export const setSimilarTracks = (similarTracks) => ({type: SET_SIMILAR_TRACKS, similarTracks});
export const tracksIsLoading = (bool) => ({type: TRACKS_IS_LOADING, bool});
export const setTrackError = (error = 'Попробуйте позже') => ({type: SET_TRACK_ERROR, error})

export default trackReducer;

