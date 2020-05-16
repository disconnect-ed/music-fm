import {albumAPI} from "../api/api";

const SET_ALBUM_NAME = 'SET_ALBUM_NAME';
const SET_ALBUM = 'SET_ALBUM';

let initialState = {
    albumName: '',
    album: null,
    totalResults: null,
    page: null,
    pageSize: 20
}

const albumsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM_NAME:
            return {
                ...state,
                albumName: action.albumName
            }
        case SET_ALBUM:
            return {
                ...state,
                album: action.album.results.albummatches.album,
                page: action.album.results['opensearch:Query'].startPage,
                totalResults: action.album.results['opensearch:totalResults']
            }
        default:
            return state
    }
}

export const setAlbumName = (albumName) => ({type: SET_ALBUM_NAME, albumName});
export const setAlbum = (album) => ({type: SET_ALBUM, album});

export const getAlbumName = (albumName) => {
    return (dispatch) => {
        dispatch(setAlbumName(albumName))
    }
}

export const getAlbum = (albumName, page) => {
    return (dispatch) => {
        albumAPI.searchAlbum(albumName, page).then(response => {
            dispatch(setAlbum(response.data))
        })
    }
}

export default albumsListReducer