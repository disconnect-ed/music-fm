
const SET_ARTIST_INFO = 'SET_ARTIST_INFO';
const SET_ARTIST_ID = 'SET_ARTIST_ID';
const SET_ARTIST_SIMILAR = 'SET_ARTIST_SIMILAR';
const SET_ARTIST_TOP_TRACKS = 'SET_ARTIST_TOP_TRACKS';
const SET_ARTIST_TOP_ALBUMS = 'SET_ARTIST_TOP_ALBUMS';
const ARTIST_INFO_IS_LOADING = 'ARTIST_INFO_IS_LOADING';
const SET_ARTIST_ERROR = 'SET_ARTIST_ERROR';


let initialState = {
    artistId: null,
    artistInfo: null,
    artistSimilar: null,
    artistTopTracks: null,
    artistTopAlbums: null,
    albumsTotalResults: null,
    albumsPage: null,
    artistError: null,
    albumsPageSize: 8,
    artistInfoIsLoading: true,
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
        case SET_ARTIST_ERROR:
            return {
                ...state,
                artistError: action.error
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
                artistTopAlbums: action.artistTopAlbums.topalbums.album,
                albumsPage: action.artistTopAlbums.topalbums['@attr'].page,
                albumsTotalResults: action.artistTopAlbums.topalbums['@attr'].totalPages,
            }
        case ARTIST_INFO_IS_LOADING:
            return {
                ...state,
                artistInfoIsLoading: action.bool
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
export const artistInfoIsLoading = (bool) => ({type: ARTIST_INFO_IS_LOADING, bool});
export const setArtistError = (error = 'Попробуйте позже') => ({type: SET_ARTIST_ERROR, error})



export default artistReducer;