import {albumAPI} from "../api/api";

const SET_ALBUM_INFO = 'SET_ALBUM_INFO';
const SET_ALBUM_ID ='SET_ALBUM_ID';
const SET_ALBUM_TRACKS ='SET_ALBUM_TRACKS';

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM_INFO:
            return {
                ...state,
                albumInfo: action.albumInfo
            }
        case SET_ALBUM_TRACKS:
            return {
                ...state,
                albumTracks: action.albumTracks
            }
        case SET_ALBUM_ID:
            return {
                ...state,
                albumId: action.albumId
            }
        default:
            return state
    }
}

let initialState = {
    albumId: null,
    albumInfo: null,
    albumTracks: null,
}

// export const updateAlbumName = (albumName) => ({type: UPDATE_ALBUM_NAME, albumName})
export const setAlbumId = (albumId) => ({type: SET_ALBUM_ID, albumId})
export const setAlbumInfo = (albumInfo) => ({type: SET_ALBUM_INFO, albumInfo});
export const setAlbumTracks = (albumTracks) => ({type: SET_ALBUM_TRACKS, albumTracks});

export const getAlbumId = (albumId) => {
    return(dispatch) => {
        dispatch(setAlbumId(albumId))
    }
}

export const getAlbumInfo = (albumId) => {
    return (dispatch) => {
        albumAPI.getInfo(albumId).then(response => {
            dispatch(setAlbumInfo(response.data.album))
            dispatch(setAlbumTracks(response.data.album.tracks.track))
        })
    }
}


export default albumReducer;