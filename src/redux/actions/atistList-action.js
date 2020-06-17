import {artistAPI} from "../../api/api";
import {
    ARTIST_LIST_IS_LOADING,
    SET_ARTIST,
    SET_ARTIST_LIST_ERROR,
    SET_ARTIST_NAME
} from "../reducers/atistList-reducer";

export const setArtistName = (artistName) => ({type: SET_ARTIST_NAME, artistName});
export const setArtist = (artist) => ({type: SET_ARTIST, artist});
export const artistListIsLoading = (bool) => ({type: ARTIST_LIST_IS_LOADING, bool});
export const setArtistListError = (error = 'Попробуйте позже') => ({type: SET_ARTIST_LIST_ERROR, error});


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