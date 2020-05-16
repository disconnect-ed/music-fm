import {trackAPI} from "../api/api";

const SET_TRACK_NAME_LIST = 'SET_TRACK_NAME_LIST';
const SET_TRACK_LIST = 'SET_TRACK_LIST';
const SET_TRACK_LIST_ERROR = 'SET_TRACK_LIST_ERROR';

let initialState = {
    trackNameList: '',
    trackList: null,
    trackListError: null,
    totalResults: null,
    page: null,
    pageSize: 20
}

const trackListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACK_NAME_LIST:
            return {
                ...state,
                trackNameList: action.trackNameList
            }
        case SET_TRACK_LIST:
            return {
                ...state,
                trackList: action.trackList.results.trackmatches.track,
                page: action.trackList.results['opensearch:Query'].startPage,
                totalResults: action.trackList.results['opensearch:totalResults']
            }
        case SET_TRACK_LIST_ERROR:
            return {
                ...state,
                trackListError: action.trackListError
            }
        default:
            return state
    }
}

export const setTrackNameList = (trackNameList) => ({type: SET_TRACK_NAME_LIST, trackNameList});
export const setTrackList = (trackList) => ({type: SET_TRACK_LIST, trackList});
export const setTrackListError = (trackListError) => ({type: SET_TRACK_LIST_ERROR, trackListError});

export const getTrackNameList = (trackNameList) => {
    return (dispatch) => {
        dispatch(setTrackNameList(trackNameList))
    }
}

export const getTrackList = (trackNameList, page) => {
    return (dispatch) => {
        trackAPI.searchTrack(trackNameList, page).then(response => {
            dispatch(setTrackList(response.data));
        })
    }
}

export default trackListReducer;