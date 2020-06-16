import {artistAPI} from "../../api/api";
import {artistListIsLoading, setArtist, setArtistListError, setArtistName} from "../reducers/atistList-reducer";

export const getArtistName = (artistName) => {
    return (dispatch) => {
        dispatch(setArtistName(artistName))
    }
}

export const getArtist = (artistName, page) => {
    return (dispatch) => {
        dispatch(artistListIsLoading(true))
        artistAPI.searchArtist(artistName, page).then(
            response => {
                dispatch(setArtistListError(null))
                dispatch(setArtist(response.data))
                dispatch(artistListIsLoading(false))
            },
            error => {
                dispatch(setArtistListError())
                dispatch(artistListIsLoading(false))
            }
        )
    }
}