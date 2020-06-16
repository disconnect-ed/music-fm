
const SET_ALBUM_NAME = 'SET_ALBUM_NAME';
const SET_ALBUM = 'SET_ALBUM';
const ALBUM_LIST_IS_LOADING = 'ALBUM_LIST_IS_LOADING';
const SET_ALBUM_LIST_ERROR = 'SET_ALBUM_LIST_ERROR'

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

export const setAlbumName = (albumName) => ({type: SET_ALBUM_NAME, albumName});
export const setAlbum = (album) => ({type: SET_ALBUM, album});
export const albumListIsLoading = (bool) => ({type: ALBUM_LIST_IS_LOADING, bool});
export const setAlbumListError = (error = 'Попробуйте позже') => ({type: SET_ALBUM_LIST_ERROR, error});



export default albumsListReducer