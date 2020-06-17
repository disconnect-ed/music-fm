import {albumAPI} from "../../api/api";
import {
    ALBUM_IS_LOADING,
    SET_ALBUM_ERROR,
    SET_ALBUM_ID,
    SET_ALBUM_INFO,
    SET_ALBUM_TRACKS
} from "../reducers/album-reducer";

export const setAlbumId = (albumId) => ({type: SET_ALBUM_ID, albumId})
export const setAlbumInfo = (albumInfo) => ({type: SET_ALBUM_INFO, albumInfo});
export const setAlbumTracks = (albumTracks) => ({type: SET_ALBUM_TRACKS, albumTracks});
export const albumIsLoading = (bool) => ({type: ALBUM_IS_LOADING, bool});
export const setAlbumError = (error = 'Попробуйте позже') => ({type: SET_ALBUM_ERROR, error});

export const getAlbumId = (albumId) => {
    return (dispatch) => {
        dispatch(setAlbumId(albumId))
    }
}

export const getAlbumInfo = (albumId) => {
    return (dispatch) => {
        dispatch(albumIsLoading(true))
        albumAPI.getInfo(albumId).then(
            response => {
                if (response.data.error) {
                    dispatch(setAlbumError(response.data.message))
                    dispatch(albumIsLoading(false))
                    return
                }
                dispatch(setAlbumError(null))
                dispatch(setAlbumInfo(response.data.album))
                dispatch(setAlbumTracks(response.data.album.tracks.track))
                dispatch(albumIsLoading(false))
            },
            error => {
                dispatch(setAlbumError())
                dispatch(albumIsLoading(false))
            }
        )
    }
}