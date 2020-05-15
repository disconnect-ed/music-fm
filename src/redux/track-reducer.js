import {trackAPI} from "../api/api";

const SET_TRACK_NAME = 'SET_TRACK_NAME';
const SET_TRACK_ARTIST_NAME = 'SET_TRACK_ARTIST_NAME';
const SET_TRACK_INFO = 'SET_TRACK_INFO';
const SET_SIMILAR_TRACKS = 'SET_SIMILAR_TRACKS';

let initialState = {
    trackName: null,
    trackArtistName: null,
    trackInfo: null,
    similarTracks: null
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
        default:
            return state
    }
}

export const setTrackName = (trackName) => ({type: SET_TRACK_NAME, trackName});
export const setTrackArtistName = (trackArtistName) => ({type: SET_TRACK_ARTIST_NAME, trackArtistName});
export const setTrackInfo = (trackInfo) => ({type: SET_TRACK_INFO, trackInfo});
export const setSimilarTracks = (similarTracks) => ({type: SET_SIMILAR_TRACKS, similarTracks});

export const getTrackParams = (trackName, trackArtistName) => {
    return (dispatch) => {
        dispatch(setTrackName(trackName));
        dispatch(setTrackArtistName(trackArtistName));
    }
}

export const getTrackInfo = (trackName, trackArtistName) => {
    debugger
    return (dispatch) => {
        trackAPI.getInfo(trackArtistName, trackName).then(response => {
            dispatch(setTrackInfo(response.data.track))
        })
    }
}

export const getSimilarTracks = (trackName, trackArtistName) => {
    debugger
    return (dispatch) => {
        trackAPI.getSimilar(trackArtistName, trackName).then(response => {
            dispatch(setSimilarTracks(response.data.similartracks.track))
        })
    }
}

export default trackReducer;

