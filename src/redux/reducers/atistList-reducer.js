
const SET_ARTIST_NAME = 'SET_ARTIST_NAME';
const SET_ARTIST ='SET_ARTIST';
const ARTIST_LIST_IS_LOADING ='ARTIST_LIST_IS_LOADING';
const SET_ARTIST_LIST_ERROR ='SET_ARTIST_LIST_ERROR';

let initialState = {
    artistName: '',
    artist: null,
    totalResults: null,
    page: null,
    pageSize: 20,
    artistListIsLoading: false,
    artistListError: null
}

const artistListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTIST_NAME:
            return {
                ...state,
                artistName: action.artistName
            }
        case SET_ARTIST_LIST_ERROR:
            return {
                ...state,
                artistListError: action.error
            }
        case ARTIST_LIST_IS_LOADING:
            return {
                ...state,
                artistListIsLoading: action.bool
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
export const artistListIsLoading = (bool) => ({type: ARTIST_LIST_IS_LOADING, bool});
export const setArtistListError = (error = 'Попробуйте позже') => ({type: SET_ARTIST_LIST_ERROR, error});


export default artistListReducer