import {artistAPI} from "../api/api";

const SET_ARTIST_INFO = 'SET_ARTIST_INFO';
const SET_ARTIST_ID = 'SET_ARTIST_ID';
const SET_ARTIST_SIMILAR = 'SET_ARTIST_SIMILAR';
const SET_ARTIST_TOP_TRACKS = 'SET_ARTIST_TOP_TRACKS';
const SET_ARTIST_TOP_ALBUMS = 'SET_ARTIST_TOP_ALBUMS';


let initialState = {
    artistId: null,
    artistInfo: null,
    artistSimilar: null,
    artistTopTracks: null,
    artistTopAlbums: null,
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTIST_ID:
            return {
                ...state,
                artistId: action.artistId
            }
        case SET_ARTIST_INFO:
            return {
                ...state,
                artistInfo: action.artistInfo
            }
        case SET_ARTIST_SIMILAR:
            return {
                ...state,
                artistSimilar: action.artistSimilar
            }
        case SET_ARTIST_TOP_TRACKS:
            return {
                ...state,
                artistTopTracks: action.artistTopTracks
            }
        case SET_ARTIST_TOP_ALBUMS:
            return {
                ...state,
                artistTopAlbums: action.artistTopAlbums
            }
        default:
            return state
    }
}

export const setArtistId = (artistId) => ({type: SET_ARTIST_ID, artistId});
export const setArtistInfo = (artistInfo) => ({type: SET_ARTIST_INFO, artistInfo});
export const setArtistSimilar = (artistSimilar) => ({type: SET_ARTIST_SIMILAR, artistSimilar});
export const setArtistTopTracks = (artistTopTracks) => ({type: SET_ARTIST_TOP_TRACKS, artistTopTracks});
export const setArtistTopAlbums = (artistTopAlbums) => ({type: SET_ARTIST_TOP_ALBUMS, artistTopAlbums});

export const getArtistId = (artistId) => {
    return (dispatch) => {
        dispatch(setArtistId(artistId))
    }
}

export const getArtistInfo = (artistId) => {
    return (dispatch) => {
        artistAPI.getInfo(artistId).then(response => {
            dispatch(setArtistInfo(response.data.artist))
        })
    }
}

export const getArtistSimilar = (artistId) => {
    debugger
    return (dispatch) => {
        debugger
        artistAPI.getSimilar(artistId).then(response => {
            dispatch(setArtistSimilar(response.data.similarartists.artist))
        })
    }
}

export const getArtistTopTracks = (artistId) => {
    return (dispatch) => {
        artistAPI.getTopTracks(artistId).then(response => {
            dispatch(setArtistTopTracks(response.data.toptracks.track))
        })
    }
}

export const getArtistTopAlbums = (artistId) => {
    return (dispatch) => {
        artistAPI.getTopAlbums(artistId).then(response => {
            dispatch(setArtistTopAlbums(response.data.topalbums.album))
        })
    }
}

export default artistReducer;