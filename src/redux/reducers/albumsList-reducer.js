
export const SET_ALBUM_NAME = 'SET_ALBUM_NAME';
export const SET_ALBUM = 'SET_ALBUM';
export const ALBUM_LIST_IS_LOADING = 'ALBUM_LIST_IS_LOADING';
export const SET_ALBUM_LIST_ERROR = 'SET_ALBUM_LIST_ERROR'

let initialState = {
    albumName: '',
    album: null,
    totalResults: null,
    page: null,
    pageSize: 20,
    albumListIsLoading: true,
    albumListError: null
}

const albumsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM_NAME:
            return {
                ...state,
                albumName: action.albumName
            }
        case ALBUM_LIST_IS_LOADING:
            return {
                ...state,
                albumListIsLoading: action.bool
            }
        case SET_ALBUM_LIST_ERROR:
            return {
                ...state,
                albumListError: action.error
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

export default albumsListReducer