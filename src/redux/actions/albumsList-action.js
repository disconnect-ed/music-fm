import {albumAPI} from "../../api/api";
import {albumListIsLoading, setAlbum, setAlbumListError, setAlbumName} from "../reducers/albumsList-reducer";

export const getAlbumName = (albumName) => {
    return (dispatch) => {
        dispatch(setAlbumName(albumName))
    }
}

export const getAlbumList = (albumName, page) => {
    return (dispatch) => {
        dispatch(albumListIsLoading(true))
        albumAPI.searchAlbum(albumName, page).then(
            response => {
                dispatch(setAlbumListError(null))
                dispatch(setAlbum(response.data))
                dispatch(albumListIsLoading(false))
            },
            error => {
                dispatch(setAlbumListError())
                dispatch(albumListIsLoading(false))
            }
        )
    }
}