import {trackAPI} from "../../api/api";
import {
    SET_TRACK_LIST,
    SET_TRACK_LIST_ERROR,
    SET_TRACK_NAME_LIST,
    TRACK_LIST_IS_LOADING
} from "../reducers/trackList-reducer";

export const setTrackNameList = (trackNameList) => ({type: SET_TRACK_NAME_LIST, trackNameList});
export const setTrackList = (trackList) => ({type: SET_TRACK_LIST, trackList});
export const trackListIsLoading = (bool) => ({type: TRACK_LIST_IS_LOADING, bool});
export const setTrackListError = (error = 'Попробуйте позже') => ({type: SET_TRACK_LIST_ERROR, error});

export const getTrackNameList = (trackNameList) => {
    return (dispatch) => {
        dispatch(setTrackNameList(trackNameList))
    }
}

export const getTrackList = (trackNameList, page) => {
    return (dispatch) => {
        dispatch(trackListIsLoading(true))
        trackAPI.searchTrack(trackNameList, page).then(
            response => {
                dispatch(setTrackListError(null))
                dispatch(setTrackList(response.data));
                dispatch(trackListIsLoading(false))
            },
            error => {
                dispatch(setTrackListError())
                dispatch(trackListIsLoading(false))
            })
    }
}