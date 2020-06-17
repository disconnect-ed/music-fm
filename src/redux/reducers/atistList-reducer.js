
export const SET_ARTIST_NAME = 'SET_ARTIST_NAME';
export const SET_ARTIST ='SET_ARTIST';
export const ARTIST_LIST_IS_LOADING ='ARTIST_LIST_IS_LOADING';
export const SET_ARTIST_LIST_ERROR ='SET_ARTIST_LIST_ERROR';

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

export default artistListReducer