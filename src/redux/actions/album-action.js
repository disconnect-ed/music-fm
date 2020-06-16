import {albumAPI} from "../../api/api";
import {albumIsLoading, setAlbumError, setAlbumId, setAlbumInfo, setAlbumTracks} from "../reducers/album-reducer";

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