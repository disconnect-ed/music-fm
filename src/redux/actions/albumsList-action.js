import {albumAPI} from "../../api/api";
import {ALBUM_LIST_IS_LOADING, SET_ALBUM, SET_ALBUM_LIST_ERROR, SET_ALBUM_NAME} from "../reducers/albumsList-reducer";

export const setAlbumName = (albumName) => ({type: SET_ALBUM_NAME, albumName});
export const setAlbum = (album) => ({type: SET_ALBUM, album});
export const albumListIsLoading = (bool) => ({type: ALBUM_LIST_IS_LOADING, bool});
export const setAlbumListError = (error = 'Попробуйте позже') => ({type: SET_ALBUM_LIST_ERROR, error});

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