import {artistAPI} from "../../api/api";
import {
    setArtistId, setArtistInfo, setArtistSimilar,
    setArtistTopAlbums, setArtistTopTracks, artistInfoIsLoading, setArtistError
} from "../reducers/artist-reducer";

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
    debugger
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