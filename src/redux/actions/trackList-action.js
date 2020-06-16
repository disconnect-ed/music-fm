import {trackAPI} from "../../api/api";
import {setTrackList, setTrackListError, setTrackNameList, trackListIsLoading} from "../reducers/trackList-reducer";

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