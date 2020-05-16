import {artistAPI} from "../api/api";

const SET_ARTIST_NAME = 'SET_ARTIST_NAME';
const SET_ARTIST ='SET_ARTIST';

let initialState = {
    artistName: '',
    artist: null,
    totalResults: null,
    page: null,
    pageSize: 20
}

const artistListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTIST_NAME:
            return {
                ...state,
                artistName: action.artistName
            }
        case SET_ARTIST:
            return {
                ...state,
                artist: action.artist.results.artistmatches.artist,
                page: action.artist.results['opensearch:Query'].startPage,
                totalResults: action.artist.results['opensearch:totalResults']
            }
        default:
            return state
    }
}

export const setArtistName = (artistName) => ({type: SET_ARTIST_NAME, artistName});
export const setArtist = (artist) => ({type: SET_ARTIST, artist});

export const getArtistName = (artistName) => {
    return (dispatch) => {
        dispatch(setArtistName(artistName))
    }
}

export const getArtist = (artistName, page) => {
    return (dispatch) => {
        artistAPI.searchArtist(artistName, page).then(response => {
            dispatch(setArtist(response.data))
        })
    }
}


export default artistListReducer