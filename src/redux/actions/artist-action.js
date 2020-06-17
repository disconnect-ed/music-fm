import {artistAPI} from "../../api/api";
import {
    ARTIST_INFO_IS_LOADING, SET_ARTIST_ERROR,
    SET_ARTIST_ID,
    SET_ARTIST_INFO,
    SET_ARTIST_SIMILAR,
    SET_ARTIST_TOP_ALBUMS,
    SET_ARTIST_TOP_TRACKS
} from "../reducers/artist-reducer";

export const setArtistId = (artistId) => ({type: SET_ARTIST_ID, artistId});
export const setArtistInfo = (artistInfo) => ({type: SET_ARTIST_INFO, artistInfo});
export const setArtistSimilar = (artistSimilar) => ({type: SET_ARTIST_SIMILAR, artistSimilar});
export const setArtistTopTracks = (artistTopTracks) => ({type: SET_ARTIST_TOP_TRACKS, artistTopTracks});
export const setArtistTopAlbums = (artistTopAlbums) => ({type: SET_ARTIST_TOP_ALBUMS, artistTopAlbums});
export const artistInfoIsLoading = (bool) => ({type: ARTIST_INFO_IS_LOADING, bool});
export const setArtistError = (error = 'Попробуйте позже') => ({type: SET_ARTIST_ERROR, error})

export const getArtistId = (artistId) => {
    return (dispatch) => {
        dispatch(setArtistId(artistId))
    }
}

// export const getArtistInfo = (artistId) => {
//     return (dispatch) => {
//         artistAPI.getInfo(artistId).then(response => {
//             dispatch(setArtistInfo(response.data.artist))
//         })
//     }
// }
//
// export const getArtistSimilar = (artistId) => {
//     return (dispatch) => {
//         artistAPI.getSimilar(artistId).then(response => {
//             dispatch(setArtistSimilar(response.data.similarartists.artist))
//         })
//     }
// }
//
// export const getArtistTopTracks = (artistId) => {
//     return (dispatch) => {
//         artistAPI.getTopTracks(artistId).then(response => {
//             dispatch(setArtistTopTracks(response.data.toptracks.track))
//         })
//     }
// }

export const getArtistTopAlbums = (artistId, page) => {
    return (dispatch) => {
        artistAPI.getTopAlbums(artistId, page).then(response => {
            dispatch(setArtistTopAlbums(response.data))
        })
    }
}

export const info = (artistId) => {
    return artistAPI.getInfo(artistId)
}

export const similar = (artistId) => {
    return artistAPI.getSimilar(artistId)
}

export const tracks = (artistId) => {
    return artistAPI.getTopTracks(artistId)
}


export const albums = (artistId) => {
    return artistAPI.getTopAlbums(artistId)
}

export const getArtistData = (artistId) => {
    return (dispatch) => {
        dispatch(artistInfoIsLoading(true))
        Promise.all([info(artistId), similar(artistId), tracks(artistId),
            albums(artistId)]).then(
            response => {
                if (response[0].data.error) {
                    dispatch(setArtistError(response[0].data.message))
                    dispatch(artistInfoIsLoading(false))
                    return
                }
                dispatch(setArtistError(null))
                dispatch(setArtistInfo(response[0].data.artist))
                dispatch(setArtistSimilar(response[1].data.similarartists.artist))
                dispatch(setArtistTopTracks(response[2].data.toptracks.track))
                dispatch(setArtistTopAlbums(response[3].data))
                dispatch(artistInfoIsLoading(false))
            },
            error => {
                dispatch(setArtistError())
                dispatch(artistInfoIsLoading(false))
            }
        )
    }
}